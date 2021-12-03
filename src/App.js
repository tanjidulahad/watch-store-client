import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Details from './components/Details/Details';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import MyOrder from './components/MyOrder/MyOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
   
      <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route  path='/myorder'>
            <MyOrder></MyOrder>
          </Route>
          <Route  path='/reviews'>
            <Reviews></Reviews>
          </Route>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route  path='/register'>
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      </div>
    
    
  );
}

export default App;
