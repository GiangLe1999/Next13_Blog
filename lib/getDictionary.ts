import { Dictionary } from "@/types/collection";

// Import file Dictionary nào sẽ do locale quyết định
interface DictionaryPromiseObj {
  en: () => Promise<Dictionary>;
  vi: () => Promise<Dictionary>;
}

const dictionaries: DictionaryPromiseObj = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
};

// Hàm getDictionary trả về file Dictionary tương thích với locale
export const getDictionary = async (locale: string) => {
  if (!locale || locale === undefined) {
    return dictionaries.en();
  } else {
    return dictionaries[locale as "en" | "vi"]();
  }
};
