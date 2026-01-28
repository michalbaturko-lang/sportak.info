'use client'

import { teams, news, matches, getTeamsByPoints, getTeamById } from '@/data/teams'
import Link from 'next/link'

export default function Home() {
  const sortedTeams = getTeamsByPoints().slice(0, 10) // Top 10 týmů

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
              <Link href="/" className="text-purple-400 font-semibold">Domů</Link>
              <Link href="/tymy" className="text-gray-300 hover:text-white transition-colors">Týmy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1920"
          alt="Fotbalové hřiště"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sportak.info
            </span>
          </h1>
          <p className="text-xl text-gray-300">Tvůj sportovní portál - Premier League živě!</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - News */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📰</span> Novinky
            </h2>

            {/* Featured News */}
            {news.filter(n => n.featured).map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 mb-6 border border-purple-500/30"
              >
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
                <p className="text-gray-500 text-sm mt-3">{item.date}</p>
              </div>
            ))}

            {/* Other News */}
            <div className="grid md:grid-cols-2 gap-4">
              {news.filter(n => !n.featured).map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="bg-purple-600/50 text-purple-200 text-xs px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.content}</p>
                  <p className="text-gray-500 text-xs mt-2">{item.date}</p>
                </div>
              ))}
            </div>

            {/* Matches Section */}
            <h2 className="text-2xl font-bold text-white mt-10 mb-6 flex items-center gap-3">
              <span className="text-3xl">⚔️</span> Zápasy
            </h2>

            <div className="space-y-4">
              {matches.map((match) => {
                const homeTeam = getTeamById(match.homeTeamId)
                const awayTeam = getTeamById(match.awayTeamId)
                if (!homeTeam || !awayTeam) return null

                return (
                  <div
                    key={match.id}
                    className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <img src={homeTeam.logoSmall} alt={homeTeam.shortName} className="w-8 h-8" />
                      <Link href={`/tymy/${homeTeam.id}`} className="text-white font-semibold hover:text-purple-400">
                        {homeTeam.shortName}
                      </Link>
                    </div>

                    <div className="text-center px-4">
                      {match.played ? (
                        <div className="bg-slate-700 rounded-lg px-4 py-2">
                          <span className="text-2xl font-bold text-white">
                            {match.homeScore} - {match.awayScore}
                          </span>
                        </div>
                      ) : (
                        <div className="bg-purple-600/30 rounded-lg px-4 py-2">
                          <span className="text-purple-300 font-semibold">{match.date}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <Link href={`/tymy/${awayTeam.id}`} className="text-white font-semibold hover:text-purple-400">
                        {awayTeam.shortName}
                      </Link>
                      <img src={awayTeam.logoSmall} alt={awayTeam.shortName} className="w-8 h-8" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Standings */}
            <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>🏆</span> Tabulka Premier League
              </h3>

              <div className="space-y-2">
                {sortedTeams.map((team, index) => (
                  <Link
                    key={team.id}
                    href={`/tymy/${team.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <span className={`w-6 text-center font-bold ${
                      index < 4 ? 'text-green-400' :
                      index < 6 ? 'text-blue-400' :
                      'text-gray-400'
                    }`}>
                      {index + 1}
                    </span>
                    <img src={team.logoSmall} alt={team.shortName} className="w-6 h-6" />
                    <span className="flex-1 text-white text-sm truncate">{team.shortName}</span>
                    <span className="text-purple-400 font-bold text-sm">{team.points}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/tymy"
                className="block text-center mt-4 text-purple-400 hover:text-purple-300 text-sm"
              >
                Zobrazit všechny týmy →
              </Link>
            </div>

            {/* Top Scorers Preview */}
            <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>⚽</span> Nejlepší střelci
              </h3>

              <div className="space-y-3">
                {teams
                  .flatMap(team => team.players.map(p => ({ ...p, teamName: team.shortName, teamId: team.id, teamLogo: team.logoSmall })))
                  .sort((a, b) => b.goals - a.goals)
                  .slice(0, 5)
                  .map((player, index) => (
                    <Link
                      key={player.id}
                      href={`/tymy/${player.teamId}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <span className={`w-6 text-center font-bold ${
                        index === 0 ? 'text-yellow-400' :
                        index === 1 ? 'text-gray-300' :
                        index === 2 ? 'text-orange-400' :
                        'text-gray-500'
                      }`}>
                        {index + 1}
                      </span>
                      <img
                        src={player.photoUrl}
                        alt={player.name}
                        className="w-8 h-10 object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/Photo-Missing.png'
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-semibold truncate">{player.name}</div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <img src={player.teamLogo} alt="" className="w-4 h-4" />
                          {player.teamName}
                        </div>
                      </div>
                      <span className="text-green-400 font-bold">{player.goals}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
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
