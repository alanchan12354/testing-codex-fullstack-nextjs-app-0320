import { FeedShell } from '@/components/FeedShell';
import { getFeedData } from '@/lib/feed-store';

export default async function Home() {
  const feed = await getFeedData();

  return <FeedShell initialFeed={feed} />;
}
