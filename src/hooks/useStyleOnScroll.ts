import { useCallback, useEffect, useState } from "react";

const useStyleOnScroll = (style1: string, style2: string): string => {
  const [style, setStyle] = useState(style1);

  const listenScrollEvent = useCallback(
    (event: Event) => {
      if (window.scrollY < 73) {
        return setStyle(style1);
      } else if (window.scrollY > 70) {
        return setStyle(style2);
      }
    },
    [style1, style2]
  );

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent, { passive: true });

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

  return style;
};

export default useStyleOnScroll;
