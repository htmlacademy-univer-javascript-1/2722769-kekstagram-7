const NAMES = [
  'Кирилл',
  'Арина',
  'Никита',
  'Артём',
  'Андрей',
  'Семён',
  'Ярослав',
  'Максим',
  'Данил',
  'Глеб'
];

const DESCRIPTIONS = [
  'Тихий лесной ручей',
  'Яркий летний дождь',
  'Звездное ночное небо',
  'Туманное осеннее утро',
  'Шумный вечерний город',
  'Спокойное море',
  'Загадочный горный пейзаж',
  'Нежный весенний рассвет',
  'Теплые солнечные лучи',
  'Золотое поле',
  'Таинственный вечерний лес',
  'Свежий морской бриз',
  'Волшебная зимняя сказка',
  'Ласковое солнце',
  'Величественный горный хребет',
  'Уютный зимний вечер',
  'Красивый закат',
  'Восторженное утро',
  'Тихая ночная улица',
  'Старинный каменный мост',
  'Цветущая сакура',
  'Утренний туман',
  'Огненный закат',
  'Заснеженные вершины',
  'Тихая гавань'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (array) => array[getRandomNumber(0,array.length-1)];

let currentCommentId = 1;

const buildComment = () => {
  const partsCount = getRandomNumber(1, 2);
  const messageParts = [];

  for (let i = 0; i < partsCount; i++) {
    messageParts.push(getRandomArrayElement(MESSAGES));
  }

  return {
    id: currentCommentId++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: messageParts.join(' '),
    name: getRandomArrayElement(NAMES)
  };
};

const buildCommentsArray = () => {
  const total = getRandomNumber(0, 30);
  const result = [];

  for (let i = 0; i < total; i++) {
    result.push(buildComment());
  }

  return result;
};

const buildPhotoObject = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[index - 1],
  likes: getRandomNumber(15, 200),
  comments: buildCommentsArray()
});

const generatePhotosCollection = () => {
  const collection = [];
  for (let i = 1; i <= 25; i++) {
    collection.push(buildPhotoObject(i));
  }
  return collection;
};

// eslint-disable-next-line no-unused-vars
const photosData = generatePhotosCollection();

//console.log(photosData);

