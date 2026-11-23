/* Radio(RadioGroup, Radio) 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - 이 파일은 export default 안에 render 를 두어, 모든 스토리가 "그룹 + 라디오 3개" 구조를 공유합니다.
 */
import { useState } from "react";
import Radio from "@/components/Radio";
import RadioGroup from "@/components/RadioGroup";

export default {
  // 왼쪽 메뉴 위치: Components > Radio
  title: "Components/Radio",
  // Docs props 표의 기준 컴포넌트 (그룹)
  component: RadioGroup,
  // 하위 컴포넌트 Radio 의 props 도 Docs 표에 탭으로 표시
  subcomponents: { Radio },
  parameters: {
    docs: { description: { component: "`RadioGroup` 안에 `Radio`를 넣어 사용합니다. 그룹이 `name`, `checked`를 자식에게 전달합니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    label: { control: "text" },
    required: { control: "boolean" },
    // variant 는 RadioGroup 의 prop 이 아니라 자식 Radio 에 넘길 값입니다.
    // 이렇게 컴포넌트에 없는 값도 argTypes/args 로 만들어 render 에서 활용할 수 있습니다.
    variant: { control: "select", options: [undefined, "check", "button"], description: "자식 Radio의 variant" },
  },
  // 기본 props 값
  args: { label: "라디오 그룹", name: "radio-story", required: false },

  // 공통 render: args 에서 variant 만 꺼내 Radio 에 전달하고, 나머지(...args)는 RadioGroup 에 전달합니다.
  // 선택된 값은 useState 로 관리합니다.
  render: ({ variant, ...args }) => {
    const [value, setValue] = useState("1");
    return (
      <RadioGroup {...args} value={value} onChange={setValue}>
        <Radio value="1" label="옵션 1" variant={variant} />
        <Radio value="2" label="옵션 2" variant={variant} />
        <Radio value="3" label="옵션 3 (disabled)" variant={variant} disabled />
      </RadioGroup>
    );
  },
};

// 기본 라디오
export const Default = {};

// 체크 아이콘 형태
export const Check = { args: { variant: "check" } };

// 버튼 형태 (아이콘 없음)
export const Button = { args: { variant: "button" } };

// 필수 표시(*)
export const Required = { args: { required: true } };
