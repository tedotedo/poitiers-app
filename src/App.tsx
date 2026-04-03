import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Sights from './pages/Sights'
import Food from './pages/Food'
import Facts from './pages/Facts'
import Quiz from './pages/Quiz'

const NAV = [
  { to: '/', label: 'Home', emoji: '🗺️' },
  { to: '/sights', label: 'Sights', emoji: '📍' },
  { to: '/food', label: 'Food', emoji: '🧀' },
  { to: '/facts', label: 'Facts', emoji: '💡' },
  { to: '/quiz', label: 'Quiz', emoji: '🧠' },
]

function BottomNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 z-50">
      <div className="flex max-w-lg mx-auto">
        {NAV.map(n => {
          const active = n.to === '/' ? pathname === '/' : pathname.startsWith(n.to)
          return (
            <button key={n.to} onClick={() => navigate(n.to)}
              className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors ${active ? 'text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}>
              <span className="text-xl leading-none">{n.emoji}</span>
              <span className={`text-xs font-medium ${active ? 'font-bold' : ''}`}>{n.label}</span>
              {active && <span className="w-1 h-1 rounded-full bg-amber-500" />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sights" element={<Sights />} />
        <Route path="/food" element={<Food />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
