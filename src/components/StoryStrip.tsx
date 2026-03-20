import Image from 'next/image';

import type { Story } from '@/lib/types';

export function StoryStrip({ stories }: { stories: Story[] }) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Stories</h2>
        <span className="text-sm text-zinc-400">Watch all</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-1">
        {stories.map((story) => (
          <div key={story.id} className="min-w-20 text-center">
            <div className={`mx-auto mb-2 rounded-full bg-gradient-to-br p-[3px] ${story.accent}`}>
              <div className="rounded-full bg-black p-[3px]">
                <Image
                  src={story.avatar}
                  alt={story.username}
                  width={68}
                  height={68}
                  className="h-[68px] w-[68px] rounded-full object-cover"
                />
              </div>
            </div>
            <p className="truncate text-xs text-zinc-300">{story.username}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
