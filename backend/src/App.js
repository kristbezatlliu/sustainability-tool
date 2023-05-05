import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import Services from './pages/services';
import NotFound from './pages/notfound';

import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="*" element={NotFound} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
