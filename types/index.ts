export interface FoodItem {
    id: string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    price: number;
}

export interface User {
    username: string;
    token: string;
}
