'use client'

import { teams, getTeamsByPoints } from '@/data/teams'
import Link from 'next/link'

export default function TeamsPage() {
  const sortedTeams = getTeamsByPoints()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 border-b border-purple-500/30 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="text-2xl">⚽</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sportak.info
              </span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Domů</Link>
              <Link href="/tymy" className="text-purple-400 font-semibold">Fotbal</Link>
              <Link href="/hokej" className="text-gray-300 hover:text-white transition-colors">Hokej</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            ⚽ Všechny týmy Premier League
          </h1>
          <p className="text-gray-300">
            Klikni na tým pro zobrazení detailu, hráčů a stadionu
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedTeams.map((team, index) => (
            <Link
              key={team.id}
              href={`/tymy/${team.id}`}
              className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Stadion preview */}
              <div className="h-32 overflow-hidden relative">
                <img
                  src={team.stadiumImageUrl}
                  alt={team.stadium}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-2 left-3 text-white text-sm font-semibold">
                  #{index + 1} v tabulce
                </div>
              </div>

              {/* Team info */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={team.logoUrl}
                    alt={team.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h2 className="font-bold text-white text-lg group-hover:text-purple-400 transition-colors">
                      {team.name}
                    </h2>
                    <p className="text-gray-400 text-sm">🏟️ {team.stadium}</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="bg-slate-700/50 rounded py-2">
                    <div className="text-purple-400 font-bold">{team.points}</div>
                    <div className="text-gray-500">Body</div>
                  </div>
                  <div className="bg-slate-700/50 rounded py-2">
                    <div className="text-green-400 font-bold">{team.wins}</div>
                    <div className="text-gray-500">Výhry</div>
                  </div>
                  <div className="bg-slate-700/50 rounded py-2">
                    <div className="text-yellow-400 font-bold">{team.draws}</div>
                    <div className="text-gray-500">Remízy</div>
                  </div>
                  <div className="bg-slate-700/50 rounded py-2">
                    <div className="text-red-400 font-bold">{team.losses}</div>
                    <div className="text-gray-500">Prohry</div>
                  </div>
                </div>

                {/* Players count */}
                <div className="mt-3 text-center text-gray-400 text-sm">
                  👥 {team.players.length} hráčů v týmu
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-purple-500/30 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Vytvořil <span className="text-purple-400 font-semibold">Míša</span> (9 let) |
            <span className="ml-2">⚽ Sportak.info 2025</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
