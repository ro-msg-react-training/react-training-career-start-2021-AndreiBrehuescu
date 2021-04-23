import { Category } from "./CategoryInterface";
import { Supplier } from "./SupplierInterface";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  category: Category;
  supplier: Supplier;
  imageUrl: string;
}
