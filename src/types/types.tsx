export interface IMeta {
  currentPage: number;
  perPage: number;
  totalPages: number;
}

export interface IItem {
  id: number;
  username: string;
  email: string;
  address: string | undefined;
}

export interface IData {
  meta: IMeta;
  items: IItem[];
}
