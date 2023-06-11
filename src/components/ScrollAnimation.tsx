import { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
// import classNames from "classnames";

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight) {
        element.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={elementRef} className="scroll-animation opacity-0">
      <Parallax translateY={[-20, 20]}>{children}</Parallax>
    </div>
  );
};

export default ScrollAnimation;
