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
    products: [
      {
        productName: 'Salmon & Broccoli',
        productPrice: 12.35,
        productDesc:
          'Fresh salmon with broccoli, carrots, brown rice and almonds',
        productCalories: 380.13,
        productImage: images.meat,
        productCategories: ['GMO', 'Gluten', 'Lactose'],
        productAllergens: [
          images.nutAllergie,
          images.fishAllergie,
          images.wheatAllergie,
        ],
      },
      {
        productName: 'Cheese Burger',
        productPrice: 8.0,
        productDesc:
          'Classic american cheese burger with beef meat 100%, cheddar and mayo',
        productCalories: 525.19,
        productImage: images.cheeseBurger,
        productCategories: ['GMO', 'Lactose'],
        productAllergens: [images.milkAllergie, images.soyAllergie],
      },
      {
        productName: 'Tricolore salad',
        productPrice: 9.5,
        productDesc:
          'A meditterenian salad with cucumber, small tomatos, onion and lettuce',
        productCalories: 180.4,
        productImage: images.saladUpper,
        productCategories: ['GMO', 'Gluten'],
        productAllergens: [
          images.wheatAllergie,
          images.soyAllergie,
          images.cornAllergie,
        ],
      },
      {
        productName: 'Gordon blue',
        productPrice: 15.25,
        productDesc: 'Hamon, cheese and mayo wrapped in pork meat',
        productCalories: 640.55,
        productImage: images.gordonBlue,
        productCategories: ['Gluten', 'Lactose'],
        productAllergens: [images.eggAllergie, images.shellfishAllergie],
      },
    ],
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
    products: [
      {
        productName: 'Salmon & Broccoli',
        productPrice: 12.35,
        productDesc:
          'Fresh salmon with broccoli, carrots, brown rice and almonds',
        productCalories: 380.13,
        productImage: images.meat,
        productCategories: ['GMO', 'Gluten', 'Lactose'],
        productAllergens: [
          images.nutAllergie,
          images.fishAllergie,
          images.wheatAllergie,
        ],
      },
      {
        productName: 'Cheese Burger',
        productPrice: 8.0,
        productDesc:
          'Classic american cheese burger with beef meat 100%, cheddar and mayo',
        productCalories: 525.19,
        productImage: images.cheeseBurger,
        productCategories: ['GMO', 'Lactose'],
        productAllergens: [images.milkAllergie, images.soyAllergie],
      },
      {
        productName: 'Tricolore salad',
        productPrice: 9.5,
        productDesc:
          'A meditterenian salad with cucumber, small tomatos, onion and lettuce',
        productCalories: 180.4,
        productImage: images.saladUpper,
        productCategories: ['GMO', 'Gluten'],
        productAllergens: [
          images.wheatAllergie,
          images.soyAllergie,
          images.cornAllergie,
        ],
      },
      {
        productName: 'Gordon blue',
        productPrice: 15.25,
        productDesc: 'Hamon, cheese and mayo wrapped in pork meat',
        productCalories: 640.55,
        productImage: images.gordonBlue,
        productCategories: ['Gluten', 'Lactose'],
        productAllergens: [images.eggAllergie, images.shellfishAllergie],
      },
    ],
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
    products: [
      {
        productName: 'Salmon & Broccoli',
        productPrice: 12.35,
        productDesc:
          'Fresh salmon with broccoli, carrots, brown rice and almonds',
        productCalories: 380.13,
        productImage: images.meat,
        productCategories: ['GMO', 'Gluten', 'Lactose'],
        productAllergens: [
          images.nutAllergie,
          images.fishAllergie,
          images.wheatAllergie,
        ],
      },
      {
        productName: 'Cheese Burger',
        productPrice: 8.0,
        productDesc:
          'Classic american cheese burger with beef meat 100%, cheddar and mayo',
        productCalories: 525.19,
        productImage: images.cheeseBurger,
        productCategories: ['GMO', 'Lactose'],
        productAllergens: [images.milkAllergie, images.soyAllergie],
      },
      {
        productName: 'Tricolore salad',
        productPrice: 9.5,
        productDesc:
          'A meditterenian salad with cucumber, small tomatos, onion and lettuce',
        productCalories: 180.4,
        productImage: images.saladUpper,
        productCategories: ['GMO', 'Gluten'],
        productAllergens: [
          images.wheatAllergie,
          images.soyAllergie,
          images.cornAllergie,
        ],
      },
      {
        productName: 'Gordon blue',
        productPrice: 15.25,
        productDesc: 'Hamon, cheese and mayo wrapped in pork meat',
        productCalories: 640.55,
        productImage: images.gordonBlue,
        productCategories: ['Gluten', 'Lactose'],
        productAllergens: [images.eggAllergie, images.shellfishAllergie],
      },
    ],
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
    products: [
      {
        productName: 'Salmon & Broccoli',
        productPrice: 12.35,
        productDesc:
          'Fresh salmon with broccoli, carrots, brown rice and almonds',
        productCalories: 380.13,
        productImage: images.meat,
        productCategories: ['GMO', 'Gluten', 'Lactose'],
        productAllergens: [
          images.nutAllergie,
          images.fishAllergie,
          images.wheatAllergie,
        ],
      },
      {
        productName: 'Cheese Burger',
        productPrice: 8.0,
        productDesc:
          'Classic american cheese burger with beef meat 100%, cheddar and mayo',
        productCalories: 525.19,
        productImage: images.cheeseBurger,
        productCategories: ['GMO', 'Lactose'],
        productAllergens: [images.milkAllergie, images.soyAllergie],
      },
      {
        productName: 'Tricolore salad',
        productPrice: 9.5,
        productDesc:
          'A meditterenian salad with cucumber, small tomatos, onion and lettuce',
        productCalories: 180.4,
        productImage: images.saladUpper,
        productCategories: ['GMO', 'Gluten'],
        productAllergens: [
          images.wheatAllergie,
          images.soyAllergie,
          images.cornAllergie,
        ],
      },
      {
        productName: 'Gordon blue',
        productPrice: 15.25,
        productDesc: 'Hamon, cheese and mayo wrapped in pork meat',
        productCalories: 640.55,
        productImage: images.gordonBlue,
        productCategories: ['Gluten', 'Lactose'],
        productAllergens: [images.eggAllergie, images.shellfishAllergie],
      },
    ],
  },
];
