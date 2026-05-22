import style from "@/assets/style/module/guide.module.scss";
import UiAccordion from "@/components/Accordion";
import UiAccordionGroup from "@/components/AccordionGroup";
import UiCheckbox from "@/components/Checkbox";
import UiSelect from "@/components/Select";
import { useState } from "react";
// mui
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

function MuiAccordion() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

function UseAccordionGroup() {
  const contents = [
    {
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
  ]
  const [value, setValue] = useState(1)
  return (
    <>
      <UiAccordionGroup value={value} onChange={index=>setValue(index)}>
        <UiAccordion title={contents[0].title}>
          {contents[0].content}
        </UiAccordion>
        <UiAccordion title={contents[0].title}>
          {contents[0].content}
        </UiAccordion>
        <UiAccordion title={contents[0].title}>
          {contents[0].content}
        </UiAccordion>
      </UiAccordionGroup>
    </>
  )
}

function OneExpandedAccordion() {
  const contents = [
    {
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
  ]
  const [expanded, setExpanded] = useState(2)
  const handleChange = (value) => (event, isExpanded) => {
    setExpanded(isExpanded ? value : false);
  };
  return (
    <>
      <UiAccordion expanded={expanded === 1} onChange={handleChange(1)} title={contents[0].title}>
        {contents[0].content}
      </UiAccordion>
      <UiAccordion expanded={expanded === 2} onChange={handleChange(2)} title={contents[0].title} className="mt-3">
        {contents[0].content}
      </UiAccordion>
      <UiAccordion expanded={expanded === 3} onChange={handleChange(3)} title={contents[0].title} className="mt-3">
        {contents[0].content}
      </UiAccordion>
    </>
  )
}
export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Accordion",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}
export default function AccordionGuide() {
  const [select, setSelect] = useState({
    value: 1,
    optionTitle: '주제를 선택하세요',
    options: [
      {
        id: 0,
        label: "국내주식 0",
      },
      {
        id: 1,
        label: "해외주식 1",
      },
      {
        id: 2,
        label: "부동산 2",
      },
      {
        id: 3,
        label: "가상자산 3",
      },
      {
        id: 4,
        label: "기타 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt!",
      },
    ],
  });
  const agreements = [
    '개인정보 제공 및 이용 개인정보 제공 및 이용 개인정보 제공 및 이용',
    '고유식별 정보처리',
    '통신사 이용약관',
  ]
  return (
    <section>
      <table className={style.table}>
        <thead>
          <tr>
            <th className="text-center">type</th>
            <th>size</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>material Accordion</th>
            <td></td>
            <td>
              <MuiAccordion/>
            </td>
          </tr>
          <tr>
            <th>Accordion Group</th>
            <td></td>
            <td>
              <UseAccordionGroup/>
            </td>
          </tr>
          <tr>
            <th>one expanded Accordion</th>
            <td></td>
            <td>
              <OneExpandedAccordion/>
            </td>
          </tr>
          <tr>
            <th>Default</th>
            <td></td>
            <td>
              <UiSelect
                label="Select"
                {...select}
                onChange={(index) =>
                setSelect((prev) => ({ ...prev, value: index }))
                }
              />
              <br/>
              <UiAccordion expanded title="본인인증 약관 전체 동의">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </UiAccordion>
              <br/>
              <UiAccordion header={
                <UiCheckbox 
                  label="본인인증 약관 전체 동의"
                />
              }>
                <ul className="checkbox-list mb-4">
                  {agreements.map((item) => { 
                    return <li key={item}>
                      <UiCheckbox 
                        iconSize="small"
                        variant="line"
                        label={item}
                      />
                      <button type="button" className="button-text button-small">
                        약관보기
                        <i className="icon next" aria-label="이동"></i>
                      </button>
                    </li>
                    })
                  }
                </ul>
              </UiAccordion>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
)
}
