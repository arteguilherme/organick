export interface IProduct {
  _id?: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  featured: number;
  published: string;
  image: string;
  categories: ICategory;
}

export interface ICategory {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  parent_id: number;
  featured: number;
  menu: number;
  image: string;
}