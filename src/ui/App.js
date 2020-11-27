import { ThemeProvider } from "@material-ui/core";
import { HeaderPage } from "./components/Header";
import { theme } from "./components/Theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
        <HeaderPage />
    </ThemeProvider>
    
  );
}

export default App;
