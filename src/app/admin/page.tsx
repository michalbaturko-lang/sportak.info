'use client'

import { useState } from 'react'
import { news } from '@/data/teams'

export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tag: 'NOVINKA',
    emoji: '📰',
  })

  const [showPreview, setShowPreview] = useState(false)

  const tagOptions = ['NOVINKA', 'TRANSFER', 'ZÁPAS', 'HLAVNÍ ZPRÁVA', 'VÝSLEDEK']
  const emojiOptions = ['📰', '⚽', '🏆', '🔥', '⚡', '🎯', '⭐', '🚀']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // V budoucnu zde bude ukládání do databáze
    alert('Pro přidání novinky uprav soubor: src/data/teams.ts\n\nPřidej nový objekt do pole "news"!')
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2">
        🔧 Admin rozhraní
      </h1>
      <p className="text-gray-400 mb-8">
        Zde můžeš přidávat nové novinky na Sportak.info
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">✍️ Nová novinka</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold mb-2">Nadpis</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Např: Haaland dal hattrick!"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-sportak-blue focus:outline-none transition-colors"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold mb-2">Obsah</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Napiš celý článek..."
                rows={4}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-sportak-blue focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Tag */}
            <div>
              <label className="block text-sm font-semibold mb-2">Štítek</label>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setFormData({ ...formData, tag })}
                    className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                      formData.tag === tag
                        ? 'gradient-bg'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Emoji */}
            <div>
              <label className="block text-sm font-semibold mb-2">Emoji</label>
              <div className="flex flex-wrap gap-2">
                {emojiOptions.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setFormData({ ...formData, emoji })}
                    className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all ${
                      formData.emoji === emoji
                        ? 'gradient-bg'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="flex-1 py-3 rounded-xl bg-white/10 font-semibold hover:bg-white/20 transition-colors"
              >
                {showPreview ? 'Skrýt náhled' : 'Zobrazit náhled'}
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl gradient-bg font-semibold hover:opacity-90 transition-opacity"
              >
                Uložit novinku
              </button>
            </div>
          </form>
        </div>

        {/* Preview & Instructions */}
        <div className="space-y-6">
          {/* Preview */}
          {showPreview && formData.title && (
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">👀 Náhled</h2>
              <div className="glass rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-sportak-purple/30 to-sportak-blue/20 h-32 flex items-center justify-center text-5xl">
                  {formData.emoji}
                </div>
                <div className="p-4">
                  <span className="gradient-bg px-3 py-1 rounded-full text-xs font-semibold">
                    {formData.tag}
                  </span>
                  <h3 className="font-bold mt-2 mb-1">{formData.title}</h3>
                  <p className="text-sm text-gray-400">Právě teď</p>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📝 Jak přidat novinku</h2>
            <ol className="space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Otevři soubor <code className="bg-black/30 px-2 py-0.5 rounded text-sportak-blue">src/data/teams.ts</code></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Najdi pole <code className="bg-black/30 px-2 py-0.5 rounded text-sportak-blue">news</code></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Přidej nový objekt s novinkou</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Ulož soubor a web se aktualizuje!</span>
              </li>
            </ol>
          </div>

          {/* Existing News */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📰 Existující novinky ({news.length})</h2>
            <div className="space-y-2">
              {news.map((item) => (
                <div key={item.id} className="bg-black/30 rounded-xl p-3 flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
