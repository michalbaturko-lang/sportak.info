import { NextResponse } from 'next/server'

// Typy pro zápasy
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

// Simulace živých dat (v produkci by to bylo z API)
function generateLiveMatches(): LiveMatch[] {
  const now = new Date()
  const hour = now.getHours()

  // Premier League zápasy
  const footballMatches: LiveMatch[] = [
    {
      id: 'pl-1',
      homeTeam: 'Manchester City',
      awayTeam: 'Arsenal',
      homeScore: 2,
      awayScore: 1,
      minute: "67'",
      status: 'live',
      competition: 'Premier League',
      competitionIcon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    },
    {
      id: 'pl-2',
      homeTeam: 'Liverpool',
      awayTeam: 'Chelsea',
      homeScore: 3,
      awayScore: 3,
      minute: "90'+2",
      status: 'live',
      competition: 'Premier League',
      competitionIcon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    },
    {
      id: 'pl-3',
      homeTeam: 'Tottenham',
      awayTeam: 'Manchester United',
      homeScore: 0,
      awayScore: 0,
      minute: '',
      status: 'scheduled',
      competition: 'Premier League',
      competitionIcon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      startTime: '17:30'
    },
  ]

  // Hokejové zápasy - Extraliga
  const hockeyMatches: LiveMatch[] = [
    {
      id: 'el-1',
      homeTeam: 'Sparta Praha',
      awayTeam: 'Třinec',
      homeScore: 3,
      awayScore: 2,
      minute: "45:22",
      status: 'live',
      competition: 'Tipsport extraliga',
      competitionIcon: '🇨🇿'
    },
    {
      id: 'el-2',
      homeTeam: 'Pardubice',
      awayTeam: 'Liberec',
      homeScore: 4,
      awayScore: 1,
      minute: 'Konec',
      status: 'finished',
      competition: 'Tipsport extraliga',
      competitionIcon: '🇨🇿'
    },
    {
      id: 'el-3',
      homeTeam: 'Brno',
      awayTeam: 'Plzeň',
      homeScore: 0,
      awayScore: 0,
      minute: '',
      status: 'scheduled',
      competition: 'Tipsport extraliga',
      competitionIcon: '🇨🇿',
      startTime: '18:00'
    },
    {
      id: 'el-4',
      homeTeam: 'Vítkovice',
      awayTeam: 'Č. Budějovice',
      homeScore: 2,
      awayScore: 2,
      minute: "38:15",
      status: 'live',
      competition: 'Tipsport extraliga',
      competitionIcon: '🇨🇿'
    },
  ]

  return [...footballMatches, ...hockeyMatches]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sport = searchParams.get('sport') // 'football', 'hockey', nebo null pro oba

  try {
    let matches = generateLiveMatches()

    // Filtrování podle sportu
    if (sport === 'football') {
      matches = matches.filter(m => m.competition === 'Premier League')
    } else if (sport === 'hockey') {
      matches = matches.filter(m => m.competition === 'Tipsport extraliga')
    }

    return NextResponse.json({
      matches,
      lastUpdate: new Date().toISOString(),
      liveCount: matches.filter(m => m.status === 'live').length
    })
  } catch (error) {
    console.error('Error in matches API:', error)
    return NextResponse.json({ error: 'Failed to fetch matches' }, { status: 500 })
  }
}
