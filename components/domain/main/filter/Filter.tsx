import FilterCheckBox from "./FilterCheckBox";
import { FilterOptionType } from "@/types/club";

export default function Filter({
  filterOptions,
  updateCategory,
  updateRecruitment,
}: {
  filterOptions: FilterOptionType;
  updateCategory: (category: string | null) => void;
  updateRecruitment: (option: boolean | null) => void;
}) {
  const categories = ["학술", "종교", "음악", "체육", "문예", "봉사"];
  const recruitOptions = ["모집 중", "모집 마감"];

  const selectedRecruitment =
    filterOptions.isRecruiting === null
      ? "전체"
      : filterOptions.isRecruiting
        ? "모집 중"
        : "모집 마감";
  const handleRecruitment = (option: string | null) => {
    switch (option) {
      case "전체":
        updateRecruitment(null);
        break;
      case "모집 중":
        updateRecruitment(true);
        break;
      case "모집 마감":
        updateRecruitment(false);
        break;
    }
  };

  return (
    <div className="flex h-44 w-96 flex-row gap-4">
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-lg font-bold text-zinc-700">카테고리</h1>
        <div className="grid grid-cols-3 gap-y-3">
          <FilterCheckBox
            name="전체"
            onChange={() => updateCategory(null)}
            isChecked={filterOptions.category === null}
            id="category-all"
          />
          {categories.map((category, i) => (
            <div key={i}>
              <FilterCheckBox
                name={category}
                onChange={() => updateCategory(category)}
                isChecked={
                  filterOptions.category === null
                    ? false
                    : filterOptions.category.includes(category)
                }
                id={`category-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold text-zinc-700">모집 여부</h1>
        <div className="flex flex-wrap gap-3">
          <FilterCheckBox
            name="전체"
            onChange={() => updateRecruitment(null)}
            isChecked={filterOptions.isRecruiting === null}
            id="recruit-all"
          />
          {recruitOptions.map((option, i) => (
            <div key={i}>
              <FilterCheckBox
                id={`recruit-${i}`}
                name={option}
                onChange={() => handleRecruitment(option)}
                isChecked={
                  filterOptions.isRecruiting === null
                    ? false
                    : selectedRecruitment === option
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
