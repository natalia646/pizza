import { CartItem } from "../redux/slices/types/types";
import { getTotalCount } from "./getTotalCount";
import { getTotalPrice } from "./getTotalPrice";


export const getItemsFromLS = () => {
  const data = localStorage.getItem("items");
  const items: CartItem[] = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items)
  const totalCount = getTotalCount(items)
  
  
  return {
    items,
    totalPrice,
    totalCount
  }
  
};
