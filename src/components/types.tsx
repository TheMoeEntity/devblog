export type Paragraph = {
  image: string;
  text: string;
  caption: string;
  moreText: string;
};

export type Comments = {
  id: String;
  username: string;
  comment: String;
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
