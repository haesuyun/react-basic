/* Icon 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - 새 아이콘은 src/assets/images/icon 폴더에 svg 파일만 추가하면 아래 목록에 자동으로 나타납니다.
 */
import IconMap from "@/assets/images/IconMap";
import Icon from "@/components/Icon";

// IconMap(아이콘 파일 목록)에서 이름만 뽑아 Controls 드롭다운과 전체 목록에 사용합니다.
// 흰색(-white) 아이콘은 목록에서 제외
const ICONS = Object.keys(IconMap).filter((name) => !name.endsWith("-white"));

export default {
  // 왼쪽 메뉴 위치: Components > Icon
  title: "Components/Icon",
  // Docs props 표의 기준 컴포넌트
  component: Icon,
  parameters: {
    docs: { description: { component: "SVG 아이콘 컴포넌트입니다. `src/assets/images/icon` 폴더의 파일명을 `icon`으로 전달합니다." } },
  },
  // Controls 패널 입력 UI 정의
  argTypes: {
    // options 에 변수(ICONS)를 넣어 드롭다운 목록을 자동으로 만듭니다.
    icon: { control: "select", options: ICONS },
    // undefined = 기본값(black / 18px) 사용
    color: { control: "select", options: [undefined, "primary", "secondary", "error", "black", "grey", "white", "staticWhite"] },
    size: { control: "select", options: [undefined, "xsmall", "small", "large", "xlarge"] },
  },
  // 기본 props 값
  args: { icon: "home" },
};

// 기본 아이콘 (Controls 에서 icon/color/size 를 바꿔보세요)
export const Default = {};

// 크기별 비교: 배열을 map 으로 돌려 한 화면에 나란히 보여줍니다.
export const Sizes = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {["xsmall", "small", undefined, "large", "xlarge"].map((size) => (
        <Icon key={size ?? "default"} {...args} size={size} />
      ))}
    </div>
  ),
};

// 색상별 비교
export const Colors = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      {["primary", "secondary", "error", "black", "grey"].map((color) => (
        <Icon key={color} {...args} color={color} />
      ))}
    </div>
  ),
};

// 전체 아이콘 목록 (이름과 함께 표시)
export const AllIcons = {
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 16 }}>
      {ICONS.map((name) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontSize: 12 }}>
          <Icon {...args} icon={name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
