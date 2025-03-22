export interface FilterOptionType {
  category: string[] | null;
  isRecruiting: boolean | null;
}

export interface ClubType {
  id: number;
  name: string;
  category: string;
  isRecruiting: boolean;
}
