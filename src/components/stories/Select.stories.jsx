/* Select 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 */
import Select from "@/components/Select";

// 셀렉트에 표시할 옵션 목록 (각 옵션 객체는 Radio 의 props 로 전달됩니다)
const options = [
  { label: "옵션 1" },
  { label: "옵션 2" },
  { label: "옵션 3" },
];

export default {
  // 왼쪽 메뉴 위치: Components > Select
  title: "Components/Select",
  // Docs props 표의 기준 컴포넌트
  component: Select,
  parameters: {
    docs: { description: { component: "클릭하면 바텀시트(Dialog)로 옵션 목록이 열리는 셀렉트입니다. `value`는 선택된 옵션의 index입니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    message: { control: "text" },
    errorMessage: { control: "text" },
    // 옵션을 선택하면 Actions 탭에 선택한 index 가 기록됩니다.
    onChange: { action: "change" },
    // 💡 options(배열)처럼 argTypes 에 없는 prop 은 Controls 에서 JSON 편집기로 표시됩니다.
  },
  // 기본 props 값
  args: {
    label: "셀렉트",
    placeholder: "선택하세요",
    optionTitle: "옵션 선택", // 바텀시트 제목
    options,
  },
};

// 기본 셀렉트
export const Default = {};

// 처음부터 두 번째 옵션(index 1)이 선택된 상태
export const Selected = { args: { value: 1 } };

// 도움말 메시지 표시
export const WithMessage = { args: { message: "도움말 메시지입니다." } };

// 에러 상태 (변수명을 Error 로 쓰면 JS 기본 객체 Error 와 겹쳐서 ErrorState 로 사용)
export const ErrorState = { args: { error: true, errorMessage: "필수 선택 항목입니다." } };
