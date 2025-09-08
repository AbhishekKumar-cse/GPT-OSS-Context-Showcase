'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { categories } from '@/lib/mock-data';
import { Search } from 'lucide-react';

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (!value || value === 'all') {
      current.delete(key);
    } else {
      current.set(key, value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('q', e.target.value);
  }

  return (
    <div className="bg-card p-4 rounded-lg border mb-8 flex flex-col md:flex-row gap-4 items-center">
      <div className="relative w-full md:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search submissions..." 
          className="pl-10"
          onChange={handleSearch}
          defaultValue={searchParams.get('q') || ''}
        />
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <Select
          onValueChange={(value) => handleFilterChange('category', value)}
          defaultValue={searchParams.get('category') || 'all'}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => handleFilterChange('sortBy', value)}
          defaultValue={searchParams.get('sortBy') || 'newest'}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
