import { CartItem } from "../redux/slices/basketSlice";

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
