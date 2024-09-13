import { useEffect } from "react";

import { isHeadingNode, isListNode, isParagraphNode } from "../utils/helpers";

function useAccordionBodyClassNames(accordionBodyRef, styles) {
  useEffect(
    function () {
      const accordionItemBodyNodes = Array.from(
        accordionBodyRef.current.firstElementChild.children
      );

      accordionItemBodyNodes.forEach((nodeElement) => {
        if (isHeadingNode(nodeElement)) {
          nodeElement.classList.add(styles.accordionItemBodyTitle);
        }

        if (isListNode(nodeElement)) {
          nodeElement.classList.add(styles.accordionItemBodyList);
        }

        if (isParagraphNode(nodeElement)) {
          nodeElement.classList.add(styles.accordionItemBodyText);
        }
      });
    },
    [styles, accordionBodyRef]
  );

  return null;
}

export default useAccordionBodyClassNames;
