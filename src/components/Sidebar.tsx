import Image from 'next/image'
import { teams, matches } from '@/data/teams'

export default function Sidebar() {
  // Get top 5 teams for table
  const topTeams = [...teams].sort((a, b) => b.points - a.points).slice(0, 5)

  // Get recent matches
  const recentMatches = matches.filter((m) => m.played).slice(0, 2)
  const upcomingMatches = matches.filter((m) => !m.played).slice(0, 1)

  return (
    <aside className="space-y-6">
      {/* Table */}
      <div className="glass rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          📊 Tabulka
        </h3>
        <div className="space-y-0">
          {topTeams.map((team, index) => (
            <div
              key={team.id}
              className="flex items-center py-3 border-b border-white/10 last:border-b-0"
            >
              <span className="w-8 font-bold text-sportak-blue">{index + 1}</span>
              <div className="flex items-center gap-2 flex-1">
                <Image
                  src={team.logoSmall}
                  alt={team.name}
                  width={24}
                  height={24}
                  className="bg-white/90 rounded-full p-0.5"
                />
                <span className="text-sm">{team.name}</span>
              </div>
              <span className="font-bold text-sportak-purple">{team.points}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Matches */}
      <div className="glass rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          ⚽ Poslední zápasy
        </h3>
        <div className="space-y-3">
          {recentMatches.map((match) => {
            const homeTeam = teams.find((t) => t.id === match.homeTeamId)
            const awayTeam = teams.find((t) => t.id === match.awayTeamId)
            if (!homeTeam || !awayTeam) return null

            return (
              <div key={match.id} className="bg-black/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={homeTeam.logoSmall}
                      alt={homeTeam.shortName}
                      width={24}
                      height={24}
                      className="bg-white/90 rounded-full p-0.5"
                    />
                    <span className="text-sm font-semibold">{homeTeam.shortName}</span>
                  </div>
                  <span className="gradient-bg px-3 py-1 rounded-lg font-bold text-sm">
                    {match.homeScore} : {match.awayScore}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{awayTeam.shortName}</span>
                    <Image
                      src={awayTeam.logoSmall}
                      alt={awayTeam.shortName}
                      width={24}
                      height={24}
                      className="bg-white/90 rounded-full p-0.5"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center">{match.date} • Premier League</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Upcoming Matches */}
      <div className="glass rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          📅 Nadcházející
        </h3>
        <div className="space-y-3">
          {upcomingMatches.map((match) => {
            const homeTeam = teams.find((t) => t.id === match.homeTeamId)
            const awayTeam = teams.find((t) => t.id === match.awayTeamId)
            if (!homeTeam || !awayTeam) return null

            return (
              <div key={match.id} className="bg-black/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={homeTeam.logoSmall}
                      alt={homeTeam.shortName}
                      width={24}
                      height={24}
                      className="bg-white/90 rounded-full p-0.5"
                    />
                    <span className="text-sm font-semibold">{homeTeam.shortName}</span>
                  </div>
                  <span className="gradient-bg px-3 py-1 rounded-lg font-bold text-sm">vs</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{awayTeam.shortName}</span>
                    <Image
                      src={awayTeam.logoSmall}
                      alt={awayTeam.shortName}
                      width={24}
                      height={24}
                      className="bg-white/90 rounded-full p-0.5"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center">{match.date} • Premier League</p>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
