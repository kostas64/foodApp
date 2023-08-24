import {images} from '../../constants';

export const shops = [
  {
    id: 0,
    name: 'Burgers Story',
    rate: 4.2,
    category: ['Burgers', 'Snacks'],
    price: 2,
    estimatedTime: [25, 30],
    image: images.burgerShop,
    plate: images.meat,
  },
  {
    id: 1,
    name: 'Beef King',
    rate: 4.1,
    category: ['Burgers'],
    price: 3,
    estimatedTime: [35, 45],
    image: images.beefKingShop,
    plate: images.beef,
  },
  {
    id: 2,
    name: 'Fishy',
    rate: 3.9,
    category: ['Sushi'],
    price: 1,
    estimatedTime: [15, 25],
    image: images.fishShop,
    plate: images.fish,
  },
  {
    id: 3,
    name: 'BBQ Brothers',
    rate: 4.7,
    category: ['Snacks'],
    price: 2,
    estimatedTime: [35, 40],
    image: images.bbqShop,
    plate: images.salmon,
  },
];
