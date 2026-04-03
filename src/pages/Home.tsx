export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="/images/notre-dame.jpg"
          alt="Poitiers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-amber-300 font-semibold text-sm tracking-widest uppercase mb-1">Bienvenue à</p>
          <h1 className="text-4xl font-bold leading-tight">Poitiers</h1>
          <p className="text-white/80 text-sm mt-1">City of 100 Spires · Vienne, France</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
        {/* Date */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
          <span className="text-3xl">📅</span>
          <div>
            <p className="font-bold text-amber-800">Your visit</p>
            <p className="text-amber-700 text-sm">Tomorrow — have a wonderful day!</p>
          </div>
        </div>

        {/* Quick facts strip */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: '⛪', label: '100+', sub: 'Spires' },
            { emoji: '📚', label: '2,000', sub: 'Years old' },
            { emoji: '🎓', label: '50%', sub: 'Students' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-3 text-center">
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="font-bold text-stone-800 text-lg leading-tight">{s.label}</div>
              <div className="text-stone-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
          <h2 className="font-bold text-stone-800 text-lg mb-2">About Poitiers</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            One of France's oldest cities, Poitiers is a medieval gem packed with Romanesque churches, Roman ruins, and royal history. 
            Eleanor of Aquitaine held court here. Joan of Arc was questioned here. 
            And the best goat's cheese in France comes from just down the road.
          </p>
        </div>

        {/* What's in the app */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
          <h2 className="font-bold text-stone-800 text-lg mb-3">In this guide</h2>
          <div className="space-y-2.5">
            {[
              { emoji: '📍', title: 'Sights', desc: '8 must-see places with photos' },
              { emoji: '🧀', title: 'Food & Drink', desc: 'What to eat and drink locally' },
              { emoji: '💡', title: 'Fun Facts', desc: '4 surprising things about Poitiers' },
              { emoji: '🧠', title: 'Quiz', desc: '10 questions — how much do you know?' },
            ].map(item => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-stone-400 text-xs pb-2">Bon voyage! 🇫🇷</p>
      </div>
    </div>
  )
}
