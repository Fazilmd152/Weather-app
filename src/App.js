
import './App.css';
import WeatherApp from './Components/WeatherApp';
import Context from './Context';
import 'animate.css'




function App() {
  return (
   <Context>
   <WeatherApp/>
   </Context>
   
  )
}

export default App;
