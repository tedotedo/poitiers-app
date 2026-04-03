import { FACTS } from '../data'

export default function Facts() {
  return (
    <div className="pb-24">
      <div className="bg-white border-b border-stone-200 px-4 py-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-stone-800">💡 Fun Facts</h1>
        <p className="text-stone-500 text-sm">Surprising things about Poitiers</p>
      </div>
      <div className="max-w-lg mx-auto px-4 py-4 space-y-3">
        {FACTS.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 flex gap-4 items-start">
            <span className="text-4xl shrink-0">{f.emoji}</span>
            <p className="text-stone-700 text-sm leading-relaxed">{f.fact}</p>
          </div>
        ))}
        <div className="bg-stone-100 rounded-2xl p-4 text-center">
          <p className="text-stone-500 text-xs">Try the quiz to test what you've learned →</p>
        </div>
      </div>
    </div>
  )
}
