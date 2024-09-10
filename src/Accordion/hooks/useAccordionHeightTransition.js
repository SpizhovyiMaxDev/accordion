import { useEffect } from "react";

function useAccordionHeightTransition(accordionItemBodyRef, isOpen) {
  useEffect(
    function () {
      const content = accordionItemBodyRef.current;

      function transitionHasOccured() {
        content.style.height = "auto";
        content.removeEventListener("transitionend", transitionHasOccured);
      }

      if (isOpen) {
        content.style.height = `${content.scrollHeight}px`;

        content.addEventListener("transitionend", transitionHasOccured);
      } else {
        content.style.height = `${content.scrollHeight}px`;

        requestAnimationFrame(() => {
          content.style.height = "0px";
        });
      }

      return function () {
        content.removeEventListener("transitionend", transitionHasOccured);
      };
    },
    [isOpen, accordionItemBodyRef]
  );

  return null;
}

export default useAccordionHeightTransition;
