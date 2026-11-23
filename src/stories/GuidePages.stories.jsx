/* Guide 화면 모음
 * - src/pages/guide 폴더의 가이드 화면을 스토리북에서 그대로 보여줍니다.
 *   (가이드 화면을 수정하면 스토리북에도 자동 반영됩니다)
 * - 스토리 파일의 기본 구조는 src/components/stories/Checkbox.stories.jsx 상단 주석을 참고하세요.
 *
 * ⚠ 주의: 이 파일을 src/pages 안에 두면 router.jsx 의 import.meta.glob 에 잡혀
 *         라우트로 등록되므로 반드시 src/stories 폴더에 둡니다.
 * - PageList(화면 목록, 라우터 의존)와 LayoutGuide(빈 파일)는 제외했습니다.
 *
 * ■ 새 가이드 화면을 추가하는 방법
 *   1) 아래에 import 추가  : import NewGuide from "@/pages/guide/NewGuide";
 *   2) 스토리 추가          : export const New = page(NewGuide);
 *   → 왼쪽 메뉴 Guide > New 로 나타납니다. (export 순서 = 메뉴 순서)
 */
import AccordionGuide from "@/pages/guide/AccordionGuide";
import ButtonGuide from "@/pages/guide/ButtonGuide";
import CheckboxGuide from "@/pages/guide/CheckboxGuide";
import ChipGuide from "@/pages/guide/ChipGuide";
import ColorGuide from "@/pages/guide/ColorGuide";
import DialogGuide from "@/pages/guide/DialogGuide";
import IconGuide from "@/pages/guide/IconGuide";
import Overview from "@/pages/guide/Overview";
import RadioGuide from "@/pages/guide/RadioGuide";
import SelectGuide from "@/pages/guide/SelectGuide";
import SwitchGuide from "@/pages/guide/SwitchGuide";
import TabsGuide from "@/pages/guide/TabsGuide";
import TextFieldGuide from "@/pages/guide/TextFieldGuide";
import TooltipGuide from "@/pages/guide/TooltipGuide";
import TypographyGuide from "@/pages/guide/TypographyGuide";

export default {
  // 왼쪽 메뉴 위치: Guide (하위에 아래 스토리들이 나열됨)
  title: "Guide",
  // tags: 스토리북 기능 on/off. "!autodocs" = Docs 페이지 자동 생성 끄기
  // (.storybook/preview.tsx 에서 전체에 autodocs 를 켜두었기 때문에 여기서만 끕니다)
  tags: ["!autodocs"],
  // 화면 단위 가이드라 조작할 props 가 없으므로 Controls 패널을 끕니다.
  parameters: { controls: { disable: true } },
};

// 컴포넌트를 받아 "그대로 그리는 스토리" 객체를 만들어 주는 함수 (반복 코드 줄이기용)
const page = (Component) => ({ render: () => <Component /> });

// 변수명이 메뉴 이름이 됩니다.
// name: 메뉴 이름을 직접 지정 (import 한 Overview 와 변수명이 겹쳐 OverviewPage 로 만들고 이름만 "Overview" 로 표시)
export const OverviewPage = { ...page(Overview), name: "Overview" };
export const Color = page(ColorGuide);
export const Typography = page(TypographyGuide);
export const Icon = page(IconGuide);
export const Button = page(ButtonGuide);
export const Chip = page(ChipGuide);
export const Accordion = page(AccordionGuide);
export const Checkbox = page(CheckboxGuide);
export const Radio = page(RadioGuide);
export const Switch = page(SwitchGuide);
export const Select = page(SelectGuide);
export const TextField = page(TextFieldGuide);
export const Tabs = page(TabsGuide);
export const Dialog = page(DialogGuide);
export const Tooltip = page(TooltipGuide);
