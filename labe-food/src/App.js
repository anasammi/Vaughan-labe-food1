import { ThemeProvider } from "@mui/material";
import theme from './constants/theme'
import Router from "./routes/Router";
import { GlobalStyle } from "./styled-app";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
