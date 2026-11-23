import type { Preview } from '@storybook/react-vite'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/assets/style/theme'
import '../src/assets/style/main.scss'

const preview: Preview = {
  tags: ['autodocs'], // 모든 컴포넌트에 Docs(가이드) 페이지 자동 생성
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
