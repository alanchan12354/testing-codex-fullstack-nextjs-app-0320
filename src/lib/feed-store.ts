import { promises as fs } from 'fs';
import path from 'path';

import type { FeedData, Post } from '@/lib/types';

const feedPath = path.join(process.cwd(), 'src/data/feed.json');

export async function getFeedData(): Promise<FeedData> {
  const raw = await fs.readFile(feedPath, 'utf8');
  return JSON.parse(raw) as FeedData;
}

export async function createPost(input: {
  username: string;
  location: string;
  image: string;
  caption: string;
}): Promise<Post> {
  const feed = await getFeedData();
  const newPost: Post = {
    id: `post-${Date.now()}`,
    username: input.username.trim(),
    location: input.location.trim(),
    image: input.image.trim(),
    caption: input.caption.trim(),
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    likes: Math.floor(Math.random() * 400) + 80,
    createdAt: 'JUST NOW',
    comments: []
  };

  const updatedFeed: FeedData = {
    ...feed,
    posts: [newPost, ...feed.posts]
  };

  await fs.writeFile(feedPath, JSON.stringify(updatedFeed, null, 2));
  return newPost;
}
