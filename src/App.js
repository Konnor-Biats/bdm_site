import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { DarkTheme, lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Site Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import ResumePage from './components/ResumePage';

function App() {
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/About" component={AboutPage}/>
        <Route exact path="/Contact" component={ContactPage}/>
        <Route exact path="/Portfolio" component={PortfolioPage}/>
        <Route exact path="/Resume" component={ResumePage}/>

      </Switch>
    </ThemeProvider>



    </>
    
}

export default App

