import { useState } from 'react';
import { Feed } from './components/Feed';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <div className="min-h-screen bg-white pb-16">
      <Header activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="max-w-[600px] mx-auto">
        <Feed activeFilter={activeFilter} />
      </div>
      <BottomNav />
    </div>
  );
}