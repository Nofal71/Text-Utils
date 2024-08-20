import { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [dark, setDark] = useState({ color: "black", backgroundColor: 'white' });
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };

  const darkMode = () => {
    if (theme === 'light') {
      setDark({ color: 'white', backgroundColor: 'black' });
      setTheme('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setDark({ color: "black", backgroundColor: 'white' });
      setTheme('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Router>
        <NavBar mode={theme} title='TextUtils' about='About' changeTheme={darkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About stylee={dark} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} stylee={dark} mode={theme} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
