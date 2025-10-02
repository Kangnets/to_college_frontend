'use client';

import { Button } from '@/components/Button';
import { Steps } from '@/components/Step';
import KakaoSVG from '@/assets/kakao.svg';
import { motion } from 'framer-motion';
import posthog from 'posthog-js';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.capture('home_page_view');
    }
  }, []);

  return (
    <motion.div
      className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="font-pretendard text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            className="w-72"
            src="/to_college_logo.webp"
            alt="logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.p
            className="text-gradient font-ghanachocolate mt-4 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            단톡 내용으로 확인하는 우리의 대학 라이프
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Steps />
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="mt-4" num={100} variant="kakao" size="default">
            <div className="flex items-center">
              <KakaoSVG />
              <div className="px-20">카카오 로그인</div>
            </div>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
