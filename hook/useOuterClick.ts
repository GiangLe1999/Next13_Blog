import { LegacyRef, useEffect } from "react";
import { useRef } from "react";

export function useOuterClick(callback: () => void) {
  const callbackRef = useRef<() => void | null>(); // initialize mutable ref, which stores callback
  const innerRef = useRef<HTMLInputElement | null>(); // returned to client, who marks "border" element

  // update cb on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: MouseEvent) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target as Node)
      )
        callbackRef.current();
    }
  }, []); // no dependencies -> stable click listener

  return innerRef as LegacyRef<HTMLDivElement>; // convenience for client (doesn't need to init ref himself)
}
