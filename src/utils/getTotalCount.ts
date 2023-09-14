import { CartItem } from "../redux/slices/types/types";

export const getTotalCount = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);
};
