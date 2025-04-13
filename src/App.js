import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ChatbotPage from './pages/ChatbotPage'; 


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Wrapper for whole layout */}
        <Navbar />
        <main className="flex-grow "> {/* Push content below fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatbotPage />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}


export default App;
