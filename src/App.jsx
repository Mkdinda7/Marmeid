import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRoute from './pages/HomeRoute';
import AboutRoute from './pages/AboutRoute';
import RoomsRoute from './pages/RoomsRoute';
import ContactRoute from './pages/ContactRoute';
import RoomDetails from './components/RoomDetails/RoomDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/about' element={<AboutRoute />} />
        <Route path='/rooms' element={<RoomsRoute />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/contact' element={<ContactRoute />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
