import Link from "next/link";
import PageNation from "@/components/common/PageNation";

export default function Page() {
  const notices = [
    {
      id: 1,
      title: "공지사항 제목",
      date: "2025.03.09",
      author: "총동아리연합회",
    },
    {
      id: 2,
      title: "공지사항 제목",
      date: "2025.03.09",
      author: "총동아리연합회",
    },
    {
      id: 3,
      title: "공지사항 제목",
      date: "2025.03.09",
      author: "총동아리연합회",
    },
  ];

  if (notices.length === 0) {
    return (
      <div className="flex flex-col gap-12 py-12">
        <h1 className="text-4xl font-bold text-zinc-700">동글 공지사항</h1>
        <p className="text-lg font-semibold text-zinc-400">
          등록된 공지사항이 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 py-12">
      <h1 className="text-4xl font-bold text-zinc-700">동글 공지사항</h1>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id}>
            <Link href={`/notice/${notice.id}`}>
              <div className="flex h-20 w-full cursor-pointer flex-row items-center justify-between border-b border-b-zinc-200 py-5 hover:border-b-zinc-400">
                <h5 className="text-lg font-semibold text-zinc-700">
                  공지사항 제목
                </h5>
                <div className="flex flex-row gap-2 font-medium text-zinc-500">
                  <span>2025.03.09</span>
                  <span>·</span>
                  <span>총동아리연합회</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <PageNation length={notices.length} />
    </div>
  );
}
