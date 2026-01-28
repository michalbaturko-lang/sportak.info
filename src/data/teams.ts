// Data týmů Premier League
// Míša může tato data upravovat a přidávat nové týmy!

export interface Player {
  id: string
  name: string
  fullName: string
  position: string
  photoUrl: string
  matches: number
  goals: number
  assists: number
  yellowCards: number
  minutes: number
  cleanSheets?: number // pro brankáře
}

export interface Team {
  id: string
  name: string
  shortName: string
  logoUrl: string
  logoSmall: string
  stadium: string
  country: string
  founded: number
  points: number
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  players: Player[]
}

export interface Match {
  id: string
  homeTeamId: string
  awayTeamId: string
  homeScore?: number
  awayScore?: number
  date: string
  time?: string
  played: boolean
}

export interface NewsItem {
  id: string
  title: string
  content: string
  tag: string
  emoji: string
  date: string
  featured?: boolean
}

// Týmy
export const teams: Team[] = [
  {
    id: 'manchester-city',
    name: 'Manchester City',
    shortName: 'Man City',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t43.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t43.png',
    stadium: 'Etihad Stadium',
    country: 'Anglie',
    founded: 1880,
    points: 58,
    wins: 18,
    draws: 4,
    losses: 2,
    goalsFor: 52,
    goalsAgainst: 18,
    players: [
      {
        id: 'ederson',
        name: 'Ederson',
        fullName: 'Ederson Moraes',
        position: 'Brankář',
        photoUrl: 'https://resources.premierleague.com/premierleague/photos/players/110x140/p121160.png',
        matches: 22,
        goals: 0,
        assists: 1,
        yellowCards: 0,
        minutes: 1980,
        cleanSheets: 8,
      },
      {
        id: 'dias',
        name: 'R. Dias',
        fullName: 'Rúben Dias',
        position: 'Obránce',
        photoUrl: 'https://resources.premierleague.com/premierleague/photos/players/110x140/p171314.png',
        matches: 20,
        goals: 2,
        assists: 1,
        yellowCards: 4,
        minutes: 1780,
      },
      {
        id: 'debruyne',
        name: 'De Bruyne',
        fullName: 'Kevin De Bruyne',
        position: 'Záložník',
        photoUrl: 'https://resources.premierleague.com/premierleague/photos/players/110x140/p61366.png',
        matches: 18,
        goals: 8,
        assists: 12,
        yellowCards: 3,
        minutes: 1420,
      },
      {
        id: 'foden',
        name: 'Foden',
        fullName: 'Phil Foden',
        position: 'Záložník',
        photoUrl: 'https://resources.premierleague.com/premierleague/photos/players/110x140/p209244.png',
        matches: 21,
        goals: 11,
        assists: 7,
        yellowCards: 1,
        minutes: 1680,
      },
      {
        id: 'haaland',
        name: 'Haaland',
        fullName: 'Erling Haaland',
        position: 'Útočník',
        photoUrl: 'https://resources.premierleague.com/premierleague/photos/players/110x140/p223094.png',
        matches: 22,
        goals: 24,
        assists: 5,
        yellowCards: 2,
        minutes: 1856,
      },
    ],
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'Arsenal',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t3.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t3.png',
    stadium: 'Emirates Stadium',
    country: 'Anglie',
    founded: 1886,
    points: 55,
    wins: 17,
    draws: 4,
    losses: 3,
    goalsFor: 48,
    goalsAgainst: 20,
    players: [],
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'Liverpool',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t14.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t14.png',
    stadium: 'Anfield',
    country: 'Anglie',
    founded: 1892,
    points: 53,
    wins: 16,
    draws: 5,
    losses: 3,
    goalsFor: 51,
    goalsAgainst: 22,
    players: [],
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'Chelsea',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t8.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t8.png',
    stadium: 'Stamford Bridge',
    country: 'Anglie',
    founded: 1905,
    points: 44,
    wins: 13,
    draws: 5,
    losses: 6,
    goalsFor: 42,
    goalsAgainst: 28,
    players: [],
  },
  {
    id: 'tottenham',
    name: 'Tottenham',
    shortName: 'Tottenham',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t6.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t6.png',
    stadium: 'Tottenham Hotspur Stadium',
    country: 'Anglie',
    founded: 1882,
    points: 46,
    wins: 14,
    draws: 4,
    losses: 6,
    goalsFor: 45,
    goalsAgainst: 30,
    players: [],
  },
  {
    id: 'manchester-united',
    name: 'Manchester United',
    shortName: 'Man Utd',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t1.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t1.png',
    stadium: 'Old Trafford',
    country: 'Anglie',
    founded: 1878,
    points: 40,
    wins: 12,
    draws: 4,
    losses: 8,
    goalsFor: 35,
    goalsAgainst: 32,
    players: [],
  },
  {
    id: 'newcastle',
    name: 'Newcastle United',
    shortName: 'Newcastle',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t4.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t4.png',
    stadium: "St James' Park",
    country: 'Anglie',
    founded: 1892,
    points: 42,
    wins: 12,
    draws: 6,
    losses: 6,
    goalsFor: 40,
    goalsAgainst: 28,
    players: [],
  },
  {
    id: 'aston-villa',
    name: 'Aston Villa',
    shortName: 'Aston Villa',
    logoUrl: 'https://resources.premierleague.com/premierleague/badges/100/t7.png',
    logoSmall: 'https://resources.premierleague.com/premierleague/badges/25/t7.png',
    stadium: 'Villa Park',
    country: 'Anglie',
    founded: 1874,
    points: 48,
    wins: 15,
    draws: 3,
    losses: 6,
    goalsFor: 46,
    goalsAgainst: 32,
    players: [],
  },
]

