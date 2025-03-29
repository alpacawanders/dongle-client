"use client";

import Input from "@/components/common/ui/Input";
import FilterIcon from "@/assets/images/FilterIcon.svg";
import SearchIcon from "@/assets/images/SearchIcon.svg";
import Modal from "@/components/common/ui/modal/Modal";
import { useModal } from "@/utils/hooks/useModal";
import { useState } from "react";
import useFilter from "@/utils/hooks/useFilter";
import { ClubType } from "@/types/club";
import filterClub from "@/utils/domain/main/filterClub";
import Filter from "../filter/Filter";
import ClubItem from "./ClubItem";
import Link from "next/link";

export default function ClubList({ clubs }: { clubs: ClubType[] }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { filterOptions, updateCategory, updateRecruitment, resetFilter } =
    useFilter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = filterClub(clubs, filterOptions, searchTerm);
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Input
          props={{
            placeholder: "동아리를 검색해 보세요.",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
          }}
          className="h-16"
        >
          <SearchIcon />
        </Input>
        <div className="flex flex-row justify-between font-semibold text-zinc-400">
          <span>총 {filteredClubs.length}개의 동아리가 있습니다.</span>
          <button className="flex gap-1 px-3 py-2" onClick={openModal}>
            <FilterIcon />
            필터
          </button>
          <Modal isOpen={isOpen} onClose={closeModal}>
            <Filter
              filterOptions={filterOptions}
              updateCategory={updateCategory}
              updateRecruitment={updateRecruitment}
            />
            <div className="flex flex-row gap-2">
              <button
                onClick={resetFilter}
                className="w-28 rounded-lg bg-zinc-100 p-1 py-2 text-sm font-semibold text-zinc-500"
              >
                초기화
              </button>
              <button
                onClick={closeModal}
                className="w-28 rounded-lg bg-primary-400 p-1 py-2 text-sm font-semibold text-white"
              >
                확인
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 items-center justify-between gap-6">
        {filteredClubs.map((club) => (
          <Link href={`/detail/${club.id}`} key={club.id}>
            <ClubItem
              clubName={club.name}
              category={club.category}
              isRecruiting={club.isRecruiting}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
