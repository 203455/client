import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Update from './components/Update/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Register' element={<Register/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Update' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
