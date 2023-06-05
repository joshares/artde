import { initialStateType } from "./features/product/productSlice";

export type ProductStateType = {
  product: initialStateType;
};

export type ProductType = {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: any[]; // You can specify the type for this array
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: string;
  slug: string;
  sponsorship: null;
  tags: {
    /* Define the type for the tag objects */
  }[];
  topic_submissions: {
    [key: string]: any; // You can specify the type for the topic submission properties
  };
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    // Add more URL properties if needed
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    // Add more properties for the user if needed
  };
  width: number;
};

export type SingleProductType = {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string;
  downloads: number;
  exif: {
    make: string | null;
    model: string | null;
    name: string | null;
    exposure_time: string | null;
    aperture: string | null;
    // Add other properties as needed
  };
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
    // Add other properties as needed
  };
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
    position: {
      // Define position properties if needed
    } | null;
  };
  meta: {
    index: boolean;
    // Add other properties as needed
  };
  promoted_at: string;
  public_domain: boolean;
  related_collections: {
    total: number;
    type: string;
    results: any[];
    // Add other properties as needed
  };
  slug: string;
  sponsorship: null;
  tags: {
    // Define tag properties if needed
  }[];
  tags_preview: {
    // Define tag_preview properties if needed
  }[];
  topic_submissions: {
    // Define topic_submissions properties if needed
  };
  topics: {
    // Define topic properties if needed
  }[];
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    // Add other properties as needed
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    // Add other properties as needed
  };
  views: number;
  width: number;
};
