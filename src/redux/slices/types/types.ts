export type CartItem = {
  id: string;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
  price: number;
  count: number;
  activeType?: number;
  activeSize?: number;
};

export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
}

export type FetchPizzasArgs = {
  activeIndex: number;
  sortValue: string;
  order: string;
  valueSearch: string;
};

export interface FullDescSlice {
  pizza: CartItem;
  status: string;
}
