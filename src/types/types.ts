export interface CartItemType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export interface RootState {
  cart: {
    items: CartItemType[];
  };
}
