import { useState } from 'react';
import {
  tarotCardsConsts,
  type TarotCardType,
} from '../../../entities/tarot-card';
import { getRandomInt } from '../lib/getRandomInt.lib';

export function useTarot() {
  const [tarotCards, setTarotCards] = useState<TarotCardType[]>([]);

  const drawCards = () => {
    setTarotCards([]);
    const uniqueCards: TarotCardType[] = [];
    const usedIndexes = new Set<number>();

    while (uniqueCards.length < 10) {
      const randomIndex = getRandomInt(0, tarotCardsConsts.length - 1);

      if (!usedIndexes.has(randomIndex)) {
        usedIndexes.add(randomIndex);
        uniqueCards.push(tarotCardsConsts[randomIndex]);
      }
    }

    setTarotCards([...uniqueCards]);
  };

  return { tarotCards, drawCards };
}
