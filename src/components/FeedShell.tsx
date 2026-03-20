'use client';

import { useState } from 'react';

import { Composer } from '@/components/Composer';
import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import { StoryStrip } from '@/components/StoryStrip';
import type { FeedData } from '@/lib/types';

export function FeedShell({ initialFeed }: { initialFeed: FeedData }) {
  const [feed, setFeed] = useState(initialFeed);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-col gap-4 rounded-[32px] border border-white/10 bg-black/30 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-pink-300">Next.js fullstack</p>
          <h1 className="text-4xl font-bold tracking-tight">Instapulse</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            An Instagram-inspired social feed with stories, polished cards, and a working API-backed post composer.
          </p>
        </div>
        <div className="flex gap-3 text-sm text-zinc-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Explore</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Reels</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Messages</span>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.35fr_0.65fr]">
        <section className="space-y-6">
          <StoryStrip stories={feed.stories} />
          <Composer onCreate={(post) => setFeed((current) => ({ ...current, posts: [post, ...current.posts] }))} />
          <div className="space-y-6">
            {feed.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <Sidebar suggestions={feed.suggestions} />
        </div>
      </div>
    </main>
  );
}
