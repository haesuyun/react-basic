/* Accordion 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - export default = 파일 전체 설정 / export const = 메뉴에 보이는 예시(스토리) 1개
 */
import { useState } from "react";
import Accordion from "@/components/Accordion";
import AccordionGroup from "@/components/AccordionGroup";

export default {
  // 왼쪽 메뉴 위치: Components > Accordion
  title: "Components/Accordion",
  // Docs props 표의 기준이 되는 메인 컴포넌트
  component: Accordion,
  // 함께 쓰는 하위 컴포넌트. Docs props 표에 탭으로 추가되어 AccordionGroup 의 props 도 볼 수 있습니다.
  subcomponents: { AccordionGroup },
  parameters: {
    // Docs 페이지 상단 설명
    docs: { description: { component: "펼침/접힘 영역 컴포넌트입니다. `AccordionGroup`으로 묶으면 하나만 열립니다." } },
  },
  // Controls 패널 입력 UI 정의 (description 은 Docs 표의 설명 칸에 표시)
  argTypes: {
    variant: { control: "text", description: "스타일 variant (기본: standard)" },
    expanded: { control: "boolean", description: "열림 여부" },
    title: { control: "text" },
    // action: 이벤트가 실행되면 하단 "Actions" 탭에 기록됩니다. (클릭해서 확인)
    onChange: { action: "change" },
  },
  // 모든 스토리의 기본 props 값
  args: {
    title: "아코디언 제목",
    expanded: false,
    variant: "standard",
    // children 처럼 JSX 도 args 로 넣을 수 있습니다.
    children: <p>아코디언 내용입니다. 열고 닫을 때 높이 애니메이션이 적용됩니다.</p>,
  },
};

// 기본 args 그대로 렌더링
export const Default = {};

// 열린 상태 예시 (expanded 만 덮어씀)
export const Expanded = { args: { expanded: true } };

// title 대신 header 영역을 사용하는 예시 (undefined 로 기본값 제거)
export const WithHeader = {
  args: { title: undefined, header: <strong>커스텀 헤더 영역</strong> },
};

// 여러 아코디언을 그룹으로 묶는 예시.
// render 로 직접 그리며, useState 로 "현재 열린 index" 를 관리합니다.
// 같은 항목을 다시 누르면 null 이 되어 모두 닫힙니다.
export const Group = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <AccordionGroup value={value} onChange={(i) => setValue(value === i ? null : i)}>
        {[1, 2, 3].map((n) => (
          <Accordion key={n} title={`아코디언 ${n}`}>
            <p>아코디언 {n} 내용</p>
          </Accordion>
        ))}
      </AccordionGroup>
    );
  },
};
