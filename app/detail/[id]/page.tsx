import Carousel from "@/components/common/ui/Carousel";
import Content from "@/components/common/ui/Content";
import Link from "next/link";

export default function Page() {
  const reports = [
    {
      id: 1,
      title: "제목1",
      date: "내용1",
    },
    {
      id: 2,
      title: "제목2",
      date: "내용2",
    },
    {
      id: 3,
      title: "제목3",
      date: "내용3",
    },
    {
      id: 4,
      title: "제목4",
      date: "내용4",
    },
    {
      id: 5,
      title: "제목5",
      date: "내용5",
    },
    {
      id: 6,
      title: "제목6",
      date: "내용6",
    },
    {
      id: 7,
      title: "제목7",
      date: "내용7",
    },
    {
      id: 8,
      title: "제목8",
      date: "내용8",
    },
    {
      id: 9,
      title: "제목9",
      date: "내용9",
    },
  ];
  const info = [
    {
      id: 1,
      title: "동아리 회장",
      content: "회장 이름",
    },
    {
      id: 2,
      title: "동아리 위치",
      content: "동아리 위치",
    },
    {
      id: 3,
      title: "연락처",
      content: "010-0000-0000",
    },
    {
      id: 4,
      title: "모집 기간",
      content: "0000.00.00 ~ 0000.00.00",
    },
    {
      id: 5,
      title: "sns",
      content: {
        instagram: "https://www.instagram.com/",
        github: "https://github.com/",
      },
    },
  ];

  const text = `안녕하세요. 순천대학교 웹 개발 팀 알파카유랑단 입니다.
함께 세상을 유랑할 팀원을 모집하고 있습니다.`;
  return (
    <div className="flex flex-col gap-6 py-24">
      <Carousel type="thumbnail" />
      <div className="flex flex-col gap-4">
        <span className="w-fit rounded-xl bg-zinc-100 p-3 text-lg font-semibold text-zinc-400">
          학술분과
        </span>
        <h1 className="text-4xl font-semibold text-zinc-700">clubname</h1>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex w-full flex-col gap-12">
          <div className="flex items-center justify-center rounded-2xl bg-zinc-100 p-6">
            <div className="grid grid-cols-2 gap-3">
              {info.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full flex-row gap-6 whitespace-nowrap"
                >
                  <span className="w-[100px] text-lg font-medium text-zinc-400">
                    {item.title}
                  </span>
                  <span className="text-lg font-semibold text-zinc-700">
                    {typeof item.content === "string" ? (
                      item.content
                    ) : (
                      <div className="flex flex-row gap-2 text-lg font-semibold text-zinc-400">
                        {Object.keys(item.content).map((key) => (
                          <span key={key}>{key}</span>
                        ))}
                      </div>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-zinc-700">
              동아리 소개
            </h1>
            <div className="flex flex-col gap-2 text-lg font-medium">
              <Content text={text} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-zinc-700">
              동아리 활동보고서 목록
            </h1>
            <div className="grid grid-cols-5 gap-3">
              {reports.map((e) => {
                return (
                  <div key={e.id} className="flex flex-col gap-1">
                    <div className="aspect-square w-auto rounded-xl bg-zinc-200" />
                    <span className="font-medium text-zinc-700">{e.title}</span>
                    <span className="text-xs font-medium text-zinc-400">
                      {e.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="flex h-14 w-56 items-center justify-center rounded-xl bg-primary-400 text-lg font-semibold text-white"
        >
          지원하기
        </Link>
      </div>
    </div>
  );
}
