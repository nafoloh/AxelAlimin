import React from 'react'
import Navigation from './components/Navigation'
import classes from './Layout.module.css'
function Layout(props) {
  return (
    <React.Fragment>
      <div className={classes.Layout}>
        <p className={classes.Name}>Axel Alexander Alimin</p>
        <div className={classes.Navigation}>
            <Navigation />
        </div>
      </div>
      <div>{props.children}</div>
    </React.Fragment>
  )
}

export default Layout