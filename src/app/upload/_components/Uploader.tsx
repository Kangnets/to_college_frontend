'use client';

import { useRef } from 'react';
import PublishIcon from '@/assets/publish.svg?react';

export function Uploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('선택된 파일:', file);
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.txt,.zip"
        onChange={handleFileChange}
        className="hidden"
      />
      <div
        onClick={handleClick}
        className="font-pretendard flex w-full cursor-pointer justify-center rounded-[1.25rem] border-[2px] border-dashed border-[#FFB0DA] bg-[#fff] px-[4rem] py-[2.5rem] text-left text-[1rem] leading-[1.5rem] font-semibold tracking-[-0.0256rem] text-[#1A1A1B] transition-colors hover:bg-[#fafafa]"
      >
        <div className="flex flex-col items-center justify-center gap-[0.75rem]">
          <div>
            <PublishIcon />
          </div>
          <div className="flex flex-col items-center gap-[0.25rem]">
            <div>업로드 할 파일을 선택해주세요</div>
            <div className="text-[0.875rem] leading-[1.3125rem] font-medium text-[#515866]">
              .csv, .txt, .zip 형식으로 업로드해주세요
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
