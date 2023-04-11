import { useState} from 'react'
import classes from './App.module.css'
import Navigation from './containers/components/Navigation';
import Layout from './containers/Layout';
import Home from './pages/Home';

function App() {
  const [appColorState, setAppColorState] = useState('')
  const colorHandler = (color) => {
   // Color Pallete: Blue, Black, SkyBlue, White
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
        setAppColorState("")
    }
  }
  //console.log(classes.BodyExt);
  const colorStyle = appColorState
  return (
    <div className={[classes.BodyExt, classes[`${appColorState}`]].join(' ')}>
      <div className={[classes.BodyInt, classes[`${appColorState}`]].join(' ')} >
        <Layout>
          <Home setAppColor = {colorHandler}/>
        </Layout>
      </div>
    </div>
  );
}

export default App;
