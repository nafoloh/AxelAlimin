import { useContext} from 'react'
import classes from './App.module.css'
import Navigation from './containers/components/Navigation';
import Layout from './containers/Layout';
import Home from './pages/Home';
import AppThemeContext from './store/app-theme-context';
function App() {
  const colorCtx = useContext(AppThemeContext)
  //console.log(classes.BodyExt);
  const colorStyle = colorCtx.appColorTheme
  return (
    <div className={[classes.BodyExt, 'AppColorSecondary', `${colorStyle}AppColor`].join(' ')}>
      <div className={[classes.BodyInt,'AppColorPrimary', `${colorStyle}AppColor`].join(' ')} >
        <Layout>
          <Home setAppColor = {colorCtx.setColorTheme}/>
        </Layout>
      </div>
    </div>
  );
}

export default App;
/**
 * To change element color to the app color theme:
 * 1. import context and useContext
 * 2. create a const that receives the context.appColorTheme and add it to the class list
 * 3. Add the appColorSecondary or AppColorPrimary to the classlist for more specific coloring
 * 4. Use the global class selectors from index.js
 */
//
