import { Routes, Route } from 'react-router-dom';
import './App.css';
import Foter from './components/Foter/Foter';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Spetstekhnika from './components/Spetstekhnika/Spetstekhnika';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Foter />

      <Routes>
        
        <Route path='/spetstekhnika' element={<Spetstekhnika />} />
      </Routes>

    </div>
  );
}

export default App;
