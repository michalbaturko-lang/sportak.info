import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlayerCard from '@/components/PlayerCard'
import { teams, getTeamById } from '@/data/teams'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return teams.map((team) => ({
    id: team.id,
  }))
}

export default function TeamDetailPage({ params }: PageProps) {
  const team = getTeamById(params.id)

  if (!team) {
    notFound()
  }

  // Calculate position in table
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points)
  const position = sortedTeams.findIndex((t) => t.id === team.id) + 1

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-sportak-blue mb-6 transition-colors"
      >
        ← Zpět na hlavní stránku
      </Link>

      {/* Team Header */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-white/10">
          <div className="w-24 h-24 bg-white/95 rounded-2xl p-3 flex items-center justify-center">
            <Image
              src={team.logoUrl}
              alt={team.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold mb-2">{team.name}</h1>
            <p className="text-gray-400">
              📍 {team.stadium} • 🏴󠁧󠁢󠁥󠁮󠁧󠁿 {team.country} • Založen {team.founded}
            </p>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-extrabold gradient-text">{position}.</p>
            <p className="text-gray-400 text-sm mt-1">Pozice</p>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-extrabold gradient-text">{team.points}</p>
            <p className="text-gray-400 text-sm mt-1">Bodů</p>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-extrabold gradient-text">{team.wins}</p>
            <p className="text-gray-400 text-sm mt-1">Výher</p>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-extrabold gradient-text">{team.goalsFor}</p>
            <p className="text-gray-400 text-sm mt-1">Gólů</p>
          </div>
        </div>
      </div>

      {/* Players Section */}
      {team.players.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            👥 Hráči
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {team.players.map((player) => (
              <PlayerCard
                key={player.id}
                name={player.name}
                position={player.position}
                photoUrl={player.photoUrl}
                stats={
                  player.position === 'Brankář'
                    ? [
                        { label: 'Zápasy', value: player.matches },
                        { label: 'Čistá konta', value: player.cleanSheets || 0 },
                      ]
                    : [
                        { label: 'Góly', value: player.goals },
                        { label: 'Asistence', value: player.assists },
                      ]
                }
              />
            ))}
          </div>

          {/* Detailed Stats Table */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            📊 Detailní statistiky hráčů
          </h2>
          <div className="glass rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-2 p-4 bg-sportak-purple/30 text-xs font-semibold uppercase text-gray-400">
              <span className="col-span-2">Hráč</span>
              <span className="text-center">Zápasy</span>
              <span className="text-center">Góly</span>
              <span className="text-center">Asistence</span>
              <span className="text-center">Minuty</span>
            </div>

            {/* Table Rows */}
            {team.players.map((player) => (
              <div
                key={player.id}
                className="grid grid-cols-6 gap-2 p-4 border-b border-white/5 hover:bg-sportak-blue/10 transition-colors items-center"
              >
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sportak-blue/30">
                    <Image
                      src={player.photoUrl}
                      alt={player.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{player.fullName}</p>
                    <p className="text-xs text-sportak-blue">{player.position}</p>
                  </div>
                </div>
                <span className="text-center font-semibold">{player.matches}</span>
                <span className="text-center font-semibold text-sportak-blue">
                  {player.goals}
                </span>
                <span className="text-center font-semibold text-sportak-blue">
                  {player.assists}
                </span>
                <span className="text-center font-semibold">{player.minutes}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* No Players Message */}
      {team.players.length === 0 && (
        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-xl text-gray-400">
            Hráči pro tento tým zatím nejsou k dispozici.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Brzy je přidáme! 🚀
          </p>
        </div>
      )}
    </main>
  )
}
