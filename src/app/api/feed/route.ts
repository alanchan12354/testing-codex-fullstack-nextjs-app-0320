import { NextResponse } from 'next/server';

import { createPost, getFeedData } from '@/lib/feed-store';

export async function GET() {
  const feed = await getFeedData();
  return NextResponse.json(feed);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<{
    username: string;
    location: string;
    image: string;
    caption: string;
  }>;

  if (!body.username || !body.location || !body.image || !body.caption) {
    return NextResponse.json(
      { error: 'username, location, image, and caption are required.' },
      { status: 400 }
    );
  }

  const post = await createPost({
    username: body.username,
    location: body.location,
    image: body.image,
    caption: body.caption
  });

  return NextResponse.json(post, { status: 201 });
}
