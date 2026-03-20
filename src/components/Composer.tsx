'use client';

import { useState } from 'react';

import type { FeedData } from '@/lib/types';

const initialForm = {
  username: 'you.creator',
  location: '',
  image: '',
  caption: ''
};

export function Composer({ onCreate }: { onCreate: (post: FeedData['posts'][number]) => void }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('saving');
    setError('');

    const response = await fetch('/api/feed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setStatus('error');
      setError(data.error ?? 'Unable to publish your post.');
      return;
    }

    const post = (await response.json()) as FeedData['posts'][number];
    onCreate(post);
    setForm(initialForm);
    setStatus('idle');
  }

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Create</h2>
          <p className="text-sm text-zinc-400">Share a fresh moment with your followers.</p>
        </div>
        <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs text-pink-200">
          Fullstack demo
        </span>
      </div>

      <form className="grid gap-3" onSubmit={handleSubmit}>
        <input
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-zinc-500"
          placeholder="Username"
          value={form.username}
          onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
        />
        <input
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-zinc-500"
          placeholder="Location"
          value={form.location}
          onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
        />
        <input
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-zinc-500"
          placeholder="Image URL"
          value={form.image}
          onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))}
        />
        <textarea
          className="min-h-28 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-zinc-500"
          placeholder="Write a caption"
          value={form.caption}
          onChange={(event) => setForm((current) => ({ ...current, caption: event.target.value }))}
        />
        <button
          type="submit"
          disabled={status === 'saving'}
          className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          {status === 'saving' ? 'Publishing…' : 'Publish post'}
        </button>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
      </form>
    </section>
  );
}
