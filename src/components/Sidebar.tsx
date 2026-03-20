import Image from 'next/image';

import type { Suggestion } from '@/lib/types';

export function Sidebar({ suggestions }: { suggestions: Suggestion[] }) {
  return (
    <aside className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
          alt="Current user"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">you.creator</p>
          <p className="text-sm text-zinc-400">Building visual products</p>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
        <p className="text-sm font-semibold text-zinc-200">Suggested for you</p>
        <div className="mt-4 space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={suggestion.avatar}
                  alt={suggestion.username}
                  width={42}
                  height={42}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{suggestion.username}</p>
                  <p className="text-xs text-zinc-500">{suggestion.reason}</p>
                </div>
              </div>
              <button className="text-sm font-semibold text-sky-300">Follow</button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4">
        <p className="text-sm font-semibold">Highlights</p>
        <ul className="mt-3 space-y-3 text-sm text-zinc-300">
          <li>• Responsive feed layout</li>
          <li>• Local JSON-backed API route</li>
          <li>• Story rail, suggestions, and composer</li>
          <li>• Ready for auth/database upgrades</li>
        </ul>
      </div>
    </aside>
  );
}
