
import './App.css';
import Form from './Form';
import {BrowserRouter,Routes ,Route } from "react-router-dom"
import Message from './Message';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />}></Route>
        <Route exact path="/message" element={<Message />}></Route>
      </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
