import { Right, Right2 } from "@/components/Assets/Icons";
import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { FC } from "react";

const delays = [50, 100, 150];

interface Props {
  post: Post;
  isPostPage?: Boolean;
  locale: string;
}

const PostMetas: FC<Props> = ({ post, isPostPage, locale }): JSX.Element => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 text-xs xs:text-sm text-neutral-500">
        <div className={`font-medium`} style={{ color: post.category.color }}>
          {post.category.title}
        </div>

        <div className="post-dot" />
        <div>
          {post.author.first_name} {post.author.last_name}
        </div>

        <div className="post-dot" />
        <div>{getReadingTime(post.body, locale)}</div>

        <div className="post-dot" />
        <div>{getRelativeDate(post.date_created, locale)}</div>
      </div>

      <div className="space-y-3">
        {/* Title */}
        {isPostPage ? (
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-gray-800 text-white mt-4">
            {post.title}
          </h1>
        ) : (
          <h3 className="text-xl font-bold dark:text-gray-800 text-white">
            {post.title}
          </h3>
        )}

        {/* Description */}
        <p
          className={`text-secondary dark:text-neutral-500 ${
            isPostPage ? "text-base leading-[30px]" : "text-sm"
          } `}
        >
          {post.description}
        </p>

        {!isPostPage && (
          <div className="flex items-center">
            <span className="group-hover:text-quaternary text-secondary text-sm font-semibold">
              {locale === "en" ? "Read More" : "Đọc Thêm"}&nbsp;
            </span>
            <Right className="w-4 h-4 text-quaternary group-hover:opacity-100 opacity-0" />
            {delays.map((delay, index) => (
              <Right2
                key={index}
                className={`h-[18px] w-[18px] group-hover:opacity-100 opacity-0 transition`}
                style={{
                  transitionDelay: delay + "ms",
                  marginLeft: index === 0 ? "-6px" : "-10px",
                  color:
                    index === 0
                      ? "#ff0a78"
                      : index === 1
                      ? "#fe7cb7"
                      : "#ff9eca",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostMetas;
