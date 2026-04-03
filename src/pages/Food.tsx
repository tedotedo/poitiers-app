import { FOOD } from '../data'

export default function Food() {
  return (
    <div className="pb-24">
      <div className="bg-white border-b border-stone-200 px-4 py-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-stone-800">🧀 Food & Drink</h1>
        <p className="text-stone-500 text-sm">What to eat in the Vienne</p>
      </div>
      <div className="max-w-lg mx-auto px-4 py-4 space-y-3">
        {FOOD.map(f => (
          <div key={f.name} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 flex gap-4 items-start">
            <span className="text-3xl mt-0.5 shrink-0">{f.emoji}</span>
            <div>
              <p className="font-bold text-stone-800 text-sm">{f.name}</p>
              <p className="text-stone-500 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="text-amber-800 text-sm font-semibold mb-1">🍷 Local wine</p>
          <p className="text-amber-700 text-sm">Haut-Poitou wines — light, crisp whites are the standout. Look for them on restaurant lists.</p>
        </div>
      </div>
    </div>
  )
}
