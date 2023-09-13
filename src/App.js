import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Detail from "./components/Detail";
import './App.css';
import Home from "./components/Home"

function App() {
  return (
 <Router>
 <Header />
  <Routes>
  <Route exact path="/" element={<Login />} />
  <Route path='/home' element={<Home />} />
  <Route path='/detail/:id' element={<Detail />} />
  </Routes>
 </Router>
  );
}

export default App;
