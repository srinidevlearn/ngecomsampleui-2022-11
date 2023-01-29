export enum Category {
  Electronics = 'electronics',
  Stationary = 'stationary',
}
export interface IProductDetails {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  isAvailable?: boolean;
  category?: Category;
  manufacturer?: string;
  price?: number;
}
