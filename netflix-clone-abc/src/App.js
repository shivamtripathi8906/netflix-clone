import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Component/Homepage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Route exact path="/" component={Homepage}/>
       </BrowserRouter>
    </div>
  );
}

export default App;