// Zápasy
export const matches: Match[] = [
  {
    id: 'match-1',
    homeTeamId: 'manchester-city',
    awayTeamId: 'manchester-united',
    homeScore: 3,
    awayScore: 1,
    date: 'Včera',
    played: true,
  },
  {
    id: 'match-2',
    homeTeamId: 'arsenal',
    awayTeamId: 'liverpool',
    homeScore: 2,
    awayScore: 2,
    date: 'Sobota',
    played: true,
  },
  {
    id: 'match-3',
    homeTeamId: 'chelsea',
    awayTeamId: 'arsenal',
    date: 'Sobota 15:00',
    played: false,
  },
  {
    id: 'match-4',
    homeTeamId: 'liverpool',
    awayTeamId: 'manchester-city',
    date: 'Neděle 17:30',
    played: false,
  },
]

// Novinky - Míša může přidávat nové články!
export const news: NewsItem[] = [
  {
    id: 'novinka-1',
    title: 'Manchester City vyhrál další zápas! Haaland dal hattrick',
    content: 'Manchester City pokračuje ve skvělé formě. Erling Haaland vstřelil další tři góly a pomohl svému týmu k důležitému vítězství.',
    tag: 'HLAVNÍ ZPRÁVA',
    emoji: '🏆',
    date: 'Před 2 hodinami',
    featured: true,
  },
  {
    id: 'novinka-2',
    title: 'Arsenal jedná o novém útočníkovi',
    content: 'Arsenal údajně jedná o přestupu nového útočníka. Více informací brzy!',
    tag: 'TRANSFER',
    emoji: '⚡',
    date: 'Před 5 hodinami',
  },
  {
    id: 'novinka-3',
    title: 'Liverpool vs Chelsea - derby kola!',
    content: 'Tento víkend nás čeká velký zápas mezi Liverpoolem a Chelsea.',
    tag: 'ZÁPAS',
    emoji: '🔥',
    date: 'Včera',
  },
]

// Pomocná funkce pro získání týmu podle ID
export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id)
}

// Pomocná funkce pro získání všech týmů seřazených podle bodů
export function getTeamsByPoints(): Team[] {
  return [...teams].sort((a, b) => b.points - a.points)
}
