import styles from "./Accordion.module.css";

import { AccordionProvider } from "./context/AccordionContext";

function Accordion({ children }) {
  return (
    <AccordionProvider>
      <div className={styles.accordion}>{children}</div>
    </AccordionProvider>
  );
}

export default Accordion;
