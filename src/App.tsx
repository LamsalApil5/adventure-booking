import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AdventuresPage from './pages/AdventuresPage'
import AdventureDetailPage from './pages/AdventureDetailPage'
import BookingPage from './pages/BookingPage'
import ConfirmationPage from './pages/ConfirmationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { AdventureProvider } from './context/AdventureContext'

function App() {
  return (
    <AdventureProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/adventures" element={<AdventuresPage />} />
              <Route path="/adventures/:id" element={<AdventureDetailPage />} />
              <Route path="/book/:id" element={<BookingPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AdventureProvider>
  )
}

export default App
