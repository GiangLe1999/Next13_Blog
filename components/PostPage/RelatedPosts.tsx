import { getRelatedPosts } from "@/lib/fetchData";
import { FC } from "react";
import RelatedPostCard from "./RelatedPostCard";
import { Posts } from "../Assets/Icons";

interface Props {
  locale: string;
  postId: string;
  categoryId: string;
}

const RelatedPosts: FC<Props> = async ({ locale, postId, categoryId }) => {
  const relatedPosts = await getRelatedPosts(locale, postId, categoryId, 3);

  if ((relatedPosts?.length || 0) > 0) {
    return (
      <div>
        <h3 className="post-section-title">
          {locale === "en"
            ? "Check out these related posts"
            : "Bài viết liên quan"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {relatedPosts?.map((post, index) => (
            <RelatedPostCard post={post} key={index} locale={locale} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-[300px] shadow-md flex items-center justify-center p-8 pt-0 header-gradient dark:bg-none dark:bg-white">
        <div className="flex flex-col items-center gap-3">
          <Posts className="w-8 h-8 fill-quaternary" />
          <p className="empty-section-title">
            {locale === "en"
              ? "No Related Posts Yet"
              : "Chưa có bài viết liên quan"}
          </p>
          <p className="empty-section-subtitle">
            {locale === "en"
              ? "There will be some related posts soon!"
              : "Sẽ bổ sung các bài viết cùng chủ đề trong thời gian sớm nhất!"}
          </p>
        </div>
      </div>
    );
  }
};

export default RelatedPosts;
