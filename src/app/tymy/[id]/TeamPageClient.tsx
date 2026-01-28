'use client'

import { Team } from '@/data/teams'
import Link from 'next/link'

export default function TeamPageClient({ team }: { team: Team }) {
  const positions = ['Brankář', 'Obránce', 'Záložník', 'Útočník']

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
              <Link href="/tymy" className="text-purple-400 font-semibold">Týmy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Team Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-6">
            <img
              src={team.logoUrl}
              alt={team.name}
              className="w-24 h-24 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{team.name}</h1>
              <div className="flex flex-wrap gap-4 text-gray-300">
                <span>🏟️ {team.stadium}</span>
                <span>📍 {team.country}</span>
                <span>📅 Založen: {team.founded}</span>
                <span>👥 Kapacita: {team.stadiumCapacity.toLocaleString('cs-CZ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistiky týmu */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-purple-400">{team.points}</div>
            <div className="text-gray-400 text-sm">Body</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-green-400">{team.wins}</div>
            <div className="text-gray-400 text-sm">Výhry</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-yellow-400">{team.draws}</div>
            <div className="text-gray-400 text-sm">Remízy</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-red-400">{team.losses}</div>
            <div className="text-gray-400 text-sm">Prohry</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400">{team.goalsFor}</div>
            <div className="text-gray-400 text-sm">Vstřelené góly</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-orange-400">{team.goalsAgainst}</div>
            <div className="text-gray-400 text-sm">Obdržené góly</div>
          </div>
        </div>

        {/* Stadion sekce */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🏟️</span> Stadion {team.stadium}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Fotka stadionu */}
            <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
              <img
                src={team.stadiumImageUrl}
                alt={`Stadion ${team.stadium}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{team.stadium}</h3>
                <p className="text-gray-400">Kapacita: {team.stadiumCapacity.toLocaleString('cs-CZ')} diváků</p>
              </div>
            </div>

            {/* Mapa stadionu */}
            <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${team.stadiumMapLng - 0.01}%2C${team.stadiumMapLat - 0.008}%2C${team.stadiumMapLng + 0.01}%2C${team.stadiumMapLat + 0.008}&layer=mapnik&marker=${team.stadiumMapLat}%2C${team.stadiumMapLng}`}
                className="w-full h-64 border-0"
                title={`Mapa ${team.stadium}`}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">📍 Poloha stadionu</h3>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${team.stadiumMapLat}&mlon=${team.stadiumMapLng}#map=16/${team.stadiumMapLat}/${team.stadiumMapLng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Zobrazit větší mapu →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hráči */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">👥</span> Hráči týmu
          </h2>

          {positions.map((position) => {
            const playersInPosition = team.players.filter(p => p.position === position)
            if (playersInPosition.length === 0) return null

            return (
              <div key={position} className="mb-8">
                <h3 className="text-lg font-semibold text-purple-400 mb-4 border-b border-purple-500/30 pb-2">
                  {position === 'Brankář' && '🧤'}
                  {position === 'Obránce' && '🛡️'}
                  {position === 'Záložník' && '⚡'}
                  {position === 'Útočník' && '⚽'}
                  {' '}{position}i
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {playersInPosition.map((player) => (
                    <div
                      key={player.id}
                      className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all hover:scale-105"
                    >
                      <div className="aspect-[110/140] bg-gradient-to-b from-purple-900/30 to-slate-900/50 flex items-center justify-center">
                        <img
                          src={player.photoUrl}
                          alt={player.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/Photo-Missing.png'
                          }}
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-white text-sm truncate">{player.name}</h4>
                        <p className="text-gray-400 text-xs truncate">{player.fullName}</p>
                        <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                          <div className="text-center bg-slate-700/50 rounded py-1">
                            <div className="text-green-400 font-bold">{player.goals}</div>
                            <div className="text-gray-500">Góly</div>
                          </div>
                          <div className="text-center bg-slate-700/50 rounded py-1">
                            <div className="text-blue-400 font-bold">{player.assists}</div>
                            <div className="text-gray-500">Asist.</div>
                          </div>
                          <div className="text-center bg-slate-700/50 rounded py-1">
                            <div className="text-purple-400 font-bold">{player.matches}</div>
                            <div className="text-gray-500">Zápasy</div>
                          </div>
                          <div className="text-center bg-slate-700/50 rounded py-1">
                            <div className="text-yellow-400 font-bold">{player.yellowCards}</div>
                            <div className="text-gray-500">ŽK</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Zpět na seznam týmů */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            ← Zpět na hlavní stránku
          </Link>
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
