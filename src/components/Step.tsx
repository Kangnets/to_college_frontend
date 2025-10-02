'use client';

import { motion } from 'framer-motion';

interface ResultInfoProp {
  num: number;
  step: string;
}

export function Step({ num, step }: ResultInfoProp) {
  return (
    <motion.div
      className="font-ghanachocolate flex w-full gap-[0.5rem] text-left text-[0.94rem] leading-[1.4rem] font-bold tracking-[-0.0256rem] text-black"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * num }}
      whileHover={{ x: 5, scale: 1.02 }}
    >
      <motion.div
        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF8AC8] text-[1.05rem] text-[#fff]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1 * num,
          type: 'spring',
          stiffness: 200,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {num}
      </motion.div>
      <motion.div
        className="flex items-center text-[#000]"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 * num + 0.2 }}
      >
        {step}
      </motion.div>
    </motion.div>
  );
}
export function Steps() {
  return (
    <div className="mt-9 flex w-full flex-col gap-[0.75rem]">
      <Step num={1} step="카톡 대화 내용을 업로드하고" />
      <Step num={2} step="우리의 대학생활은 어떨지 확인해보세요!" />
    </div>
  );
}
