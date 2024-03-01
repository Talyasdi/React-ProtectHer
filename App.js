import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './HarresmentComponent';
import NotFound from './NotFound';
import ChatbotPage from './ChatbotPage';
import HarassmentChecker from './HarassmentChecker';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/harresmentcheck" element={< Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
