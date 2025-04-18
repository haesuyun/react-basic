import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#00a49d",
        },
        secondary: {
          main: "#404b57",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#936FFF",
        },
        secondary: {
          main: "#404b57",
        },
      },
    },
  },
  // 단일 모드 일때 사용
  // palette: {
  //   mode: 'dark',
  //   primary: {
  //     main: "#00a49d",
  //   },
  //   secondary: {
  //     main: "#404b57",
  //   },
  // },
  typography: {
    htmlFontSize: 10,
    fontFamily: 'Pretendard',
  },
  components: {
    MuiDialog: {
      defaultProps: {
        closeAfterTransition: false, // 기본값 설정 (dialog를 닫을때 #root의 aria-hidden=false 값 변경이 늦어지는 에러 수정)
      },
    },
  },
});