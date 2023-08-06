import readingTime from "reading-time";
import { DateTime } from "luxon";
import { CommentResponse } from "@/types/collection";

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

export const formatDate = (date: string, locale: string) => {
  return new Date(date).toLocaleDateString(
    locale === "en" ? "en-US" : "vi-VN",
    {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }
  );
};

export const countComments = (comments: CommentResponse[], locale: string) => {
  const numberOfComments =
    comments.length +
    comments.reduce((acc, c) => acc + (c.replies?.length || 0), 0);

  if (locale === "en") {
    return `${numberOfComments} ${
      numberOfComments > 1 ? "comments" : "comment"
    }`;
  }

  if (locale === "vi") {
    return `${numberOfComments} bình luận`;
  }
};

export const countCommentLike = (
  locale: string,
  count: number,
  likedByOwner: boolean
) => {
  // Post đã đuuợc like bởi duy nhất user hiện tại
  if (likedByOwner && count === 1 && locale === "en")
    return "You liked this comment";
  if (likedByOwner && count === 1 && locale === "vi")
    return "Bạn đã like bình luận này";

  // Post đã đuuợc like bởi user hiện tại và nhiều user khác
  if (likedByOwner && locale === "en")
    return `You and ${count - 1} other ${
      count - 1 > 1 ? "people" : "person"
    } liked this comment`;
  if (likedByOwner && locale === "vi")
    return `Bạn ${count - 1} người khác đã like bình luận này`;

  // Post chưa được like bởi user nào
  if (count === 0 && locale === "en") return "Nobody liked this comment";
  if (count === 0 && locale === "vi") return "Chưa có ai like bình luận này";

  // Post đã được like bởi nhiều user khác
  if (locale === "en")
    return count + ` ${count > 1 ? "people" : "person"} liked this comment`;
  if (locale === "vi") return count + " người đã like bình luận này";
};
