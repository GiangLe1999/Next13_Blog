import useTheme from "@/hook/useTheme";
import { Moon, Sun } from "@/components/Assets/Icons";
import { FC, useEffect, useState } from "react";

interface Props {}

const ThemeButton: FC<Props> = (props): JSX.Element => {
  const { toggleTheme, getThemeFrLs } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();
  const [isChangingTheme, setIsChangingTheme] = useState(false);

  const changeThemeHandler = () => {
    toggleTheme();
    setIsChangingTheme((prev) => !prev);
  };

  useEffect(() => {
    const theme = getThemeFrLs();
    setCurrentTheme(theme);
  }, [isChangingTheme]);

  return (
    <div className="text-white cursor-pointer" onClick={changeThemeHandler}>
      {currentTheme === "light" ? (
        <Moon className="w-[22px] h-[22px]" />
      ) : (
        <Sun className="w-[24px] h-[24px] text-quaternary" />
      )}
    </div>
  );
};

export default ThemeButton;
