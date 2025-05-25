import { useState, type FC } from 'react';
import { TarotCard, tarotPositions } from '../../../entities/tarot-card';
import { useTarot } from '../../../features/tarot-cards';

const MainPage: FC = () => {
  const { tarotCards, drawCards } = useTarot();
  const [inputValue, setInputValue] = useState<string>('');

  const onClickKnow = (): void => {
    setInputValue('');
    drawCards();
  };

  return (
    <div className="h-220 w-full flex flex-col items-center mt-5">
      <h1 className="text-4xl mb-5">Узнай свою судьбу!</h1>
      <span className="text-xl w-100 text-center mb-10">
        Напиши вопрос, который тебя интересует, и карты таро подскажут ответ.
      </span>
      <div className="mb-10">
        <input
          className="text-md border-2 border-[#00bcff] rounded-xl p-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-[#00bcff] cursor-pointer p-3 text-md rounded-md ml-2"
          onClick={() => onClickKnow()}
        >
          Узнать
        </button>
      </div>
      {tarotCards.length > 0 && (
        <>
          <div className="inline-grid grid-cols-5 grid-rows-2 gap-4 w-auto mb-10">
            {tarotCards.map((item, index) => (
              <TarotCard
                key={index}
                name={item.name}
                image={item.image}
                index={index + 1}
              />
            ))}
          </div>
          <span className="text-3xl mb-10">Объяснение</span>
          {tarotCards.map((item, index) => (
            <div className="flex flex-col gap-1 w-150" key={index}>
              <span className="text-xl" key={index}>
                {index + 1}. {tarotPositions[index]}
              </span>
              <span className="text-lg mb-6">{item.description}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MainPage;
