import { Settings } from 'lucide-react';

interface HeaderProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'All' },
  { id: 'industry', label: 'Industry' },
  { id: 'tech', label: 'Tech' },
  { id: 'market', label: 'Market' },
  { id: 'context', label: 'Context' },
  { id: 'trends', label: 'Trends' },
];

export function Header({ activeFilter, onFilterChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#eff3f4]">
      {/* Top Bar */}
      <div className="max-w-[600px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="w-8" />
        <h1 className="text-xl font-bold text-[#0f1419] tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
          brain
        </h1>
        <button className="text-[#0f1419] hover:bg-[#eff3f4] rounded-full p-2 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="border-t border-[#eff3f4] overflow-x-auto scrollbar-hide">
        <div className="max-w-[600px] mx-auto flex">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`flex-1 min-w-0 px-4 py-4 text-[15px] font-medium whitespace-nowrap transition-colors relative ${
                activeFilter === filter.id
                  ? 'text-[#0f1419] font-bold'
                  : 'text-[#536471] hover:bg-[#f7f9f9]'
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1d9bf0] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}