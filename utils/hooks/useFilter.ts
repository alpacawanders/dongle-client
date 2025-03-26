import { FilterOptionType } from "@/types/club";
import { useState } from "react";

export default function useFilter() {
  const [filterOptions, setFilterOptions] = useState<FilterOptionType>({
    category: null,
    isRecruiting: null,
  });

  const updateCategory = (category: string | null) => {
    setFilterOptions((prev) => {
      if (category === null) {
        return { ...prev, category: null };
      } else if (prev.category === null) {
        return { ...prev, category: [category] };
      } else {
        const updatedCategories = prev.category.includes(category)
          ? prev.category.filter((c) => c !== category)
          : [...prev.category, category];
        return { ...prev, category: updatedCategories };
      }
    });
  };

  const updateRecruitment = (option: boolean | null) => {
    setFilterOptions((prev) => ({
      ...prev,
      isRecruiting: option,
    }));
  };

  const resetFilter = () => {
    setFilterOptions({
      category: null,
      isRecruiting: null,
    });
  };

  return { filterOptions, updateCategory, updateRecruitment, resetFilter };
}
