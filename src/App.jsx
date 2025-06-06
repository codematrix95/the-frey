import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/the-frey-build" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
