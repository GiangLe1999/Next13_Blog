import readingTime from "reading-time";
import { DateTime } from "luxon";

export const getReadingTime = (text: string, locale: string) => {
  const minutes = Math.floor(readingTime(text).minutes);
  if (locale === "en") {
    return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
  } else {
    return `${minutes} phút đọc`;
  }
};

export const getRelativeDate = (date: string, locale: string) => {
  return DateTime.fromISO(date).setLocale(locale).toRelative();
};
