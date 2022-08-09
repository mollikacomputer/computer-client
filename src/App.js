import './App.css';
import { publickRoute, } from './Components/Route/publickRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
function App() {
  console.log("Hello World");
  return (
    <div>
      <Nav/>
      <Routes>
        {
          publickRoute.map(({path, Component}, index) =>(
            <Route
            key={index}
            path={path}
            element={ <Component/> }
            />
          )
          )
        }
      </Routes>
    </div>
  );
}

export default App;
