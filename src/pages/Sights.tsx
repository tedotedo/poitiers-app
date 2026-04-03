import { useState } from 'react'
import { SIGHTS } from '../data'

export default function Sights() {
  const [expanded, setExpanded] = useState<number | null>(null)
  return (
    <div className="pb-24">
      <div className="bg-white border-b border-stone-200 px-4 py-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-stone-800">📍 Sights</h1>
        <p className="text-stone-500 text-sm">8 places to see in Poitiers</p>
      </div>
      <div className="max-w-lg mx-auto px-4 py-4 space-y-3">
        {SIGHTS.map((s, i) => (
          <div key={s.name} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <button className="w-full text-left" onClick={() => setExpanded(expanded === i ? null : i)}>
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.name}
                  className="w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white flex items-end justify-between">
                  <div>
                    <p className="font-bold text-base leading-tight">{s.name}</p>
                  </div>
                  <span className="text-2xl">{s.emoji}</span>
                </div>
              </div>
            </button>
            {expanded === i && (
              <div className="px-4 py-3">
                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
