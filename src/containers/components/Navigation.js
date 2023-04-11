import React, { useState, useContext } from 'react'
import classes from './Navigation.module.css'
import { HashLink } from 'react-router-hash-link';
//import AppThemeContext from '../../store/app-theme-context';
function Navigation() {
   // const {appColorTheme} = useContext(AppThemeContext)
    const [buttonActive, setButtonActive] = useState(false)
    const handleButtonClick = () => {
        setButtonActive(prevState => !prevState)
        console.log('clicked');
    }
    // const stylePrimary = `AppColorPrimary ${appColorTheme}AppColor Opposite`
    // const styleSecondary = `AppColorSecondary ${appColorTheme}AppColor Opposite`
    return (
    <div className={classes.NavContainer}>
        <div onClick={handleButtonClick} className={classes.NavButton}><span className={[classes.NavIcon, buttonActive ? classes.Change : ''].join(' ')}></span></div>
        <div className={[classes.NavBg, buttonActive ? classes.NavBgExpand: ''].join(' ')}></div>
        <nav className={[classes.Nav, buttonActive ? classes.NavExpand: ''].join(' ')}>
            <ul className={classes.List}>
                <li onClick={handleButtonClick} className={classes.NavItem} >
                    <HashLink className={classes.NavLink} smooth to='/#section-header'>Home</HashLink>
                </li>
                <li onClick={handleButtonClick} className={classes.NavItem}>
                    <HashLink className={classes.NavLink} smooth to='/#section-projects'>Projects</HashLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation