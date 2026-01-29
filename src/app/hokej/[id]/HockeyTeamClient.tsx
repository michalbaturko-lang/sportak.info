'use client'

import { HockeyTeam } from '@/data/hockey'
import Link from 'next/link'

export default function HockeyTeamClient({ team }: { team: HockeyTeam }) {
  const positions = ['Brankář', 'Obránce', 'Útočník']

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 border-b border-blue-500/30 sticky top-0 z-50 backdrop-blur-sm">
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
              <Link href="/tymy" className="text-gray-300 hover:text-white transition-colors">Fotbal</Link>
              <Link href="/hokej" className="text-blue-400 font-semibold">Hokej</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Team Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-b border-blue-500/20">
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
                <span>🏟️ {team.arenaName}</span>
                <span>📍 {team.city}</span>
                <span>📅 Založen: {team.founded}</span>
                <span>👥 Kapacita: {team.arenaCapacity.toLocaleString('cs-CZ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistiky týmu */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400">{team.points}</div>
            <div className="text-gray-400 text-sm">Body</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-green-400">{team.wins}</div>
            <div className="text-gray-400 text-sm">Výhry</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-cyan-400">{team.winsOT}</div>
            <div className="text-gray-400 text-sm">Výhry PP</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-yellow-400">{team.lossesOT}</div>
            <div className="text-gray-400 text-sm">Prohry PP</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-red-400">{team.losses}</div>
            <div className="text-gray-400 text-sm">Prohry</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-emerald-400">{team.goalsFor}</div>
            <div className="text-gray-400 text-sm">Vstřelené</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-orange-400">{team.goalsAgainst}</div>
            <div className="text-gray-400 text-sm">Obdržené</div>
          </div>
        </div>

        {/* Aréna sekce */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🏟️</span> Aréna {team.arenaName}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Fotka arény */}
            <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
              <img
                src={team.arenaImageUrl}
                alt={`Aréna ${team.arenaName}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{team.arenaName}</h3>
                <p className="text-gray-400">Kapacita: {team.arenaCapacity.toLocaleString('cs-CZ')} diváků</p>
                <p className="text-gray-400">Barvy klubu: {team.colors}</p>
              </div>
            </div>

            {/* Mapa arény */}
            <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${team.arenaMapLng - 0.01}%2C${team.arenaMapLat - 0.008}%2C${team.arenaMapLng + 0.01}%2C${team.arenaMapLat + 0.008}&layer=mapnik&marker=${team.arenaMapLat}%2C${team.arenaMapLng}`}
                className="w-full h-64 border-0"
                title={`Mapa ${team.arenaName}`}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">📍 Poloha arény</h3>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${team.arenaMapLat}&mlon=${team.arenaMapLng}#map=16/${team.arenaMapLat}/${team.arenaMapLng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
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
            <span className="text-3xl">👥</span> Soupiska týmu ({team.players.length} hráčů)
          </h2>

          {positions.map((position) => {
            const playersInPosition = team.players.filter(p => p.position === position)
            if (playersInPosition.length === 0) return null

            return (
              <div key={position} className="mb-8">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 border-b border-blue-500/30 pb-2">
                  {position === 'Brankář' && '🥅'}
                  {position === 'Obránce' && '🛡️'}
                  {position === 'Útočník' && '🏒'}
                  {' '}{position}i ({playersInPosition.length})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {playersInPosition.map((player) => (
                    <div
                      key={player.id}
                      className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400">
                          {player.number}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{player.fullName}</h4>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="text-xs px-2 py-0.5 bg-slate-700 rounded">{player.nationality}</span>
                            <span>{player.position}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="bg-slate-700/50 rounded py-2">
                          <div className="text-green-400 font-bold">{player.goals}</div>
                          <div className="text-gray-500 text-xs">Góly</div>
                        </div>
                        <div className="bg-slate-700/50 rounded py-2">
                          <div className="text-blue-400 font-bold">{player.assists}</div>
                          <div className="text-gray-500 text-xs">Asist.</div>
                        </div>
                        <div className="bg-slate-700/50 rounded py-2">
                          <div className="text-cyan-400 font-bold">{player.points}</div>
                          <div className="text-gray-500 text-xs">Body</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-sm mt-2">
                        <div className="bg-slate-700/50 rounded py-2">
                          <div className="text-purple-400 font-bold">{player.matches}</div>
                          <div className="text-gray-500 text-xs">Zápasy</div>
                        </div>
                        <div className="bg-slate-700/50 rounded py-2">
                          <div className={`font-bold ${player.plusMinus >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {player.plusMinus > 0 ? '+' : ''}{player.plusMinus}
                          </div>
                          <div className="text-gray-500 text-xs">+/-</div>
                        </div>
                        <div className="bg-slate-700/50 rounded py-2">
                          <div className="text-yellow-400 font-bold">{player.penaltyMinutes}</div>
                          <div className="text-gray-500 text-xs">TM</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Zpět */}
        <div className="mt-8 text-center">
          <Link
            href="/hokej"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            ← Zpět na seznam týmů
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-blue-500/30 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Vytvořil <span className="text-blue-400 font-semibold">Míša</span> (9 let) |
            <span className="ml-2">⚽ Sportak.info 2025</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
