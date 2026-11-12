import React from "react";

// 1. pages 폴더 안의 모든 jsx / tsx 파일을 동기(eager) 방식으로 가져옵니다.

const pageModules = import.meta.glob('./pages/**/*.{jsx,tsx}', { eager: true });

export const dynamicRoutes = [];
export const pageList = [];

// 기본 루트 화면을 한 번만 등록합니다.
dynamicRoutes.push({
  path: '/',
  element: React.lazy(() => import('@/pages/guide/PageList')),
  meta: {},
});

const extractMetaFromComponent = (component) => {
  if (typeof component !== 'function') return null;
  const source = component.toString();
  const metaStart = source.search(/(?:const|let|var)\s+meta\s*=\s*\{/);
  if (metaStart < 0) return null;

  let braceDepth = 0;
  let startIndex = source.indexOf('{', metaStart);
  if (startIndex < 0) return null;

  for (let i = startIndex; i < source.length; i++) {
    const char = source[i];
    if (char === '{') braceDepth += 1;
    if (char === '}') {
      braceDepth -= 1;
      if (braceDepth === 0) {
        const objectText = source.slice(startIndex, i + 1);
        try {
          return new Function(`return ${objectText}`)();
        } catch {
          return null;
        }
      }
    }
  }
  return null;
};

Object.entries(pageModules).forEach(([file, module]) => {
  const pageModule = module;
  const defaultExport = pageModule.default;

  if (!defaultExport) return;

  const routeConfig = pageModule.routeConfig || defaultExport?.routeConfig || {};
  const Component = routeConfig.component || defaultExport;
  const meta = routeConfig.meta || pageModule.meta || defaultExport?.meta || extractMetaFromComponent(defaultExport) || {};

  if (!Component) return;
  
  let path = file
  .replace(/^\.\/pages/, '')
  .replace(/\.(jsx|tsx)$/, '')
  .replace(/\/index$/, '');
  
  if (path === '') path = '/';
  
  // 루트('/')는 위에서 한 번 등록했으므로 중복 등록을 피합니다.
  if (path === '/') {
    pageList.push({ path, meta });
    return;
  }

  dynamicRoutes.push({
    path,
    element: Component,
    meta,
    layout: routeConfig.layout || meta.layout,
  });
  
  // 페이지 목록에는 pages/guide 폴더의 화면만 노출합니다.
  if (file.startsWith('./pages/guide/') && !file.includes('/guide/PageList')) {
    pageList.push({
      path,
      meta,
    });
  }
});