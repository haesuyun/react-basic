import React, {useState} from "react";
import style from "@/assets/style/module/guide.module.scss";
import UiAccordion from "@/components/Accordion";
import UiSelect from "@/components/Select";
import UiCheckbox from "@/components/Checkbox";
// mui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <th>Default</th>
            <td></td>
            <td>
              <UiSelect
                {...select}
                onChange={(index) =>
                setSelect((prev) => ({ ...prev, value: index }))
                }
              />
              <br/>
              <UiAccordion title="본인인증 약관 전체 동의">
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
	

