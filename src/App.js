
import './App.css';
import Form from './Form';
import {BrowserRouter,Routes ,Route } from "react-router-dom"
import Message from './Message';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />}></Route>
        <Route exact path="/message" element={<Message />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/logout" element={<Logout/>}></Route>
      </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
