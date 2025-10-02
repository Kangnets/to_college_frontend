import { SubTitle } from '@/components/Title';
import { Uploader } from './_components/Uploader';
import { Notification } from './_components/Notification';
import { Header } from '@/components/Header';

export default function UploadPage() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <div>
        <Header />
      </div>
      <div>
        <SubTitle content="대화 내용을 업로드해주세요" />
        <div className="pt-4"> </div>

        <Uploader />
        <div className="pt-3"> </div>

        <Notification />
      </div>
    </div>
  );
}
