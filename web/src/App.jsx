import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LaunchProvider } from './context/LaunchContext'
import Header from './components/Header'
import LaunchBanner from './components/LaunchBanner'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
    const location = useLocation()

    return (
        <ThemeProvider>
            <LaunchProvider>
                <a href="#main-content" className="skip-link">Ir al contenido principal</a>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <LaunchBanner />
                    <Header />
                    <main id="main-content" style={{ flex: 1 }}>
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/privacy" element={<Privacy />} />
                                <Route path="/terms" element={<Terms />} />
                            </Routes>
                        </AnimatePresence>
                    </main>
                    <Footer />
                </div>
            </LaunchProvider>
        </ThemeProvider>
    )
}

export default App
