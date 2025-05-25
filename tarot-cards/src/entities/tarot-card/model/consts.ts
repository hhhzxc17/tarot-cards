import type { TarotCardType } from './types/tarotCard.type';

export const tarotPositions: string[] = [
  'Суть ситуации',
  'Препятствие',
  'Основа (корень проблемы)',
  'Прошлое',
  'Потенциал (что может быть)',
  'Ближайшее будущее',
  'Вы (ваша позиция)',
  'Окружение (влияние извне)',
  'Надежды / страхи',
  'Итог',
];

export const tarotCardsConsts: TarotCardType[] = [
  {
    name: 'Шут',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    description:
      'Начало пути, свобода, беззаботность, новые возможности, спонтанность, легкость восприятия, доверие жизни.',
  },
  {
    name: 'Маг',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    description:
      'Власть воли и творческая энергия, умение управлять ситуацией, проявление желаний в реальность, концентрация внимания.',
  },
  {
    name: 'Верховная Жрица',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    description:
      'Интуиция, тайные знания, подсознание, мудрость, внутреннее видение, духовные поиски.',
  },
  {
    name: 'Императрица',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    description:
      'Плодородие, изобилие, забота, материнство, природа, творчество, комфорт и любовь.',
  },
  {
    name: 'Император',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
    description:
      'Власть, структура, стабильность, порядок, контроль, лидерство, ответственность.',
  },
  {
    name: 'Иерофант',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    description:
      'Традиции, духовность, обучение, мораль, социальные нормы, наставничество.',
  },
  {
    name: 'Влюблённые',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg',
    description:
      'Любовь, партнерство, выбор, гармония, союз, эмоциональное единение.',
  },
  {
    name: 'Колесница',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    description:
      'Победа, решительность, контроль над ситуацией, движение вперед, сила воли.',
  },
  {
    name: 'Сила',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    description:
      'Внутренняя сила, терпение, сострадание, храбрость, преодоление препятствий.',
  },
  {
    name: 'Отшельник',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    description:
      'Поиск истины, самоанализ, уединение, мудрость, внутренний свет.',
  },
  {
    name: 'Колесо Фортуны',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    description: 'Перемены, циклы, удача, судьба, карма, новые возможности.',
  },
  {
    name: 'Справедливость',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
    description:
      'Честность, справедливость, баланс, закон, ответственность, решение проблем.',
  },
  {
    name: 'Повешенный',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    description:
      'Жертва, переосмысление, пауза, новый взгляд на ситуацию, отпускание контроля.',
  },
  {
    name: 'Смерть',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    description:
      'Конец и начало, трансформация, обновление, освобождение от прошлого.',
  },
  {
    name: 'Умеренность',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    description:
      'Баланс, гармония, терпение, исцеление, умение находить золотую середину.',
  },
  {
    name: 'Дьявол',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    description:
      'Привязанности, искушения, зависимость, материализм, ограничения.',
  },
  {
    name: 'Башня',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
    description:
      'Разрушение старого, кризис, внезапные перемены, освобождение.',
  },
  {
    name: 'Звезда',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg',
    description:
      'Надежда, вдохновение, духовное озарение, спокойствие, вера в лучшее.',
  },
  {
    name: 'Луна',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    description: 'Иллюзии, страхи, подсознание, обман, интуиция, скрытое.',
  },
  {
    name: 'Солнце',
    type: 'Cтарший аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    description: 'Радость, успех, энергия, свет, ясность, жизненный подъем.',
  },
  {
    name: 'Суд',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
    description:
      'Возрождение, пробуждение, переоценка, прощение, окончательное решение.',
  },
  {
    name: 'Мир',
    type: 'Старший Аркан',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    description:
      'Завершение цикла, достижение цели, целостность, гармония, успех.',
  },
  {
    name: 'Туз Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/960px-Wands01.jpg',
    description: 'Начало, потенциал, энергия и вдохновение для нового пути.',
  },
  {
    name: 'Двойка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/960px-Wands02.jpg',
    description: 'Баланс, выбор, планирование и сотрудничество.',
  },
  {
    name: 'Тройка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
    description: 'Рост, расширение, первые успехи и прогресс.',
  },
  {
    name: 'Четвёрка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
    description: 'Стабильность, отдых, защита и укрепление позиции.',
  },
  {
    name: 'Пятёрка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
    description: 'Конфликт, конкуренция, вызовы и преодоление препятствий.',
  },
  {
    name: 'Шестёрка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
    description: 'Победа, признание, достижение целей и триумф.',
  },
  {
    name: 'Семёрка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg',
    description: 'Отстаивание своих позиций, стратегия и настойчивость.',
  },
  {
    name: 'Восьмёрка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
    description: 'Движение, скорость, изменения и импульс.',
  },
  {
    name: 'Девятка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg',
    description:
      'Защита, устойчивость, настойчивость и подготовка к завершению.',
  },
  {
    name: 'Десятка Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
    description: 'Завершение цикла, ответственность, нагрузка и итоги.',
  },
  {
    name: 'Паж Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
    description: 'Новое сообщение, начало обучения, юность и свежие идеи.',
  },
  {
    name: 'Рыцарь Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
    description: 'Действие, движение вперед, смелость и страсть.',
  },
  {
    name: 'Королева Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
    description: 'Зрелость, забота, интуиция и поддержка.',
  },
  {
    name: 'Король Жезлы',
    type: 'Младший Аркан (Жезлы)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
    description: 'Власть, руководство, контроль и зрелость.',
  },
  {
    name: 'Туз Кубки',
    type: 'Младший Аркан (Кубки)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
    description: 'Начало, потенциал, энергия и вдохновение для нового пути.',
  },
  {
    name: 'Двойка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/800px-Cups02.jpg',
    description: 'Баланс, выбор, планирование и сотрудничество.',
  },
  {
    name: 'Тройка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/800px-Cups03.jpg',
    description: 'Рост, расширение, первые успехи и прогресс.',
  },
  {
    name: 'Четвёрка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/800px-Cups04.jpg',
    description: 'Стабильность, отдых, защита и укрепление позиции.',
  },
  {
    name: 'Пятёрка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/800px-Cups05.jpg',
    description: 'Конфликт, конкуренция, вызовы и преодоление препятствий.',
  },
  {
    name: 'Шестёрка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/800px-Cups06.jpg',
    description: 'Победа, признание, достижение целей и триумф.',
  },
  {
    name: 'Семёрка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/800px-Cups07.jpg',
    description: 'Отстаивание своих позиций, стратегия и настойчивость.',
  },
  {
    name: 'Восьмёрка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/800px-Cups08.jpg',
    description: 'Движение, скорость, изменения и импульс.',
  },
  {
    name: 'Девятка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/800px-Cups09.jpg',
    description:
      'Защита, устойчивость, настойчивость и подготовка к завершению.',
  },
  {
    name: 'Десятка Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/800px-Cups10.jpg',
    description: 'Завершение цикла, ответственность, нагрузка и итоги.',
  },
  {
    name: 'Паж Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/800px-Cups11.jpg',
    description: 'Новое сообщение, начало обучения, юность и свежие идеи.',
  },
  {
    name: 'Рыцарь Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/800px-Cups12.jpg',
    description: 'Действие, движение вперед, смелость и страсть.',
  },
  {
    name: 'Королева Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/800px-Cups13.jpg',
    description: 'Зрелость, забота, интуиция и поддержка.',
  },
  {
    name: 'Король Кубки',
    type: 'Младший Аркан (Кубки)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/800px-Cups14.jpg',
    description: 'Власть, руководство, контроль и зрелость.',
  },
  {
    name: 'Туз Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/800px-Swords01.jpg',
    description: 'Начало, потенциал, энергия и вдохновение для нового пути.',
  },
  {
    name: 'Двойка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/800px-Swords02.jpg',
    description: 'Баланс, выбор, планирование и сотрудничество.',
  },
  {
    name: 'Тройка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/800px-Swords03.jpg',
    description: 'Рост, расширение, первые успехи и прогресс.',
  },
  {
    name: 'Четвёрка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/800px-Swords04.jpg',
    description: 'Стабильность, отдых, защита и укрепление позиции.',
  },
  {
    name: 'Пятёрка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/800px-Swords05.jpg',
    description: 'Конфликт, конкуренция, вызовы и преодоление препятствий.',
  },
  {
    name: 'Шестёрка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/800px-Swords06.jpg',
    description: 'Победа, признание, достижение целей и триумф.',
  },
  {
    name: 'Семёрка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/800px-Swords07.jpg',
    description: 'Отстаивание своих позиций, стратегия и настойчивость.',
  },
  {
    name: 'Восьмёрка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/800px-Swords08.jpg',
    description: 'Движение, скорость, изменения и импульс.',
  },
  {
    name: 'Девятка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/800px-Swords09.jpg',
    description:
      'Защита, устойчивость, настойчивость и подготовка к завершению.',
  },
  {
    name: 'Десятка Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/800px-Swords10.jpg',
    description: 'Завершение цикла, ответственность, нагрузка и итоги.',
  },
  {
    name: 'Паж Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/800px-Swords11.jpg',
    description: 'Новое сообщение, начало обучения, юность и свежие идеи.',
  },
  {
    name: 'Рыцарь Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/800px-Swords12.jpg',
    description: 'Действие, движение вперед, смелость и страсть.',
  },
  {
    name: 'Королева Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/800px-Swords13.jpg',
    description: 'Зрелость, забота, интуиция и поддержка.',
  },
  {
    name: 'Король Мечи',
    type: 'Младший Аркан (Мечи)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/800px-Swords14.jpg',
    description: 'Власть, руководство, контроль и зрелость.',
  },
  {
    name: 'Туз Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/800px-Pents01.jpg',
    description: 'Начало, потенциал, энергия и вдохновение для нового пути.',
  },
  {
    name: 'Двойка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/800px-Pents02.jpg',
    description: 'Баланс, выбор, планирование и сотрудничество.',
  },
  {
    name: 'Тройка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/800px-Pents03.jpg',
    description: 'Рост, расширение, первые успехи и прогресс.',
  },
  {
    name: 'Четвёрка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/800px-Pents04.jpg',
    description: 'Стабильность, отдых, защита и укрепление позиции.',
  },
  {
    name: 'Пятёрка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/800px-Pents05.jpg',
    description: 'Конфликт, конкуренция, вызовы и преодоление препятствий.',
  },
  {
    name: 'Шестёрка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/800px-Pents06.jpg',
    description: 'Победа, признание, достижение целей и триумф.',
  },
  {
    name: 'Семёрка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/800px-Pents07.jpg',
    description: 'Отстаивание своих позиций, стратегия и настойчивость.',
  },
  {
    name: 'Восьмёрка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/800px-Pents08.jpg',
    description: 'Движение, скорость, изменения и импульс.',
  },
  {
    name: 'Девятка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/800px-Pents09.jpg',
    description:
      'Защита, устойчивость, настойчивость и подготовка к завершению.',
  },
  {
    name: 'Десятка Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/800px-Pents10.jpg',
    description: 'Завершение цикла, ответственность, нагрузка и итоги.',
  },
  {
    name: 'Паж Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/800px-Pents11.jpg',
    description: 'Новое сообщение, начало обучения, юность и свежие идеи.',
  },
  {
    name: 'Рыцарь Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/800px-Pents12.jpg',
    description: 'Действие, движение вперед, смелость и страсть.',
  },
  {
    name: 'Королева Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/800px-Pents13.jpg',
    description: 'Зрелость, забота, интуиция и поддержка.',
  },
  {
    name: 'Король Пентакли',
    type: 'Младший Аркан (Пентакли)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/800px-Pents14.jpg',
    description: 'Власть, руководство, контроль и зрелость.',
  },
];
