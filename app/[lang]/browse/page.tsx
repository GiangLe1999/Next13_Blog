"use client";

import { Spinner } from "@/components/Assets/Icons";
import PostList from "@/components/Common/Posts/PostList";
import Title from "@/components/Common/Title";
import Container from "@/components/Layout/Container";
import { Post } from "@/types/collection";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface Props {
  params: {
    lang: string;
  };
}

const Page: FC<Props> = ({ params }): JSX.Element => {
  const locale = params.lang;
  const searchParams = useSearchParams();
  const query = searchParams.get("search") as string;
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`/api/search?query=${query}&locale=${locale}`).then(({ data }) => {
      setResults(data);
      setLoading(false);
    });
  }, [query, locale]);

  return (
    <main className="min-h-screen">
      {loading ? (
        <div className="w-full h-screen grid place-items-center">
          <div className="flex flex-col items-center text-quaternary h-36">
            <Spinner className="w-16 h-16 animate-spin" />
            <p className="font-bold">
              {locale === "en" ? "Loading results" : "Đang tải kết quả"}
            </p>
          </div>
        </div>
      ) : (
        <Container className="pt-[120px] space-y-5">
          <Title
            title={query}
            subTitle={locale === "en" ? "Results for" : "Kết quả cho"}
            isCategory
            count={`${results.length} ${
              locale === "en" ? "Results" : "Kết quả"
            }`}
          />

          <PostList posts={results} locale={locale} />
        </Container>
      )}
    </main>
  );
};

export default Page;
