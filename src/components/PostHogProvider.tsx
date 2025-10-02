'use client';

import posthog from 'posthog-js';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const PH_API_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || '/ph-x9a'; // vercel.json에서 만든 프록시 경로
const PH_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1) 최초 초기화 (한 번만)
  useEffect(() => {
    if (!PH_KEY) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('PostHog: NEXT_PUBLIC_POSTHOG_KEY 미설정(개발환경).');
      }
      return;
    }

    posthog.init(PH_KEY, {
      api_host: PH_API_HOST, // ← 여기 중요! '/ph-x9a'
      capture_pageview: false, // SPA는 라우팅 훅으로 수동 캡처 권장
      capture_pageleave: true, // 필요 시
      persistence: 'localStorage+cookie', // 기본값이지만 명시해도 좋음
      // ui_host: 'https://us.posthog.com', // 필요시 UI 호스트 지정
      // enable_recording_console_log: true, // 세션리플레이 옵션 등 필요시 추가
      loaded: () => {
        // 초기 로드 후 한 번 페이지뷰
        posthog.capture('$pageview');
      },
    });
  }, []);

  // 2) 라우트 변경 시 페이지뷰 추적
  useEffect(() => {
    if (!PH_KEY) return;
    // 검색파라미터까지 포함해 경로 구성
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
