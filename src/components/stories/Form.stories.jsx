/* Form(FormLabel, FormMessage) 가이드
 * - 스토리 파일의 기본 구조와 prop/스토리 추가 방법은 Checkbox.stories.jsx 상단 주석을 참고하세요.
 * - 이 파일은 두 컴포넌트를 함께 다루므로 스토리마다 render 로 어떤 컴포넌트를 그릴지 지정합니다.
 */
import FormLabel from "@/components/FormLabel";
import FormMessage from "@/components/FormMessage";

export default {
  // 왼쪽 메뉴 위치: Components > Form
  title: "Components/Form",
  // Docs props 표의 기준 컴포넌트
  component: FormLabel,
  // 함께 문서화할 컴포넌트 (Docs props 표에 탭으로 추가)
  subcomponents: { FormMessage },
  parameters: {
    docs: { description: { component: "폼 요소에서 공통으로 사용하는 라벨(`FormLabel`)과 메시지(`FormMessage`)입니다." } },
  },
};

// 스토리마다 render 로 그릴 컴포넌트를 지정하고, args 로 props 를 넘깁니다.
// argTypes 를 스토리 안에 쓰면 해당 스토리에만 적용됩니다.
export const Label = {
  render: (args) => <FormLabel {...args} />,
  args: { label: "라벨", required: false },
  argTypes: { required: { control: "boolean" } },
};

// 필수 표시(*)가 붙은 라벨
export const RequiredLabel = {
  render: (args) => <FormLabel {...args} />,
  args: { label: "필수 라벨", required: true },
};

// 도움말 메시지
export const Message = {
  render: (args) => <FormMessage {...args} />,
  args: { message: "도움말 메시지입니다." },
};

// 에러 메시지 (errorMessage 가 있으면 message 보다 우선 표시)
export const ErrorMessage = {
  render: (args) => <FormMessage {...args} />,
  args: { errorMessage: "에러 메시지입니다." },
};
