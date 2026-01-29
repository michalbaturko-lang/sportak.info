'use client'

import { useState, useEffect } from 'react'

interface LiveMatch {
  id: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  minute: string
  status: 'live' | 'finished' | 'scheduled'
  competition: string
  competitionIcon: string
  startTime?: string
}

export default function LiveMatches() {
  const [matches, setMatches] = useState<LiveMatch[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<string>('')

  const fetchMatches = async () => {
    try {
      const response = await fetch('/api/matches')
      const data = await response.json()
      setMatches(data.matches || [])
      setLastUpdate(new Date().toLocaleTimeString('cs-CZ'))
    } catch (error) {
      console.error('Error fetching matches:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
    // Aktualizace každých 30 sekund
    const interval = setInterval(fetchMatches, 30000)
    return () => clearInterval(interval)
  }, [])

  const liveMatches = matches.filter(m => m.status === 'live')
  const scheduledMatches = matches.filter(m => m.status === 'scheduled')
  const finishedMatches = matches.filter(m => m.status === 'finished')

  if (loading) {
    return (
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
        <div className="animate-pulse">
          <div className="h-6 bg-slate-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-16 bg-slate-700 rounded"></div>
            <div className="h-16 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          Živé výsledky
        </h3>
        <span className="text-xs text-gray-500">
          Aktualizováno: {lastUpdate}
        </span>
      </div>

      {/* Živé zápasy */}
      {liveMatches.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-red-400 font-semibold mb-2 uppercase tracking-wide">
            🔴 Právě se hraje
          </div>
          <div className="space-y-2">
            {liveMatches.map((match) => (
              <div
                key={match.id}
                className="bg-gradient-to-r from-red-900/30 to-slate-800/50 rounded-xl p-3 border border-red-500/30"
              >
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{match.competitionIcon} {match.competition}</span>
                  <span className="text-red-400 font-semibold animate-pulse">{match.minute}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm flex-1">{match.homeTeam}</span>
                  <div className="bg-slate-700 rounded-lg px-3 py-1 mx-2">
                    <span className="text-xl font-bold text-white">
                      {match.homeScore} - {match.awayScore}
                    </span>
                  </div>
                  <span className="text-white font-semibold text-sm flex-1 text-right">{match.awayTeam}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Naplánované zápasy */}
      {scheduledMatches.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-blue-400 font-semibold mb-2 uppercase tracking-wide">
            📅 Dnes se hraje
          </div>
          <div className="space-y-2">
            {scheduledMatches.map((match) => (
              <div
                key={match.id}
                className="bg-slate-700/30 rounded-xl p-3 border border-slate-600/30"
              >
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{match.competitionIcon} {match.competition}</span>
                  <span className="text-blue-400">{match.startTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm flex-1">{match.homeTeam}</span>
                  <div className="bg-slate-600/50 rounded-lg px-3 py-1 mx-2">
                    <span className="text-gray-400">vs</span>
                  </div>
                  <span className="text-gray-300 text-sm flex-1 text-right">{match.awayTeam}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ukončené zápasy */}
      {finishedMatches.length > 0 && (
        <div>
          <div className="text-xs text-green-400 font-semibold mb-2 uppercase tracking-wide">
            ✅ Dokončené
          </div>
          <div className="space-y-2">
            {finishedMatches.map((match) => (
              <div
                key={match.id}
                className="bg-slate-700/20 rounded-xl p-3 border border-slate-600/20"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>{match.competitionIcon} {match.competition}</span>
                  <span className="text-green-400">Konec</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm flex-1">{match.homeTeam}</span>
                  <div className="bg-slate-700/50 rounded-lg px-3 py-1 mx-2">
                    <span className="text-lg font-bold text-gray-300">
                      {match.homeScore} - {match.awayScore}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm flex-1 text-right">{match.awayTeam}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {matches.length === 0 && (
        <p className="text-gray-500 text-center py-4">
          Žádné zápasy k zobrazení
        </p>
      )}
    </div>
  )
}
