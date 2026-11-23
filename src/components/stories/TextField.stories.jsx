/* TextField 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - render 가 없으므로 모든 스토리는 <TextField {...args} /> 로 자동 렌더링됩니다.
 */
import TextField from "@/components/TextField";

export default {
  // 왼쪽 메뉴 위치: Components > TextField
  title: "Components/TextField",
  // Docs props 표의 기준 컴포넌트
  component: TextField,
  parameters: {
    docs: { description: { component: "텍스트 입력 컴포넌트입니다. `multiline`이면 textarea로 렌더링되고 내용에 따라 높이가 늘어납니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    type: { control: "select", options: ["text", "password", "number", "email", "tel"] }, // input type
    label: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },   // 필수 표시(*)
    readonly: { control: "boolean" },   // 읽기 전용
    disabled: { control: "boolean" },   // 비활성
    hiddenLabel: { control: "boolean" },// 라벨 숨김 (공간은 유지)
    clearable: { control: "boolean" },  // 입력값 삭제(X) 버튼 표시
    multiline: { control: "boolean" },  // textarea 사용
    rows: { control: "number" },        // textarea 고정 줄 수
    maxRows: { control: "number" },     // 자동 높이일 때 최대 줄 수
    error: { control: "boolean" },
    message: { control: "text" },
    errorMessage: { control: "text" },
    onChange: { action: "change" },     // 입력할 때마다 Actions 탭에 기록
  },
  // 기본 props 값
  args: { label: "라벨", placeholder: "입력하세요" },
};

// 기본 입력창
export const Default = {};

// 필수 입력
export const Required = { args: { required: true } };

// 읽기 전용 (value 로 초기값 지정)
export const Readonly = { args: { readonly: true, value: "읽기 전용" } };

// 비활성
export const Disabled = { args: { disabled: true, value: "비활성" } };

// 입력창 앞/뒤에 텍스트나 아이콘을 붙이는 예시
export const Adornment = { args: { startAdornment: "₩", endAdornment: "원" } };

// children 으로 넘긴 요소는 입력창 오른쪽 버튼 영역에 표시됩니다.
export const WithButton = {
  args: { children: <button type="button">확인</button> },
};

// 여러 줄 입력 (최대 5줄까지 자동으로 늘어남)
export const Multiline = { args: { multiline: true, maxRows: 5 } };

// 에러 상태 (변수명을 Error 로 쓰면 JS 기본 객체 Error 와 겹쳐서 ErrorState 로 사용)
export const ErrorState = { args: { error: true, errorMessage: "에러 메시지입니다." } };
