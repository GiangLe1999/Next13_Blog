import CategorySection from "@/components/CategoriesPage/CategorySection";
import CommonTags from "@/components/CategoriesPage/CommonTags";
import Text from "@/components/CategoriesPage/Text";
import Title from "@/components/Common/Title";
import Container from "@/components/Layout/Container";
import { getAllCategories } from "@/lib/fetchData";
import { NextPage } from "next";

interface Props {
  params: {
    lang: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const locale = params.lang;
  const categories = await getAllCategories(locale);

  return (
    <Container className="pt-[120px] space-y-14">
      <div>
        <Title
          title={locale === "en" ? "CATEGORIES" : "DANH MỤC"}
          subTitle={locale === "en" ? "Categorize" : "Phân loại"}
          isCategory
          count={`${categories.length} ${
            locale === "en" ? "Categories" : "Danh mục"
          }`}
        />
        <Text locale={locale} />
        <CommonTags categories={categories} locale={locale} />
      </div>

      {categories.map((category) => (
        <CategorySection
          category={category}
          key={category.id}
          locale={locale}
        />
      ))}
    </Container>
  );
};

export default Page;
