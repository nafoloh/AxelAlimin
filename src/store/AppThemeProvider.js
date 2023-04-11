import { useState } from "react"
import AppThemeContext from "./app-theme-context"
const AppThemeProvider = props => {
    const [appColorState, setAppColorState] = useState('SkyBlue')
   // Color Pallete: Blue, Black, SkyBlue, White
   const colorHandler = (color) => {
    switch (color) {
        case 'white':
          setAppColorState("White")
          break
        case 'skyblue' :
          setAppColorState("SkyBlue")
          break
        case 'blue' :
          setAppColorState("Blue")
          break
        case 'black' :
          setAppColorState("Black")
          break
        default:
          setAppColorState("SkyBlue")
      }
      console.log(appColorState);
   }
    const context = {
        appColorTheme : appColorState,
        setColorTheme : colorHandler
    }
  return (
    <AppThemeContext.Provider value={context}>{props.children}</AppThemeContext.Provider>
  )
}

export default AppThemeProvider

//This provider only affects values in App.js