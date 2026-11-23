/* Tooltip 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 */
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";

export default {
  // 왼쪽 메뉴 위치: Components > Tooltip
  title: "Components/Tooltip",
  // Docs props 표의 기준 컴포넌트
  component: Tooltip,
  parameters: {
    docs: { description: { component: "자식 요소(버튼)를 클릭하면 열리는 툴팁입니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    content: { control: "text" },
    onChange: { action: "change" }, // 열림/닫힘 시 Actions 탭에 기록
  },
  // 기본 props 값. children 은 툴팁을 여는 버튼(트리거)입니다.
  args: {
    title: "툴팁 제목",
    content: "툴팁 내용입니다.",
    children: (
      <button type="button">
        <Icon icon="info" />
      </button>
    ),
  },
  // decorators: 스토리를 감싸는 바깥 요소를 지정합니다.
  // 툴팁이 아래로 열리므로 잘리지 않도록 아래쪽 여백을 줍니다.
  // (Story) 는 실제 스토리 컴포넌트이며, 원하는 레이아웃/Provider 로 감쌀 때 사용합니다.
  decorators: [(Story) => <div style={{ padding: "16px 16px 160px" }}><Story /></div>],
};

// 기본 (버튼을 클릭하면 열림)
export const Default = {};

// 처음부터 열린 상태
export const Open = { args: { open: true } };
