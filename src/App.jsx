import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bot from './pages/Bot'
import Blog from './pages/Blog'
import Article from './pages/article'
import Games from './pages/Games'
import TicTacToe from './pages/TicTacToe'
import WordleClone from './pages/WordleClone'
import MemoryMatch from './pages/MemoryMatch'
import RockPaperScissors from './pages/RockPaperSissors'
import Articles from './pages/article'
import SingleArticle from './pages/SingleArticle'


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/bot" element={<Bot />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
                    <Route path="/games/wordle" element={<WordleClone />} />
                    <Route path="/games/memory" element={<MemoryMatch />} />
                    <Route path="/games/rps" element={<RockPaperScissors />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<SingleArticle />} />
                    {/* <Route path="*" element={<Home />} /> */}

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App