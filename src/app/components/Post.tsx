import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import type { BrainPost } from '../data/mockData';
import { categoryInfo } from '../data/mockData';

interface PostProps {
  post: BrainPost;
}

const typeConfig = {
  industry: { color: '#60a5fa', label: 'Industry' },
  tech: { color: '#a78bfa', label: 'Tech' },
  market: { color: '#34d399', label: 'Market' },
  context: { color: '#f97316', label: 'Context' },
  trends: { color: '#f87171', label: 'Trends' },
};

// Profile image placeholder
const PROFILE_IMAGE = 'https://images.unsplash.com/photo-1762341116674-784c5dbedeb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100';

export function Post({ post }: PostProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = typeConfig[post.type];
  const category = categoryInfo.find(c => c.id === post.type);

  return (
    <article className="flex gap-3 px-4 py-3 border-b border-[#eff3f4] hover:bg-[#f7f9f9] transition-colors">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="flex items-center gap-1 flex-wrap min-w-0">
            <span className="font-semibold text-[15px] text-[#0f1419] truncate">
              Brain Feed
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${category?.bgColor || 'bg-gray-100'} text-[#536471]`}>
              {config.label}
            </span>
            <span className="text-[15px] text-[#536471]">·</span>
            <span className="text-[15px] text-[#536471]">{post.timestamp}</span>
          </div>
          <button className="flex-shrink-0 text-[#536471] hover:text-[#1d9bf0] hover:bg-[#1d9bf0]/10 rounded-full p-1">
            <MoreHorizontal className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[15px] text-[#0f1419] leading-[20px] mb-1">
          {post.title}
        </h3>

        {/* Content Text */}
        <div className="text-[15px] text-[#0f1419] leading-[20px] mb-2">
          <p className="mb-1">
            {isExpanded ? post.content : post.content.slice(0, 180) + (post.content.length > 180 ? '...' : '')}
          </p>
          {post.content.length > 180 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#1d9bf0] hover:underline font-normal"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Image */}
        {post.imageUrl && (
          <div className="mb-3 rounded-2xl overflow-hidden border border-[#cfd9de]">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto max-h-[300px] object-cover"
            />
          </div>
        )}

        {/* Insights (only when expanded) */}
        {isExpanded && post.insights && post.insights.length > 0 && (
          <div className="mb-3 p-3 bg-[#f7f9f9] rounded-xl border border-[#eff3f4]">
            <p className="text-[13px] font-semibold text-[#0f1419] mb-2">Key Insights:</p>
            <ul className="space-y-1">
              {post.insights.map((insight, idx) => (
                <li key={idx} className="text-[13px] text-[#536471] leading-[16px] flex items-start">
                  <span className="mr-1.5">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}