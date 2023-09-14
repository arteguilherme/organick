export interface IProduct {
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
  id?: string;
  name: string;
  slug: string;
  description: string;
  parent_id: number;
  featured: number;
  menu: number;
  image: string;
}