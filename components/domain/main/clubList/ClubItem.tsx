import clsx from "clsx";

export default function ClubItem({
  clubName,
  category,
  isRecruiting,
}: {
  clubName: string;
  category: string;
  isRecruiting: boolean;
}) {
  return (
    <button
      className={clsx(
        "flex h-20 w-[300px] items-center justify-between rounded-xl border px-6 py-3",
        isRecruiting ? "border-green-500" : "border-zinc-200",
      )}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold">{clubName}</h3>
        <span className="text-xs font-semibold text-zinc-400">{category}</span>
      </div>
      <span
        className={clsx(
          "rounded-lg px-2 py-1 text-sm font-bold text-white",
          isRecruiting ? "bg-green-500" : "bg-zinc-200",
        )}
      >
        {isRecruiting ? "모집 중" : "모집 마감"}
      </span>
    </button>
  );
}
