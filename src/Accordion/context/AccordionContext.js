import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

function AccordionProvider({ children }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      {children}
    </AccordionContext.Provider>
  );
}

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context)
    throw new Error(
      "Oops, ensure you use AcordionItem inside of the Accordion!!!"
    );

  return context;
}

export { useAccordion, AccordionProvider };
