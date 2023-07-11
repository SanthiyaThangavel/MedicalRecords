import Signup from "./Components/Signup";
import './App.css';
import Logins from './Components/Login';
import Homepg from './Components/home';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Logins/>}></Route>
      <Route path='/log' element={<Homepg/>}></Route>
     </Routes>
    </div>
  );
}
export default App;
