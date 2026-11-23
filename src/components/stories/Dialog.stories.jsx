/* Dialog 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - 이 파일은 export default 안에 render 를 두어, 모든 스토리가 "열기 버튼 + 다이얼로그" 구조를 공유합니다.
 */
import { useState } from "react";
import Dialog from "@/components/Dialog";

export default {
  // 왼쪽 메뉴 위치: Components > Dialog
  title: "Components/Dialog",
  // Docs props 표의 기준 컴포넌트
  component: Dialog,
  parameters: {
    docs: { description: { component: "모달 다이얼로그입니다. body에 portal로 렌더링되며 포커스 트랩이 적용됩니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    // select: 정해진 값 중 하나를 고르는 드롭다운
    maxWidth: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    fullScreen: { control: "boolean" },
    bottomSheet: { control: "boolean" },
    dimHide: { control: "boolean" },
    title: { control: "text" },
  },
  // 기본 props 값
  args: { title: "다이얼로그 제목", maxWidth: "md" },

  // 공통 render: 여기 두면 이 파일의 모든 스토리가 이 방식으로 그려집니다.
  // (스토리별로 render 를 다시 쓰면 그 스토리만 덮어씁니다)
  // open/onClose 는 상태로 관리해야 하므로 args 가 아닌 useState 로 처리합니다.
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>다이얼로그 열기</button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)}>
          <p>다이얼로그 내용입니다.</p>
        </Dialog>
      </>
    );
  },
};

// 기본 다이얼로그
export const Default = {};

// 하단 버튼 영역(actions)에 JSX 를 넘기는 예시
export const WithActions = {
  args: {
    actions: (
      <>
        <button type="button">취소</button>
        <button type="button">확인</button>
      </>
    ),
  },
};

// 전체 화면 다이얼로그
export const FullScreen = { args: { fullScreen: true } };

// 화면 아래에서 올라오는 바텀시트 형태
export const BottomSheet = { args: { bottomSheet: true } };
