import { Home, Bell } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#eff3f4] z-50">
      <div className="max-w-[600px] mx-auto flex items-center justify-around py-2">
        <button className="flex flex-col items-center justify-center p-3 text-[#0f1419] hover:bg-[#eff3f4] rounded-full transition-colors">
          <Home className="w-6 h-6" />
        </button>
        <button className="relative flex flex-col items-center justify-center p-3 text-[#536471] hover:bg-[#eff3f4] rounded-full transition-colors">
          <Bell className="w-6 h-6" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#1d9bf0] rounded-full" />
        </button>
      </div>
    </nav>
  );
}