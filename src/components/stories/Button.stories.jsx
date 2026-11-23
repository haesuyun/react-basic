/* Button 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - 버튼은 별도 컴포넌트 없이 공통 클래스(src/assets/style/common/_button.scss)로 사용합니다.
 *   아래 Button 함수는 "가이드 전용 헬퍼"로, Controls 에서 고른 값을 클래스 조합으로 바꿔 보여줍니다.
 *   실제 화면 개발 시에는 <button className="button bg-primary"> 처럼 클래스를 직접 사용하세요.
 */
import clsx from "clsx";
import Icon from "@/components/Icon";

// variant + size 조합 → 실제 적용될 CSS 클래스
// 💡 새 크기/종류가 생기면 여기에 추가하고, 아래 argTypes 의 options 에도 추가합니다.
const SIZE_CLASS = {
  contained: { small: "button-small", medium: "button", large: "button-large" },
  text: { small: "button-text button-small", medium: "button-text", large: "button-text button-large" },
};
// 버튼 크기에 맞는 아이콘 크기 (undefined = Icon 기본 크기)
const ICON_SIZE = {
  contained: { small: "small", medium: undefined, large: "large" },
  text: { small: "small", medium: undefined, large: "large" },
};

// 가이드용 헬퍼 컴포넌트. 함수의 매개변수가 곧 Controls 에 표시되는 props 입니다.
function Button({ variant = "contained", size = "medium", color = "primary", label, startIcon, endIcon, disabled, onClick }) {
  const iconSize = ICON_SIZE[variant][size];
  const iconColor = variant === "contained" ? "staticWhite" : undefined; // 배경색 버튼은 흰색 아이콘
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(SIZE_CLASS[variant][size], variant === "contained" && `bg-${color}`)}
    >
      {startIcon && <Icon icon={startIcon} size={iconSize} color={iconColor} />}
      {label}
      {endIcon && <Icon icon={endIcon} size={iconSize} color={iconColor} />}
    </button>
  );
}

// 아이콘 선택 드롭다운에 보여줄 목록 (undefined = 아이콘 없음)
const ICON_OPTIONS = [undefined, "close", "next", "prev", "down", "up", "check", "search", "home"];

export default {
  // 왼쪽 메뉴 위치: Components > Button
  title: "Components/Button",
  // Docs props 표의 기준 컴포넌트 (위의 헬퍼)
  component: Button,
  parameters: {
    docs: {
      description: {
        // 여러 줄 설명은 배열을 "\n" 으로 이어 붙이면 편합니다. (마크다운 표/목록 사용 가능)
        component: [
          "버튼은 컴포넌트가 아닌 **공통 클래스**로 사용합니다. (`src/assets/style/common/_button.scss`)",
          "",
          "| 구분 | small | medium (기본) | large |",
          "|---|---|---|---|",
          "| contained | `button-small` (24px) | `button` (42px) | `button-large` (56px) |",
          "| text | `button-text button-small` (14px) | `button-text` (16px) | `button-text button-large` (18px) |",
          "",
          "- contained 버튼 색상: `bg-primary`, `bg-secondary`, `bg-tertiary`",
          "- 여러 버튼을 나란히 배치할 때는 `button-group`으로 감쌉니다.",
          "- 아이콘은 `Icon` 컴포넌트를 버튼 안에 넣어 사용합니다.",
        ].join("\n"),
      },
    },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    // inline-radio: 옵션을 가로로 나열한 라디오 버튼
    variant: { control: "inline-radio", options: ["contained", "text"] },
    size: { control: "inline-radio", options: ["small", "medium", "large"] },
    // if: 조건부 표시. variant 가 "contained" 일 때만 color 컨트롤이 보입니다.
    color: { control: "inline-radio", options: ["primary", "secondary", "tertiary"], if: { arg: "variant", eq: "contained" } },
    label: { control: "text" },
    startIcon: { control: "select", options: ICON_OPTIONS },
    endIcon: { control: "select", options: ICON_OPTIONS },
    disabled: { control: "boolean" },
    onClick: { action: "click" }, // 클릭 시 Actions 탭에 기록
  },
  // 기본 props 값
  args: { variant: "contained", size: "medium", color: "primary", label: "Button" },
};

// Controls 로 클래스 조합을 바꿔보는 기본 스토리
export const Default = {};

// contained 버튼: 크기(행) × 색상(열) 비교
export const Contained = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {["small", "medium", "large"].map((size) => (
        <div key={size} style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {["primary", "secondary", "tertiary"].map((color) => (
            <Button key={color} {...args} variant="contained" size={size} color={color} label={`${size} ${color}`} />
          ))}
        </div>
      ))}
    </div>
  ),
};

// 텍스트 버튼 크기 비교
export const Text = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {["small", "medium", "large"].map((size) => (
        <Button key={size} {...args} variant="text" size={size} label={`Button ${size}`} />
      ))}
    </div>
  ),
};

// 아이콘이 앞(startIcon)/뒤(endIcon)에 붙은 버튼
export const WithIcon = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {["small", "medium", "large"].map((size) => (
        <div key={size} style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Button {...args} variant="text" size={size} startIcon="close" />
          <Button {...args} variant="text" size={size} endIcon="close" />
          <Button {...args} variant="contained" size={size} endIcon="next" />
        </div>
      ))}
    </div>
  ),
};

// 아이콘만 있는 버튼 (텍스트가 없으므로 aria-label 로 의미를 꼭 전달하세요)
export const IconOnly = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {["xsmall", "small", undefined, "large", "xlarge"].map((size) => (
        <button key={size ?? "default"} type="button">
          <Icon icon="close" size={size} aria-label="닫기" />
        </button>
      ))}
    </div>
  ),
};

// 버튼 그룹 (button-group 으로 감싸면 가로로 꽉 차게 나란히 배치)
export const Group = {
  render: () => (
    <div className="button-group">
      <button type="button" className="button-large bg-secondary">이전</button>
      <button type="button" className="button-large bg-primary">다음</button>
    </div>
  ),
};
