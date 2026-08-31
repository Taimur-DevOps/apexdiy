"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";

/**
 * FAQ — accessible accordion section. Only one panel open at a time;
 * state lives here so each <FAQItem> stays a simple controlled row.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="bg-bg px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

        <div className="mt-xxl max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              id={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
