"use client";

import { useState } from "react";
import Image from "next/image";
import ChevronRightIcon from "@/assets/images/chevronRight.svg";
import ChevronLeftIcon from "@/assets/images/chevronLeft.svg";
import mock1 from "@/assets/images/mocks/mock1.jpg";
import mock2 from "@/assets/images/mocks/mock2.jpg";
import mock3 from "@/assets/images/mocks/mock3.jpg";
import clsx from "clsx";

export default function Carousel({ type }: { type: "banner" | "thumbnail" }) {
  const images = [mock1, mock2, mock3];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <article
      className={clsx(
        "relative flex h-52 w-full overflow-hidden rounded-3xl bg-zinc-100",
        type === "banner" ? "h-52" : "h-72",
      )}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
            <Image
              priority={index === 0}
              src={image}
              alt="Banner Image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1,
            )
          }
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1,
            )
          }
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={clsx(
              "h-2 w-2 rounded-full transition-all",
              currentIndex === index ? "w-3 bg-white" : "bg-zinc-400",
            )}
          />
        ))}
      </div>
    </article>
  );
}
