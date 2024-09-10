import { useEffect } from "react";

import {
  isHeadingElement,
  isListElement,
  isParagrapElement,
} from "../utils/helpers";

function useAccordionBodyClassNames(accordionBodyRef, styles) {
  useEffect(
    function () {
      const accordionItemBodyNodes = Array.from(
        accordionBodyRef.current.firstElementChild.children
      );

      accordionItemBodyNodes.forEach((nodeElement) => {
        if (isHeadingElement(nodeElement)) {
          nodeElement.classList.add(styles.accordionItemBodyTitle);
        }

        if (isListElement(nodeElement)) {
          nodeElement.classList.add(styles.accordionItemBodyList);
        }

        if (isParagrapElement(nodeElement)) {
          nodeElement.classList.add(styles.accordionItemBodyText);
        }
      });
    },
    [styles, accordionBodyRef]
  );

  return null;
}

export default useAccordionBodyClassNames;
