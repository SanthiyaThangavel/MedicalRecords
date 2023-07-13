import Signup from "./Components/Signup";
import './App.css';
import Logins from './Components/Login';
import Homepg from './Components/home';
import {Route, Routes} from 'react-router-dom';
import Dash from "./Components/dash";
function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Logins/>}></Route>
      <Route path='/sign' element={<Signup/>}></Route>
      <Route path='/log' element={<Homepg/>}></Route>
      <Route path='/dash' element={<Dash/>}></Route>
     </Routes>
    </div>
  );
}
export default App;
