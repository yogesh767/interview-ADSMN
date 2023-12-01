import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from './pages/Home/Home';
import Registration from './pages/Home/Registration/Registration';
import Header from './components/Header';

function App() {
  const path = useLocation().pathname

  return (
    <div className="App">
      {
        path !== "/" &&
        <Header />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>

    </div>
  );
}

export default App;
