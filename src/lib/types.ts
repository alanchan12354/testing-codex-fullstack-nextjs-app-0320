export type Story = {
  id: string;
  username: string;
  avatar: string;
  accent: string;
};

export type Comment = {
  id: string;
  username: string;
  text: string;
};

export type Post = {
  id: string;
  username: string;
  location: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  createdAt: string;
  comments: Comment[];
};

export type Suggestion = {
  id: string;
  username: string;
  avatar: string;
  reason: string;
};

export type FeedData = {
  stories: Story[];
  posts: Post[];
  suggestions: Suggestion[];
};
