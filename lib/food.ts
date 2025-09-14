import { FoodItem } from "../types";

export const items: FoodItem[] = [
  {
    id: '1',
    name: 'Burger',
    description: 'An american classic',
    image: '/images/burger.jpg',
    ingredients: ['Beef', 'Potato', 'Cheese'],
    price: 10
  },
  {
    id: '2',
    name: 'Pasta',
    description: 'Noodle with sauce',
    image: '/images/pasta.jpg',
    ingredients: ['Wheat', 'Cream', 'Pepper'],
    price: 15
  },
  {
    id: '3',
    name: 'Pizza',
    description: 'Traditional italian pie',
    image: '/images/pizza.jpg',
    ingredients: ['Wheat', 'Tomato', 'Cheese'],
    price: 20
  }
]