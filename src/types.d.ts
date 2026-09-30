export type Weather = "sunny" | "rainy" | "cloudy" | "stormy" | "windy" | "other";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

//export type NonSensitiveInformationDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">;
export type NonSensitiveInformationDiaryEntry = Omit<DiaryEntry, "comment">;