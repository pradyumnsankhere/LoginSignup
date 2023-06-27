import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './Redux/Store';


function App() {
  return (
    <Provider store={store}> 
  <div>
    
  <Navbar/>
  </div>
  </Provider>
  );
}

export default App;
