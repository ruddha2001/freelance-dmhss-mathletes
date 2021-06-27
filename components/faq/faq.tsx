import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const faqData = [
  {
    question: "Do we need to pay for any of the events?",
    answer: "No. All the events are 100% free of cost.",
  },
  {
    question: "What are the eligibility rules?",
    answer: "The eligibility rules will be published very soon.",
  },
  {
    question: "Will there be any certificates?",
    answer: "More information on this will be released soon.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white px-7 md:px-12 lg:px-36 mt-10" id="faqs">
      <h1 className="text-4xl mb-2">FAQs</h1>
      <svg
        width="255"
        height="10"
        viewBox="0 0 255 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="255" height="10" rx="5" fill="#6E4C5C" />
      </svg>

      <Accordion className="mt-10">
        {faqData.map((faq) => {
          return (
            <AccordionItem
              className="border-2 border-black rounded-md p-4 text-base md:text-xl my-5"
              key={faq.question}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="font-bold">
                  Q) {faq.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="mt-2">
                <p>{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
