export const QUIZ = [
  {
    q: 'Poitiers earned what colourful nickname thanks to its many medieval church spires?',
    options: ['City of a Thousand Bridges', 'City of 100 Spires', 'City of Saints', 'The Rome of the West'],
    answer: 1,
    emoji: '⛪',
  },
  {
    q: 'Which Romanesque masterpiece, famous for its intricately carved 12th-century façade, is the most photographed monument in Poitiers?',
    options: ['Cathédrale Saint-Pierre', 'Sainte-Radegonde Church', 'Notre-Dame la Grande', 'Palais des Comtes'],
    answer: 2,
    emoji: '🏛️',
  },
  {
    q: 'Which famous medieval queen lived in the Poitiers palace and helped commission the Cathédrale Saint-Pierre?',
    options: ['Marie Antoinette', 'Isabelle of Castile', 'Blanche of Castile', 'Eleanor of Aquitaine'],
    answer: 3,
    emoji: '👑',
  },
  {
    q: 'At the Battle of Poitiers in 1356, what dramatic thing happened to the French king Jean le Bon?',
    options: ['He won a great victory', 'He signed a peace treaty', 'He was captured by the English', 'He drove the English from France'],
    answer: 2,
    emoji: '⚔️',
  },
  {
    q: 'Legend says a 6th-century local saint slew a fearsome creature called Grand\'Goule. Who was she?',
    options: ['Saint Geneviève', 'Saint Clothilde', 'Saint Radegonde', 'Saint Jeanne'],
    answer: 2,
    emoji: '🐉',
  },
  {
    q: 'The Baptistère Saint-Jean is one of the oldest surviving Christian buildings in the Western world. When was it built?',
    options: ['1st century BC', '4th–5th century AD', '9th century AD', '11th century AD'],
    answer: 1,
    emoji: '🕍',
  },
  {
    q: 'Joan of Arc was questioned by clergy in Poitiers in 1429. Where did this take place?',
    options: ['Notre-Dame la Grande', 'Palace of the Counts of Poitou', 'Baptistère Saint-Jean', 'Cathédrale Saint-Pierre'],
    answer: 1,
    emoji: '⚜️',
  },
  {
    q: 'Which AOC-certified goat\'s cheese from the region is said to have been first made by Saracens after the 7th-century battle?',
    options: ['Camembert', 'Brie de Meaux', 'Comté', 'Chabichou du Poitou'],
    answer: 3,
    emoji: '🧀',
  },
  {
    q: 'Tourteau Fromagé is a classic local dessert. What is its most visually distinctive feature?',
    options: ['Shaped like a medieval spire', 'Bright yellow from saffron', 'A deliberately burnt black dome', 'Served flambéed at the table'],
    answer: 2,
    emoji: '🍰',
  },
  {
    q: 'Futuroscope opened in 1987 just outside Poitiers. What was its original concept?',
    options: ['A medieval history experience', 'A wildlife showcase', 'A futuristic park celebrating image & communication technology', 'A space exploration museum'],
    answer: 2,
    emoji: '🚀',
  },
]

export const SIGHTS = [
  {
    name: 'Notre-Dame la Grande',
    desc: 'One of the finest Romanesque façades in France — a riot of biblical carvings. ⚠️ Currently closed for restoration until May 2027, but stunning to see from outside.',
    emoji: '⛪',
    img: '/images/notre-dame.jpg',
  },
  {
    name: 'Baptistère Saint-Jean',
    desc: 'One of the oldest surviving Christian buildings in the Western world, built in the 4th–5th century AD. Still has original 12th-century wall paintings inside.',
    emoji: '🕍',
    img: '/images/baptistere.jpg',
  },
  {
    name: 'Palace of the Counts',
    desc: "Eleanor of Aquitaine's home, where Joan of Arc was questioned in 1429. Soaring medieval Great Hall with immense fireplaces — free to enter.",
    emoji: '🏰',
    img: '/images/palace.jpg',
  },
  {
    name: 'Cathédrale Saint-Pierre',
    desc: "Oldest surviving stained glass in France (12th c.) and the oldest choir stalls in the country (13th c.) — Eleanor of Aquitaine helped commission it.",
    emoji: '🌟',
    img: '/images/cathedrale.jpg',
  },
  {
    name: 'Musée Sainte-Croix',
    desc: 'Roman gladiator helmets, a marble Athena found by builders in 1910, and works by Camille Claudel — all built over exposed Roman foundations.',
    emoji: '🏺',
    img: '/images/museum.jpg',
  },
  {
    name: 'Les Halles Market',
    desc: 'Vibrant covered market next to Notre-Dame la Grande — local cheeses, charcuterie, fresh produce and real Poitevin life.',
    emoji: '🧺',
    img: '/images/market.jpg',
  },
  {
    name: 'Futuroscope',
    desc: "One of France's most spectacular theme parks — 40+ rides and immersive 4D shows, just 20 minutes from the city centre.",
    emoji: '🚀',
    img: '/images/futuroscope.jpg',
  },
  {
    name: 'Sainte-Radegonde Church',
    desc: "Church of Poitiers' dragon-slaying patron saint — and (unofficially) the patron saint of passing exams, popular with students.",
    emoji: '🐉',
    img: '/images/radegonde.jpg',
  },
]

export const FOOD = [
  { name: 'Farci Poitevin', desc: 'Herb-packed pâté made with spinach, cabbage, goat\'s cheese and crème fraîche. The green meatloaf of Poitou.', emoji: '🌿' },
  { name: 'Chabichou du Poitou', desc: 'The region\'s famous AOC goat\'s cheese — eat it young and creamy or aged and sharp.', emoji: '🧀' },
  { name: 'Tourteau Fromagé', desc: 'Goat\'s cheese sponge in a pastry shell with a signature jet-black burnt dome. Tastes better than it sounds.', emoji: '🍰' },
  { name: 'Broyé du Poitou', desc: 'Giant flat buttery shortbread disc — traditionally smashed open by hand and shared.', emoji: '🍪' },
  { name: 'Macarons de Montmorillon', desc: 'Rustic chewy almond biscuits made since the 16th century — totally different from Parisian macarons.', emoji: '🍬' },
  { name: 'Pineau des Charentes', desc: 'Sweet, amber fortified wine from just south of Poitiers. Perfect before dinner.', emoji: '🍷' },
]

export const FACTS = [
  { fact: 'Nearly half of Poitiers\' 90,000 residents are students — making it one of France\'s most youthful cities despite being over 2,000 years old.', emoji: '🎓' },
  { fact: 'A Roman amphitheatre seating 30,000+ once stood here. It was demolished in the 1850s — but fragments survive in cellars under the streets.', emoji: '🏟️' },
  { fact: 'Poitiers has a shopping mall inside a 13th-century Gothic chapel. Zara has never had a more dramatic setting.', emoji: '🛍️' },
  { fact: 'One of only 5 shops in all of France still makes handmade umbrellas by hand — and it\'s right here in Poitiers.', emoji: '☂️' },
]
