import './App.css';
import Navbar from './components/Navbar.jsx';
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <img src="./reactjs-icon-2.png" alt="" className="float-end" />
      <div className="container">
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
