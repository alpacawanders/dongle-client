import { ClubType, FilterOptionType } from "@/types/club";

export default function filterClub(
  clubs: ClubType[],
  filterOptions: FilterOptionType,
  searchTerm: string,
) {
  return clubs.filter((club) => {
    const matchesCategory =
      filterOptions.category === null ||
      filterOptions.category.length === 0 ||
      filterOptions.category.includes(club.category);
    const matchesRecruitment =
      filterOptions.isRecruiting === null ||
      filterOptions.isRecruiting === club.isRecruiting;

    const normalizedSearch = searchTerm.toLowerCase().normalize("NFC");
    const normalizedCategory = club.category.toLowerCase().normalize("NFC");
    const matchesSearch =
      searchTerm === "" ||
      normalizedCategory.toLowerCase().includes(normalizedSearch) ||
      normalizedSearch.includes(club.category.toLowerCase());

    return matchesCategory && matchesRecruitment && matchesSearch;
  });
}
