export interface Post {
  id: string;
  title: string;
  description: string;
  category: Category;
  author: Author;
  slug: string;
  image: string;
  body: string;
  translations: Post[];
  date_created: string;
  date_updated: string;
}

export interface Category {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  color?: string;
  posts: Post[];
}

export interface Author {
  id: string;
  first_name: string;
  last_name: string;
}

export type ContactPage = {
  title: string;
  subTitle: string;
  input1: {
    label: string;
    placeholder: string;
  };
  input2: {
    label: string;
    placeholder: string;
  };
  input3: {
    label: string;
    placeholder: string;
  };
  button: string;
  busyButton: string;
};

export interface Dictionary {
  siteTitle: string;
  siteDescription: string;
  navigation: { title: string; link: string }[];
  overall: {
    title: string;
    subTitle1: string;
    subTitle2: string;
  };
  categories: {
    title: string;
    subTitle: string;
  };
  post: {
    title: string;
    subTitle: string;
    description: string;
  };
  projects: {
    title: string;
    subTitle: string;
    description: string;
  };
  ctaCard: {
    title: string;
    description: string;
    button: string;
    placeholder: string;
    followText: string;
  };
  footer: {
    address: string;
    postalCode: string;
    tel: string;
    email: string;
    followText: string;
    rightsText: string;
    creatorText: string;
  };
  about: {
    title: string;
    subTitle: string;
    description1: string;
    description2: string;
    description3: string;
    title2: string;
    subTitle2: string;
  };
  contact: ContactPage;
}
