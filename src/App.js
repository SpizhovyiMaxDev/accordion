import { faqs } from "./data/faqs";

import Accordion from "./Accordion/Accordion";
import AccordionItem from "./Accordion/AccordionItem";

export default function App() {
  return (
    <div>
      <Accordion>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem title={faq.title} indexItem={index} key={index}>
              <p>{faq.text}</p>
            </AccordionItem>
          );
        })}
        <AccordionItem title={"List 1"} indexItem={4}>
          <h4>Allows React developers to:</h4>
          <ul>
            <li>Break up UI into components</li>
            <li>Make components reusuable</li>
            <li>Place state efficiently</li>
          </ul>
        </AccordionItem>
        <AccordionItem title={"List 2"} indexItem={5}>
          <h4>Allows React developers to:</h4>
          <ul>
            <li>Break up UI into components</li>
            <li>Make components reusuable</li>
            <li>Place state efficiently</li>
          </ul>
        </AccordionItem>
        <AccordionItem title={"List 3"} indexItem={6}>
          <h4>Allows React developers to:</h4>
          <ul>
            <li>Break up UI into components</li>
            <li>Make components reusuable</li>
            <li>Place state efficiently</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
