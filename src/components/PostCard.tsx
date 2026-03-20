import Image from 'next/image';

import type { Post } from '@/lib/types';

function formatLikes(likes: number) {
  return new Intl.NumberFormat('en-US').format(likes);
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(18,18,20,0.9)] shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={post.avatar}
            alt={post.username}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{post.username}</p>
            <p className="text-sm text-zinc-400">{post.location}</p>
          </div>
        </div>
        <button className="text-zinc-400">•••</button>
      </div>

      <div className="relative aspect-[4/5] w-full">
        <Image src={post.image} alt={post.caption} fill className="object-cover" />
      </div>

      <div className="space-y-4 px-5 py-4">
        <div className="flex items-center justify-between text-xl">
          <div className="flex gap-4">
            <span>❤️</span>
            <span>💬</span>
            <span>📤</span>
          </div>
          <span>🔖</span>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">{formatLikes(post.likes)} likes</p>
          <p className="text-sm leading-6 text-zinc-200">
            <span className="mr-2 font-semibold">{post.username}</span>
            {post.caption}
          </p>
        </div>

        <div className="space-y-2 text-sm text-zinc-400">
          {post.comments.map((comment) => (
            <p key={comment.id}>
              <span className="mr-2 font-semibold text-zinc-200">{comment.username}</span>
              {comment.text}
            </p>
          ))}
        </div>

        <p className="text-xs tracking-[0.18em] text-zinc-500">{post.createdAt}</p>
      </div>
    </article>
  );
}
