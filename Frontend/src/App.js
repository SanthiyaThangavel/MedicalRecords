import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
// import { Store } from 'redux';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { updateUsername, updatePassword } from './loginActions';
import Appoint from './Components/Appoint';
import Report from './Components/Report';
import Dash from './Components/Dash';
import Firstpg from './Components/Firstpg';
import Plogin from './Components/Plogin';
import Ehr from './Components/Ehr';
import { Routes,Route } from 'react-router-dom';
import Homepg from './Components/Homepg';
import Signup from './Components/Signup';
import Card from './Components/Profile';
import store from './Components/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Firstpg/>}></Route>
          <Route path="/rep" element={<Report/>}></Route>
          <Route path="/dash" element={<Dash/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/plogin" element={<Plogin/>}></Route>
          <Route path="/home" element={<Homepg/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/prof" element={<Card/>}></Route>
          <Route path="/ehr" element={<Ehr/>}></Route>
          <Route path="/appt" element={<Appoint/>}></Route>
        </Routes>
        </Provider>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   username: state.username,
//   password: state.password
// });

// const mapDispatchToProps = {
//   updateUsername,
//   updatePassword
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;