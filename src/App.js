import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Header from "./components/Header";
import Main from './components/Main';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' Component={Main} />
          <Route exact path='/cart' Component={Cart} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
