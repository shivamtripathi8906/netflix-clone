import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Component/Homepage';
import LoginPage from './Component/LoginPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={Homepage}/>
       </BrowserRouter>
    </div>
  );
}

export default App;
