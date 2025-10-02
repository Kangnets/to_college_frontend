interface TitleProp {
  content: string;
}

export function SubTitle({ content }: TitleProp) {
  return (
    <div className="font-ghanachocolate flex w-full gap-[0.5rem] text-left text-[1rem] leading-[1.5rem] font-normal text-[#363C49]">
      {content}
    </div>
  );
}

export function MainTitle({ content }: TitleProp) {
  return (
    <div className="text-gradient font-ghanachocolate flex w-full gap-[0.5rem] text-center text-[1.375rem] leading-[2.0625rem] font-normal">
      {content}
    </div>
  );
}
