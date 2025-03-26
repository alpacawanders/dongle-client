import BackSpaceButton from "@/components/common/ui/BackSpaceButton";
import Content from "@/components/common/ui/Content";
import AttachMentIcon from "@/assets/images/attachmentIcon.svg";

export default function Page() {
  const content = "공지사항 입니다.";
  return (
    <div className="flex flex-col gap-12 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-zinc-700">공지사항 제목</h1>
        <div className="flex flex-row gap-2 font-medium text-zinc-500">
          <span>2025.03.09</span>
          <span>·</span>
          <span>총동아리연합회</span>
        </div>
      </div>
      <div className="w-full border-y border-y-zinc-200 py-12">
        <Content text={content} />
      </div>
      <div className="flex w-fit cursor-pointer flex-row items-center gap-2 py-3 font-medium text-primary-300">
        <AttachMentIcon />
        <span className="hover:underline">파일 이름</span>
      </div>
      <div className="flex w-full items-center justify-end">
        <BackSpaceButton>공지사항 목록</BackSpaceButton>
      </div>
    </div>
  );
}
