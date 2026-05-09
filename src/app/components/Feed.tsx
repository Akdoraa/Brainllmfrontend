import { Post } from './Post';
import { mockPosts } from '../data/mockData';

interface FeedProps {
  activeFilter: string;
}

export function Feed({ activeFilter }: FeedProps) {
  const filteredPosts = activeFilter === 'all'
    ? mockPosts
    : mockPosts.filter(post => post.type === activeFilter);

  return (
    <div className="bg-white">
      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 px-8">
          <p className="text-[15px] text-[#536471] mb-1">No posts in this category yet</p>
          <p className="text-[13px] text-[#536471]">Try selecting a different filter</p>
        </div>
      )}
    </div>
  );
}