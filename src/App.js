import { ThemeProvider } from "styled-components"
import { DarkTheme, lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


function App() {
  return <>


  <GlobalStyle />

    <ThemeProvider theme={DarkTheme}>
        App File
    </ThemeProvider>



    </>
    
}

export default App

