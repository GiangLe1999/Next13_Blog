import { getDictionary } from "@/lib/getDictionary";
import { Dictionary } from "@/types/collection";
import { useEffect, useState } from "react";

export const useDictionary = (locale: string) => {
  const [dictionary, setDictionary] = useState<Dictionary>();

  const getDictionaryHandler = async () => {
    const dictionary = await getDictionary(locale);
    setDictionary(dictionary);
  };

  useEffect(() => {
    getDictionaryHandler();
  }, []);

  return dictionary as Dictionary;
};
