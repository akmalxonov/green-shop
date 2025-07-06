export interface UserType {
  name: string;
  age: number;
}

export type Status = "success" | "error" | "pending";

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];
  name: string;
  order_list: [];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}
export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];
  name: string;
  order_list: [];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}

export interface CategoriesType {
  count: number;
  route_path: string;
  title: string;
  _id: string;
}
export interface DiscountType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}

export interface blogType {
  id: string;
  created_by: string;
  title: string;
  content: string;
  views: number;
  reaction_length: number;
  created_at: string;
  __v: number;
  short_description: string;
}

export interface ProductsType {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price: string;
  short_description: string;
  description: string;
  main_image: string;
  detailed_images: string[];
  rate: number;
  views: number;
  tags: [];
  comments: string[];
  created_by: string;
  created_at: string;
  __v: number;
  sold_times: number;
}

export interface ProductTypeLocal extends ProductsType {
  count: number;
  userPrice: number;
}
export interface OrderType {
  _id: string;
  created_by: string;
   shop_list: {
    main_image: string;
    title: string;
    category: string;
    counter: number;
    userPrice: number;
  }[];
  extra_shop_info: {
    total: number;
    method: string;
  };
  billing_address: {
    name: string;
    surname: string;
  };
  expireAt: string;
  created_at: string;
  __v: 0;
}

export interface MakeOrderType {
  shop_list:ProductsType[];
  billing_address: {
    name: string;
    surname: string;
  };
  extra_shop_info: {
    total: number;
    method: string;
  };
}

export type AddressFormValues = {
  name: string;
  surname: string;
  country: string;
  town: string;
  street_address: string;
  state: string;
  zip: string;
  email: string;
  phone_number: string;
};

export interface AddressType {
  _id?: string; 
  name: string;
  surname: string;
  town: string;
  street_address: string;
  email: string;
  phone_number: string;
}
export interface idType{
  _id:string
}

export interface AddressResponseType {
  country: string;
  [key: string]: unknown;
}

export interface OrderResponseType {
  orderId: string;
  [key: string]: unknown;
}

export interface CouponResponse {
  data: {
    discount_for: number;
  };
}