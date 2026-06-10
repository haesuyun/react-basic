import IconMap from "@/assets/images/IconMap";
import LoadingIcon from "@/assets/images/icon/loop.svg?react";
import clsx from "clsx"; // clsx 임포트
import { Suspense, lazy, useMemo } from "react";

// 1. 객체로 스타일 매핑
const ICON_STYLES = {
  color: {
    primary: "fill-primary",
    secondary: "fill-secondary",
    error: "fill-error",
    black: "fill-black",
    grey: "fill-grey",
    white: "fill-white",
    staticWhite: "fill-static-white",
  },
  size: {
    xlarge: "icon-xlarge",
    large: "icon-large",
    small: "icon-small",
    xsmall: "icon-xsmall",
  },
};

// 2. cva의 defaultVariants 역할을 할 기본값 지정
const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = "icon";

const Icon = ({ icon, color, size, className, ...props }) => {
  // 아이콘 컴포넌트 동적 로드
  const importer = IconMap[icon];
  const IconComponent = useMemo(() => (importer ? lazy(importer) : null), [icon]);

  // 전달받은 props가 없으면 기본값을 사용하도록 매칭
  const selectedColor = ICON_STYLES.color[color] || ICON_STYLES.color[DEFAULT_COLOR];
  const selectedSize = ICON_STYLES.size[size] || ICON_STYLES.size[DEFAULT_SIZE];

  // 아이콘이 없을때 로딩 상태 표시
  if (!IconComponent) {
    return <i className={clsx("icon", selectedSize, className)}><LoadingIcon className={clsx("fill-grey-300 loading-animation")} /></i>;
  }

  return (
    <i className={clsx("icon", selectedSize, className)}>
      <Suspense fallback={<LoadingIcon className={clsx("fill-grey-300 loading-animation")} />}> 
        <IconComponent
          className={clsx(selectedColor)}
          {...props}
        />
      </Suspense>
    </i>
  );
};

export default Icon;