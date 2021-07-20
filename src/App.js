import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path='/login'>
          <Login></Login>
        </Route>

        <Route path='/signup'>
          <Signup></Signup>
        </Route>

        <Route exact path='/home'>
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
