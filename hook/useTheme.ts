import { useEffect } from "react";

const useTheme = () => {
  //Store theme trong LS
  const storeThemeInLs = (themeMode: string) => {
    localStorage.setItem("theme-mode", themeMode);
  };

  //Get theme từ LS
  const getThemeFrLs = () => {
    return localStorage.getItem("theme-mode") || "";
  };

  //Update class của thẻ html
  const updateTheme = (newTheme: string, currentTheme?: string) => {
    if (currentTheme) document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
  };

  //Hàm toggle theme export ra ngoài
  const toggleTheme = () => {
    const currentTheme = getThemeFrLs();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    updateTheme(newTheme, currentTheme);
    storeThemeInLs(newTheme);

    return newTheme;
  };

  //Khi vừa mount app, get về theme từ Ls
  useEffect(() => {
    const currentTheme = getThemeFrLs();
    if (currentTheme) {
      updateTheme(currentTheme);
    }
  }, []);

  return { toggleTheme, getThemeFrLs };
};

export default useTheme;
