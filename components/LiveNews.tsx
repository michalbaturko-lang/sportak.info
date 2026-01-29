'use client'

import { useState, useEffect } from 'react'

interface NewsItem {
  id: string
  title: string
  description: string
  link: string
  source: string
  sourceIcon: string
  pubDate: string
  category: 'fotbal' | 'hokej' | 'ostatni'
}

export default function LiveNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'fotbal' | 'hokej'>('all')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news')
        const data = await response.json()
        setNews(data.news || [])
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
    // Aktualizace každých 5 minut
    const interval = setInterval(fetchNews, 300000)
    return () => clearInterval(interval)
  }, [])

  const filteredNews = filter === 'all'
    ? news
    : news.filter(item => item.category === filter)

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor(diff / (1000 * 60))

      if (minutes < 60) return `Před ${minutes} min`
      if (hours < 24) return `Před ${hours} hod`
      return date.toLocaleDateString('cs-CZ')
    } catch {
      return ''
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-6 bg-slate-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4">
                <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-3xl">📰</span> Živé novinky
        </h2>

        {/* Filtry */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Vše
          </button>
          <button
            onClick={() => setFilter('fotbal')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'fotbal'
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            ⚽ Fotbal
          </button>
          <button
            onClick={() => setFilter('hokej')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === 'hokej'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            🏒 Hokej
          </button>
        </div>
      </div>

      {/* Hlavní zpráva */}
      {filteredNews.length > 0 && (
        <a
          href={filteredNews[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 mb-6 border border-purple-500/30 hover:border-purple-400/50 transition-colors group"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              HLAVNÍ ZPRÁVA
            </span>
            <span className="text-gray-400 text-sm">
              {filteredNews[0].sourceIcon} {filteredNews[0].source}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {filteredNews[0].title}
          </h3>
          <p className="text-gray-300">{filteredNews[0].description}</p>
          <p className="text-gray-500 text-sm mt-3">{formatDate(filteredNews[0].pubDate)}</p>
        </a>
      )}

      {/* Ostatní zprávy */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredNews.slice(1, 9).map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-purple-500/50 transition-colors group"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">
                {item.category === 'fotbal' ? '⚽' : item.category === 'hokej' ? '🏒' : '🏆'}
              </span>
              <div className="flex items-center gap-2">
                <span className="bg-purple-600/50 text-purple-200 text-xs px-2 py-1 rounded">
                  {item.source}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
            <p className="text-gray-500 text-xs mt-2">{formatDate(item.pubDate)}</p>
          </a>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Žádné novinky k zobrazení</p>
        </div>
      )}
    </div>
  )
}
