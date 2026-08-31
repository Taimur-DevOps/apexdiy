"use client";

import { ChevronDown } from "lucide-react";

/**
 * FAQItem — a single accessible accordion row. Controlled by the parent
 * FAQ section so only one item is open at a time. Uses a real <button>
 * with aria-expanded/aria-controls rather than a clickable <div>.
 */
export default function FAQItem({ id, question, answer, isOpen, onToggle }) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-trigger`;

  return (
    <div className="border-b border-hairline">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-md py-lg text-left"
        >
          <span className="text-[16px] font-bold text-ink sm:text-[18px]">
            {question}
          </span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-ink transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-lg opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="text-[15px] leading-[1.5] text-body">{answer}</p>
        </div>
      </div>
    </div>
  );
}
