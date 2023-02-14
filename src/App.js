import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Videos from './pages/videos';
import Board from './pages/board';
import Credits from './pages/credits';

      
function App() {
  return (
<Router>
  <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/board' element={<Board/>} />
          <Route path='/credits' element={<Credits/>} />
      </Routes>
    </Router>
  );
}

export default App;
// emart : https://youtu.be/-OPhgNk2A5Y
// HOME : https://youtu.be/4XKo7u_ebW8
// look at me : https://youtu.be/K8dqs-SyW2M
// it runs through me : https://youtu.be/js1UBxXK8Jg
// 주의 친절한 팔 : https://youtu.be/jZ6Sz9TN-74

