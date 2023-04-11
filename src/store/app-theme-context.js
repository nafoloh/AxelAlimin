import React from "react";

const AppThemeContext = React.createContext({
    appColorTheme: '',
    setColorTheme: () => {}
})

export default AppThemeContext