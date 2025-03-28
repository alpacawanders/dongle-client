import BackSpaceButton from "@/components/common/ui/BackSpaceButton";
import Carousel from "@/components/common/ui/Carousel";
import Content from "@/components/common/ui/Content";

export default function Report() {
  return (
    <div className="flex w-full flex-col gap-12 py-12">
      <Carousel type={"report"} />
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-semibold text-zinc-500">동아리명</span>
        <h1 className="text-4xl font-bold text-zinc-700">활동보고서 제목</h1>
        <span className="text-2xl font-medium text-zinc-300">2025.03.09</span>
      </div>
      <div className="w-full border-y border-y-zinc-200 py-12">
        <Content text={"활동보고서 내용입니다."} />
      </div>
      <div className="flex w-full items-center justify-end">
        <BackSpaceButton>뒤로가기</BackSpaceButton>
      </div>
    </div>
  );
}
