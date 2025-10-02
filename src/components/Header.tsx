'use client';

import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="flex h-14 items-center px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center p-2 transition-opacity hover:opacity-70"
          aria-label="이전 페이지로 이동"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#1A1A1B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
