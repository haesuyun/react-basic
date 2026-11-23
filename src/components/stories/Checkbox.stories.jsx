/* =====================================================================
 * 📘 스토리북(Storybook) 스토리 파일 기본 가이드
 * ---------------------------------------------------------------------
 * ■ 스토리북이란?
 *   컴포넌트를 앱과 분리해서 "단독으로" 띄워 보고, 화면에서 props를 바꿔가며
 *   확인할 수 있는 UI 개발/문서화 도구입니다.
 *   실행: npm run storybook  →  http://localhost:6006
 *
 * ■ 스토리 파일 규칙
 *   - 파일명은 "*.stories.jsx" 로 끝나야 스토리북이 자동으로 인식합니다.
 *     (인식 경로 설정: .storybook/main.ts 의 stories 항목)
 *   - export default  → 이 파일 전체에 대한 설정 (메타 정보, "Meta")
 *   - export const XXX → 스토리 1개 = 화면 왼쪽 메뉴의 항목 1개
 *                        (변수명이 메뉴 이름이 됩니다. 예: WithIcon → "With Icon")
 *
 * ■ 용어 정리
 *   - args     : 컴포넌트에 전달할 props 값.  (예: { label: "체크박스" })
 *   - argTypes : 각 prop을 화면 하단 "Controls" 패널에서 어떤 입력 UI로 바꿀지 정의.
 *   - render   : 컴포넌트를 어떻게 그릴지 직접 작성하는 함수. (생략하면 <component {...args} /> 로 자동 렌더링)
 *
 * ■ 새 prop(속성)을 가이드에 추가하는 방법
 *   1) 컴포넌트(src/components/Checkbox.jsx)에 prop을 추가합니다.
 *   2) 아래 argTypes 에 컨트롤을 추가합니다.
 *        newProp: { control: "boolean", description: "설명" },
 *   3) 기본값이 필요하면 args 에 추가합니다.
 *        args: { label: "체크박스", newProp: false },
 *   → 저장하면 Controls 패널과 Docs 페이지의 props 표에 바로 나타납니다.
 *
 * ■ 새 스토리(예시 화면)를 추가하는 방법
 *   export const 새이름 = { args: { 바꾸고싶은prop: 값 } };
 *   → 기본 args 에 덮어쓰기 되어, 해당 값이 적용된 예시가 메뉴에 추가됩니다.
 *
 * ■ control 종류 (argTypes 에서 사용)
 *   "text"        : 텍스트 입력          "boolean"      : on/off 스위치
 *   "number"      : 숫자 입력            "select"       : 드롭다운 (options 필요)
 *   "radio"       : 라디오 (options 필요) "inline-radio" : 가로 라디오 (options 필요)
 *   "color"       : 색상 선택            "object"       : JSON 편집
 *   { action: "이름" } : 이벤트(onChange 등)가 실행되면 "Actions" 탭에 기록
 * ===================================================================== */

import { useState } from "react";
import Checkbox from "@/components/Checkbox"; // 가이드를 만들 대상 컴포넌트

// ---------------------------------------------------------------------
// export default : 이 파일(=Checkbox 가이드) 전체에 공통으로 적용되는 설정
// ---------------------------------------------------------------------
export default {
  // 왼쪽 메뉴에 표시될 위치. "/" 로 폴더를 나눕니다. → Components 폴더 > Checkbox
  title: "Components/Checkbox",

  // 문서화할 컴포넌트. Docs 페이지의 props 표가 이 컴포넌트를 기준으로 자동 생성됩니다.
  component: Checkbox,

  // 스토리북 기능별 설정값
  parameters: {
    // docs.description.component : Docs 페이지 상단에 표시될 컴포넌트 설명 (마크다운 사용 가능)
    docs: { description: { component: "체크박스 컴포넌트입니다. `checked`를 주지 않으면 내부 상태로 동작합니다." } },
  },

  // Controls 패널에서 각 prop을 어떤 UI로 조작할지 정의
  argTypes: {
    // select: 드롭다운. options 배열의 값 중 하나를 고릅니다. (undefined = 기본 스타일)
    variant: { control: "select", options: [undefined, "line", "bookmark", "heart"] },
    iconSize: { control: "select", options: [undefined, "xsmall", "small", "large", "xlarge"] },
    // boolean: on/off 스위치
    disabled: { control: "boolean" },
    // text: 텍스트 입력창
    label: { control: "text" },
    // 💡 description 을 추가하면 Docs 표에 설명이 나옵니다.
    //    예) disabled: { control: "boolean", description: "비활성화 여부" },
  },

  // 모든 스토리에 공통으로 들어가는 기본 props 값
  args: { label: "체크박스" },
};

// ---------------------------------------------------------------------
// 스토리 (export const 하나 = 메뉴 항목 하나)
// ---------------------------------------------------------------------

// 빈 객체: 위의 기본 args 그대로 <Checkbox label="체크박스" /> 를 보여줍니다.
export const Default = {};

// render: 여러 개를 한 화면에 나란히 보여주고 싶을 때 직접 그리는 방법.
// 함수 인자 args 에는 Controls 패널에서 바꾼 값이 들어옵니다.
// {...args} 를 먼저 펼치고 뒤에 쓴 prop(variant, label)이 그 값을 덮어씁니다.
export const Variants = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <Checkbox {...args} label="default" />
      <Checkbox {...args} variant="line" label="line" />
      <Checkbox {...args} variant="bookmark" label="bookmark" />
      <Checkbox {...args} variant="heart" label="heart" />
    </div>
  ),
};

// args 만 지정: 기본 args 에 disabled: true 를 덮어쓴 예시
export const Disabled = { args: { disabled: true } };

// 상태(state)가 필요한 예시: render 안에서 React Hook(useState)을 사용할 수 있습니다.
// 외부에서 checked 값을 관리하는 "제어 컴포넌트" 사용법을 보여줍니다.
export const Controlled = {
  // 이 스토리에서만 쓰는 args (기본 args 를 덮어씀)
  args:{
    label:"체크박스 체크박스 체크박스 \n",
    disabled:false
  },
  render:(args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        {...args}
        checked={checked}                                // 외부 상태로 체크 여부 전달
        onChange={(e) => setChecked(e.target.checked)}   // 변경 시 외부 상태 갱신
        label={`checked: ${checked}`}                    // ⚠ 여기서 label 을 덮어쓰므로 위 args.label 은 화면에 보이지 않습니다
      />
    );
  }
};
