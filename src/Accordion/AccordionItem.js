import styles from "./AccordionItem.module.css";

import { useRef } from "react";
import { useAccordion } from "./context/AccordionContext";
import { formatTwoDigitNum } from "./utils/helpers";

import AccordionItemIcon from "./AccordionItemIcon";

import useAccordionBodyClassNames from "./hooks/useAccordionBodyClassNames";
import useAccordionHeightTransition from "./hooks/useAccordionHeightTransition";

function AccordionItem({ indexItem, title, children }) {
  const { openItem, setOpenItem } = useAccordion();
  const accordionItemBodyRef = useRef(null);
  const isOpen = indexItem === openItem;

  useAccordionHeightTransition(accordionItemBodyRef, isOpen);
  useAccordionBodyClassNames(accordionItemBodyRef, styles);

  return (
    <div className={styles.accordionItem}>
      <header
        className={styles.accordionItemHead}
        onClick={() => setOpenItem(isOpen ? null : indexItem)}
      >
        <span className={styles.accordionItemHeadNum}>
          {formatTwoDigitNum(indexItem + 1)}
        </span>

        <h4 className={styles.accordionItemHeadTitle}>{title}</h4>

        <AccordionItemIcon isOpen={isOpen} />
      </header>

      <div className={styles.accordionItemBody} ref={accordionItemBodyRef}>
        <div className={styles.accordionItemBodyContent}>{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
