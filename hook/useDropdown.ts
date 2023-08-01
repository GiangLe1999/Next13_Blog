import { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useOuterClick } from "./useOuterClick";

export default function useDropdown() {
  const [show, setShow] = useState(false);
  const innerRef = useOuterClick(() => setShow(false));
  const pathName = usePathname();

  useEffect(() => {
    setShow(false);
  }, [pathName]);

  return { pathName, show, setShow, innerRef };
}
