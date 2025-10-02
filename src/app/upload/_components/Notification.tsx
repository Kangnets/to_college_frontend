'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HelpCircleIcon from '@/assets/helpCircleIcon.svg?react';

export function Notification() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-end gap-1 text-[0.875rem] leading-[1.3125rem] font-normal tracking-[-0.0256rem] text-[#6E7582] transition-colors hover:text-[#4A5568]"
        onClick={handleClick}
      >
        <div>
          <HelpCircleIcon />
        </div>
        <div>대화 내용 파일은 어떻게 다운받나요?</div>
      </div>

      <AnimatePresence>
        {isModalOpen && <NotificationModal onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
}

export function NotificationModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 text-[0.875rem] leading-[1.3125rem] font-semibold tracking-[-0.0256rem] text-[#1A1A1B]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="mx-4 max-w-md rounded-lg bg-white p-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }}
        onClick={e => e.stopPropagation()}
      >
        <motion.div
          className="text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="mb-3 flex">
            <p className="text-[#6743FF]">PC</p>에서 다운받는 방법
          </p>
          <ol className="list-inside space-y-2 text-sm">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <NotificationStep
                num={1}
                content="다운로드 받고 싶은 채팅방에 들어가주세요"
              />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <NotificationStep
                num={2}
                content="☰ 채팅방 메뉴 > ‘채팅방 설정’ 을 클릭해주세요"
              />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <NotificationStep
                num={3}
                content="‘대화 내용 내보내기' (Windows) 또는
‘대화 내용 저장' (Mac) 을 클릭해주세요"
              />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <NotificationStep
                num={4}
                content="저장된 파일을 업로드해주세요"
              />{' '}
            </motion.li>
          </ol>
        </motion.div>

        {/* <-- 구분선 --> */}

        <motion.div
          className="pt-9 text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="mb-3 flex">
            <p className="text-[#6743FF]">모바일</p>에서 다운받는 방법
          </p>
          <ol className="list-inside space-y-2 text-sm">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <NotificationStep
                num={1}
                content="다운로드 받고 싶은 채팅방에 들어가주세요"
              />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <NotificationStep
                num={2}
                content="☰ 채팅방 메뉴 > ‘채팅방 설정’ 을 클릭해주세요"
              />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <NotificationStep
                num={3}
                content="‘대화 내용 내보내기' > ‘텍스트 메시지만 저장' 을
클릭해주세요"
              />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <NotificationStep
                num={4}
                content="내 이메일로 파일을 전송한 다음 다운로드하여
파일을 업로드해주세요"
              />{' '}
            </motion.li>
          </ol>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function NotificationStep({
  num,
  content,
}: {
  num: number;
  content: string;
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF8AC8] text-[0.75rem] leading-[1.175rem] font-normal text-white">
          {num}
        </div>
        <div>{content}</div>
      </div>
    </>
  );
}
