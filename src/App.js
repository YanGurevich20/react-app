import {HashRouter as BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Next from './components/Next';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/next' element={<Next/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
