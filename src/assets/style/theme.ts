import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: 'Pretendard',
  },
  palette: {
    primary: {
      main: "#00a49d",
    },
    secondary: {
      main: "#404b57",
    },
  },
  components: {
    MuiDialog: {
      defaultProps: {
        closeAfterTransition: false, // 기본값 설정 (dialog를 닫을때 #root의 aria-hidden=false 값 변경이 늦어지는 에러 수정)
      },
    },
  },
});
