import ChevronLeft from "@/assets/images/chevronLeft.svg";
import ChevronRight from "@/assets/images/chevronRight.svg";
import clsx from "clsx";

export default function PageNation({ length }: { length: number }) {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-4">
      <button>
        <ChevronLeft />
      </button>
      {Array.from({ length: length / 10 + 0.9 }).map((_, i) => (
        <button
          className={clsx(
            "h-12 w-12 rounded-xl",
            i === 0 ? "bg-primary-500 text-white" : "bg-zinc-100 text-zinc-400",
          )}
        >
          {i + 1}
        </button>
      ))}
      <button>
        <ChevronRight />
      </button>
    </div>
  );
}
