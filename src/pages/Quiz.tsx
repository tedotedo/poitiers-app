import { useState } from 'react'
import { QUIZ } from '../data'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUIZ.length).fill(null))
  const [finished, setFinished] = useState(false)

  const q = QUIZ[current]
  const score = answers.filter((a, i) => a === QUIZ[i].answer).length

  const pick = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    const newAnswers = [...answers]
    newAnswers[current] = i
    setAnswers(newAnswers)
  }

  const next = () => {
    if (current < QUIZ.length - 1) {
      setCurrent(current + 1)
      setSelected(answers[current + 1])
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setAnswers(Array(QUIZ.length).fill(null))
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / QUIZ.length) * 100)
    const msg = pct === 100 ? 'Parfait! You know Poitiers brilliantly! 🏆' :
      pct >= 70 ? 'Très bien! Great knowledge of Poitiers! 🥐' :
      pct >= 50 ? 'Pas mal! Not bad — you have the basics! 🥖' :
      'Bonne chance next time! Explore the sights and try again! 🗺️'
    return (
      <div className="pb-24 min-h-screen flex flex-col">
        <div className="bg-white border-b border-stone-200 px-4 py-4">
          <h1 className="text-xl font-bold text-stone-800">🧠 Quiz Results</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 space-y-6 max-w-lg mx-auto w-full">
          <div className="text-center">
            <div className="text-7xl mb-4">{pct === 100 ? '🏆' : pct >= 70 ? '🥐' : pct >= 50 ? '🥖' : '🗺️'}</div>
            <h2 className="text-5xl font-bold text-stone-800">{score}/{QUIZ.length}</h2>
            <p className="text-stone-500 text-lg mt-1">{pct}%</p>
          </div>

          <div className={`w-full rounded-2xl p-5 text-center ${pct >= 70 ? 'bg-amber-50 border border-amber-200' : 'bg-stone-100 border border-stone-200'}`}>
            <p className={`font-semibold text-base ${pct >= 70 ? 'text-amber-800' : 'text-stone-700'}`}>{msg}</p>
          </div>

          {/* Answer review */}
          <div className="w-full space-y-2">
            <p className="font-semibold text-stone-700 text-sm">Review your answers:</p>
            {QUIZ.map((q, i) => {
              const correct = answers[i] === q.answer
              return (
                <div key={i} className={`rounded-xl p-3 flex items-start gap-3 ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <span className="text-lg shrink-0">{correct ? '✅' : '❌'}</span>
                  <div>
                    <p className="text-xs text-stone-600 leading-snug">{q.q}</p>
                    {!correct && <p className="text-xs font-semibold text-green-700 mt-0.5">✓ {q.options[q.answer]}</p>}
                  </div>
                </div>
              )
            })}
          </div>

          <button onClick={restart}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl text-base transition-colors">
            Try again 🔄
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-24 min-h-screen flex flex-col">
      <div className="bg-white border-b border-stone-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-stone-800">🧠 Quiz</h1>
          <span className="text-stone-500 text-sm font-medium">{current + 1} / {QUIZ.length}</span>
        </div>
        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <div className="h-full bg-amber-400 rounded-full transition-all duration-300"
            style={{ width: `${((current + (selected !== null ? 1 : 0)) / QUIZ.length) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full px-4 py-6 flex flex-col gap-4">
        {/* Question card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
          <div className="text-4xl mb-3 text-center">{q.emoji}</div>
          <p className="text-stone-800 font-semibold text-base leading-snug text-center">{q.q}</p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 flex-1">
          {q.options.map((opt, i) => {
            let style = 'bg-white border-stone-200 text-stone-700'
            if (selected !== null) {
              if (i === q.answer) style = 'bg-green-50 border-green-400 text-green-800'
              else if (i === selected && selected !== q.answer) style = 'bg-red-50 border-red-400 text-red-700'
              else style = 'bg-stone-50 border-stone-200 text-stone-400'
            }
            return (
              <button key={i} onClick={() => pick(i)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border-2 font-medium text-sm transition-all ${style} ${selected === null ? 'hover:border-amber-400 hover:bg-amber-50' : ''}`}>
                <span className="mr-2 font-bold text-stone-400">{['A', 'B', 'C', 'D'][i]}.</span>
                {opt}
                {selected !== null && i === q.answer && <span className="float-right">✓</span>}
                {selected !== null && i === selected && selected !== q.answer && <span className="float-right">✗</span>}
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <button onClick={next}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl text-base transition-colors">
            {current < QUIZ.length - 1 ? 'Next question →' : 'See results 🏆'}
          </button>
        )}
      </div>
    </div>
  )
}
