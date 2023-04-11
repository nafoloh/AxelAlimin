import React, {useContext} from "react";
import Navigation from "./components/Navigation";
import classes from "./Layout.module.css";
import AppThemeContext from "../store/app-theme-context";
function Layout(props) {
  const {appColorTheme} = useContext(AppThemeContext)
    let hide 
    if (props.scrollDir === "up" || props.scrollDir === "still") {
        hide = false;
    } else {
        hide = true;
    }
    return (
        <React.Fragment>
            <div className={[classes.Layout, hide? classes.LayoutHide: ''].join(' ')}>
                <p className={[classes.Name,`AppColorPrimary ${appColorTheme}AppColor Opposite Text`].join(' ')}>Axel Alexander Alimin</p>
            </div>
                <div className={classes.Navigation}>
                <Navigation />
            </div>
            
            <div>{props.children}</div>
        </React.Fragment>
    );
}

export default Layout;
