'use client';

import { useEffect, useRef, useState } from 'react';

const photos = [
  { id: 1, label: 'Photo 1' },
  { id: 2, label: 'Photo 2' },
  { id: 3, label: 'Photo 3' },
  { id: 4, label: 'Photo 4' },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    setCurrent((index + photos.length) % photos.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main slide */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200 border-2 border-dashed border-neutral-300">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className={`absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-400 transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" />
            </svg>
            <span className="text-sm font-medium">{photo.label}</span>
          </div>
        ))}

      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-neutral-700' : 'w-2 bg-neutral-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
