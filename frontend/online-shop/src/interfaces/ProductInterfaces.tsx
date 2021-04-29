import { Category } from "./CategoryInterface";
import { Supplier } from "./SupplierInterface";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  productCategoryDto: Category;
  supplierDto: Supplier;
  imageUrl: string;
}
