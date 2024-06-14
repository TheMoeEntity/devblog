export type Paragraph = {
  image: string;
  text: string;
  caption: string;
  moreText: string;
};

export type Comments = {
  id: string;
  username: string;
  comment: string;
  date: string;
};

export interface Post {
  id: string;
  date: string;
  author: string;
  views: number;
  comments: Comments[];
  title: string;
  image: string[];
  caption: string;
  paragraph: Paragraph[];
  categories: string[];
  tags: string[];
}

export interface User {
  editor: boolean;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dob: string;
  bio: string;
  id: string;
  photo: string;
}
