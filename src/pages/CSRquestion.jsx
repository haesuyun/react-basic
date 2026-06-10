import UiAccordion from "@/components/Accordion";
import UiTab from "@/components/Tab";
import UiTabs from "@/components/Tabs";
import { useState } from "react";

export const meta = {
  depth01: "고객센터",
  depth02: "",
  depth03: "",
  id: "",
  name: "자주하는질문",
  author: "홍길동",
  state: "진행중",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
    home : true,
    menu : true,
  },
  footer: true,
};

export default () => {
    const [value, setValue] = useState(0);
    const tabs01 = ['Tab01','Tab02','Tab03']

    const handleTabsChange = (_, newValue) => {
        setValue(newValue);
    };
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
            {'value: '+value}
            <UiTabs value={value} 
                onChange={handleTabsChange}>
                {tabs01.map((item,index)=>(
                    <UiTab key={index} 
                    label={item} 
                    />
                ))}
            </UiTabs>
            {value === 0 && <div>탭 1 내용</div>}
            {value === 1 && <div>탭 2 내용</div>}
            {value === 2 && <div>탭 3 내용</div>}
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

