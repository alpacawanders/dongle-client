import Carousel from "@/components/common/ui/Carousel";
import ClubList from "@/components/domain/main/clubList/ClubList";
import { ClubType } from "@/types/club";

export default function Page() {
  const mocks: ClubType[] = [
    {
      id: 1,
      name: "가나다라",
      category: "가나다라",
      isRecruiting: true,
    },
    {
      id: 2,
      name: "나다라마",
      category: "나다라마",
      isRecruiting: false,
    },
    {
      id: 3,
      name: "다라마바",
      category: "다라마바",
      isRecruiting: true,
    },
    {
      id: 4,
      name: "라마바사",
      category: "라마바사",
      isRecruiting: false,
    },
  ];
  return (
    <div className="flex w-full flex-col gap-12 py-12 pb-48">
      <Carousel type="banner" />
      <ClubList clubs={mocks} />
    </div>
  );
}
