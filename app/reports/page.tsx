import PageNation from "@/components/common/PageNation";
import Link from "next/link";

export default function Page() {
  const reports = [
    {
      id: 1,
      title: "제목1",
      clubName: "동아리1",
      date: "2025.03.09",
    },
    {
      id: 2,
      title: "제목2",
      clubName: "동아리2",
      date: "2025.03.09",
    },
    {
      id: 3,
      title: "제목3",
      clubName: "동아리3",
      date: "2025.03.09",
    },
    {
      id: 4,
      title: "제목4",
      clubName: "동아리4",
      date: "2025.03.09",
    },
  ];
  return (
    <div className="flex flex-col gap-12 py-12">
      <h1 className="text-4xl font-bold text-zinc-700">활동보고서</h1>
      <div className="grid w-full grid-cols-3 gap-6">
        {reports.map((report) => (
          <Link
            href={`/reports/${report.id}`}
            key={report.title + report.id}
            className="flex w-full flex-col gap-4"
          >
            <div className="h-72 w-72 rounded-xl bg-zinc-200"></div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-zinc-500">
                {report.clubName}
              </span>
              <h1 className="text-2xl font-medium text-zinc-700">
                {report.title}
              </h1>
              <span className="font-medium text-zinc-300">{report.date}</span>
            </div>
          </Link>
        ))}
      </div>
      <PageNation length={reports.length} />
    </div>
  );
}
