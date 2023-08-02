import { FC } from "react";

interface Props {
  locale: string;
}

const Text: FC<Props> = ({ locale }): JSX.Element => {
  return (
    <div>
      <div className="space-y-3 dark:text-gray-800 text-secondary mb-6">
        <p>
          {locale === "en"
            ? "Recent Web development and React Native tutorials and blog posts."
            : "Những bài viết mới nhất về Lập trình Web và ứng dụng Mobile."}
        </p>
        <p>
          {locale === "en"
            ? "In total I've written 172 tutorials and posts on internet. This site is a collection of most of them."
            : "Tổng cộng tôi đã viết 172 bài. Trang web này là nơi đăng tải phần lớn bài viết. Mong các bạn cảm thấy chúng bổ ích!"}
        </p>
      </div>
      <p className="font-extrabold dark:text-gray-800 text-secondary mb-3">
        {locale === "en" ? "Common categories:" : "Danh mục nổi bật:"}
      </p>
    </div>
  );
};

export default Text;
