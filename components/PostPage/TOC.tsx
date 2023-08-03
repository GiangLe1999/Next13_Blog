import { FC, useEffect, useRef, useState } from "react";
import { Outline } from "../Assets/Icons";

interface Props {
  selector: string;
}

const TOC: FC<Props> = ({ selector }): JSX.Element => {
  const [headings, setHeadings] = useState<HTMLHeadElement[]>([]);
  const [currentHeadingID, setCurrentHeadingID] = useState<
    string | undefined
  >();

  const listWrapperRef = useRef<HTMLUListElement>(null);

  // Seting data-id cho heading và cập nhật state headings
  useEffect(() => {
    // Select tất cả h2, h3, h4, h5, h6 nằm trong class selector = content
    const headingList = document
      .querySelector(selector)!
      .querySelectorAll("h2,h3,h4") as NodeListOf<HTMLHeadElement>;

    // Gắn data-id vào cho các thẻ heading
    const headingArray = Array.from(headingList);
    headingArray.forEach((heading) => {
      heading.dataset.id = Math.round(Math.random() * 100000).toString();
    });

    setHeadings(headingArray);
  }, []);

  // Tìm currentHeading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setCurrentHeadingID((entry.target as HTMLHeadElement).dataset.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%", threshold: 1 }
    );

    // Chọn phần tử muốn quan sát là các element heading nằm trong state headings
    if (headings.length) {
      headings.forEach((heading) => {
        observer.observe(heading);
      });
    }
  }, [headings.length]);

  // List tự động scroll dựa theo currentHeadingID
  useEffect(() => {
    const currentListItem = listWrapperRef.current?.querySelector(
      `li[data-id='${currentHeadingID}']`
    );

    if (currentListItem && currentHeadingID) {
      listWrapperRef.current?.scrollTo({
        top: (currentListItem as HTMLElement).offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentHeadingID]);

  return (
    <aside>
      <nav className="sticky hidden lg:block top-28 max-h-screen overflow-y-scroll border-l border-gray-700 dark:border-[#3c3c431f] no-scrollbar">
        <ul ref={listWrapperRef}>
          <div className="flex items-center gap-2 pl-5 tracking-widest font-medium text-lg dark:text-gray-800 text-white uppercase mb-4">
            <Outline className="w-5 h-w-5" /> Table of contents
          </div>
          {headings.map((heading) => {
            // Match trả về số đầu tiên nằm trong tagName của các heading
            const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || "1";
            return (
              <li
                key={heading.dataset.id}
                data-id={heading.dataset.id}
                style={{
                  paddingLeft:
                    tagLevel === "4"
                      ? "24px"
                      : tagLevel === "3"
                      ? "36px"
                      : "20px",
                  fontSize:
                    tagLevel === "4"
                      ? "11px"
                      : tagLevel === "3"
                      ? "14px"
                      : "15px",
                }}
                className={`flex items-center py-1 cursor-pointer h-10 ${
                  currentHeadingID === heading.dataset.id
                    ? "font-bold text-quaternary border-l-2 border-quaternary"
                    : "text-white dark:text-gray-700"
                }`}
                onClick={() => {
                  window.scrollTo({
                    top:
                      heading.getBoundingClientRect().top +
                      window.scrollY -
                      100,
                    behavior: "smooth",
                  });
                }}
              >
                {heading.innerHTML.length > 40
                  ? heading.innerHTML.substring(0, 40) + "..."
                  : heading.innerHTML}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default TOC;
