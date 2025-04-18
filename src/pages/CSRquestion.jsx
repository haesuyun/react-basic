import React, { useState } from "react";
import UiAccordion from "@/components/Accordion"

const CSRquestion = () => {
    const contents = [
        {
          title: '자주하는질문',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
      ]
      const [expanded, setExpanded] = useState(0)
      const handleChange = (value) => (event, isExpanded) => {
        setExpanded(isExpanded ? value : false);
      };
    return (
        <section>
            <h1>자주하는질문</h1>
            질문유형필터
            <div className="form-item">
                <UiAccordion expanded={expanded === 1} onChange={handleChange(1)} title={contents[0].title}>
                    {contents[0].content}
                </UiAccordion>
                <UiAccordion expanded={expanded === 2} onChange={handleChange(2)} title={contents[0].title} className="mt-3">
                    {contents[0].content}
                </UiAccordion>
                <UiAccordion expanded={expanded === 3} onChange={handleChange(3)} title={contents[0].title} className="mt-3">
                    {contents[0].content}
                </UiAccordion>
            </div>
        </section>
    );
};

export default CSRquestion;
