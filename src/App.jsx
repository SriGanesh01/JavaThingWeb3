import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bot from './pages/Bot'


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/bot" element={<Bot />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App