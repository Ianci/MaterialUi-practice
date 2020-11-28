import { ThemeProvider } from "@material-ui/core";
import { HeaderPage } from "./components/Header";
import { theme } from "./components/Theme";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home } from '../ui/components/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HeaderPage />
        <Switch>
              <Route exact path="/" component={Home} / >
              <Route path="/services" component={Home} / >
              <Route path="/revolution" component={Home} / >
              <Route path="/about" component={Home} / >
              <Route path="/contact" component={Home} / >
              <Route path="/customsoftware" component={Home} / >
              <Route path="/mobileapp" component={Home} / >
              <Route path="/websitedev" component={Home} / >
              <Redirect to="/" />
        </Switch>

        </Router>
        
    </ThemeProvider>
    
  );
}

export default App;
