import type { StorybookConfig } from '@storybook/react-vite';

// Windows: 터미널에 따라 cwd 드라이브 문자가 소문자(c:)로 들어오면
// 스토리 경로(C:)와 매칭되지 않아 "importers[path] is not a function" 에러가 발생하므로 대문자로 맞춥니다.
if (process.platform === 'win32' && /^[a-z]:/.test(process.cwd())) {
  process.chdir(process.cwd()[0].toUpperCase() + process.cwd().slice(1));
}

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite"
};
export default config;