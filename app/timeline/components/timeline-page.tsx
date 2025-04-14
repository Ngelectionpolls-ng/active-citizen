// components/TimelineFeed.tsx
'use client';
import { mockFeeds } from '@/utils/constants';
import { useState, useEffect, useRef } from 'react';
import { ArticleCard } from './article-card';

export default function TimelineFeed() {
  const [feeds, setFeeds] = useState(mockFeeds.slice(0, 4));
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, []);

  useEffect(() => {
    const newFeeds = mockFeeds.slice(0, (page + 1) * 4);
    setFeeds(newFeeds);
  }, [page]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-20">
      <div className="space-y-6 grid grid-cols-1 md:grid-cols-2  gap-4">
        {feeds.map(feed => (
          <ArticleCard 
            key={feed.id} 
            {...feed} 
            type={feed.type as 'petition' | 'donation'} 
          />
        ))}
      </div>
      <div ref={loader} className="py-10 text-center text-muted-foreground">
        Loading more...
      </div>
    </div>
  );
}
