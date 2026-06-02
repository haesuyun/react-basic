// 아이콘 폴더에 있는 `.svg` 파일 목록을 가져옵니다.
// import.meta.glob는 Vite에서 제공하는 함수로 빌드 타임에 파일 목록을 매핑합니다.
const iconFiles = import.meta.glob("./icon/*.svg");

// 파일 경로 목록을 순회하며 파일명(아이콘 키)과 동적 import 함수를 매핑해 객체로 만듭니다.
// 결과는 { 'arrow-left': () => import('./icon/arrow-left.svg?react'), ... } 형태입니다.
const IconMap = Object.fromEntries(
  Object.keys(iconFiles).map((filePath) => {
    // filePath 예시: './icon/arrow-left.svg'
    // 정규식을 사용해 파일명(확장자 제외)을 추출합니다.
    const match = filePath.match(/\.\/icon\/(.+)\.svg$/);
    // 매칭이 성공하면 파일명(아이콘 키)을 사용하고, 실패하면 전체 경로를 키로 사용합니다.
    const iconName = match ? match[1] : filePath;

    // 동적 import 함수 생성: `?react` 쿼리를 붙여 svgr 플러그인이 React 컴포넌트를 반환하도록 합니다.
    // 실제 렌더링 시 React.lazy에 이 함수를 전달해 지연 로드합니다.
    const importer = () => import(`./icon/${iconName}.svg?react`);

    // [아이콘키, import 함수] 쌍을 반환하여 객체로 병합합니다.
    return [iconName, importer];
  })
);

export default IconMap;