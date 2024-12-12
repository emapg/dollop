export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  specs: {
    [key: string]: string;
  };
  modelUrl?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  cart: CartItem[];
}