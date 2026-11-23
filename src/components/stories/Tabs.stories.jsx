/* Tabs(Tabs, Tab) 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - 이 파일은 export default 안에 render 를 두어, 모든 스토리가 "탭 3개 + 내용" 구조를 공유합니다.
 */
import { useState } from "react";
import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";

export default {
  // 왼쪽 메뉴 위치: Components > Tabs
  title: "Components/Tabs",
  // Docs props 표의 기준 컴포넌트
  component: Tabs,
  // 하위 컴포넌트 Tab 의 props 도 Docs 표에 탭으로 표시
  subcomponents: { Tab },
  parameters: {
    docs: { description: { component: "`Tabs` 안에 `Tab`을 넣어 사용합니다. `value`가 없으면 index가 값으로 사용됩니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    variant: { control: "text", description: "스타일 variant (기본: standard)" },
    sticky: { control: "boolean" },
    top: { control: "text" }, // sticky 일 때 상단 고정 위치 (예: "5.6rem")
  },
  // 기본 props 값
  args: { variant: "standard", sticky: false },

  // 공통 render: 선택된 탭(value)을 useState 로 관리하고, 아래에 선택된 탭 내용을 보여줍니다.
  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <>
        <Tabs {...args} value={value} onChange={(e, v) => setValue(v)}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <div role="tabpanel" style={{ padding: 16 }}>Tab {value + 1} 내용</div>
      </>
    );
  },
};

// 기본 탭
export const Default = {};

// 스크롤 시 상단에 고정되는 탭 (스토리북 화면에는 header 가 없어 top 을 0 으로 지정)
export const Sticky = { args: { sticky: true, top: "0" } };
