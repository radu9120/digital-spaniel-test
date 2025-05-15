import { useEffect, useState } from "react";
export const useScrollListener = () => {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if at the top of the page
      if (currentScrollY < 10) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return { visible, atTop };
};
