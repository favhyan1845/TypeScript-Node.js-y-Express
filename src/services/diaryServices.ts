import diaryData from "./diaries.json" with { type: "json" };
import type { DiaryEntry } from "../types.js";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInformationDiaryEntry[] => diaries 

export const addEntry = (): undefined =>  undefined;

