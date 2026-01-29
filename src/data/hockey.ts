// Data týmů Tipsport extraligy - KOMPLETNÍ
// Všech 14 týmů s hráči

export interface HockeyPlayer {
  id: string
  name: string
  fullName: string
  position: string // Brankář, Obránce, Útočník
  number: number
  nationality: string
  matches: number
  goals: number
  assists: number
  points: number
  penaltyMinutes: number
  plusMinus: number
}

export interface HockeyTeam {
  id: string
  name: string
  shortName: string
  city: string
  logoUrl: string
  arenaName: string
  arenaCapacity: number
  arenaImageUrl: string
  arenaMapLat: number
  arenaMapLng: number
  founded: number
  colors: string
  points: number
  wins: number
  winsOT: number
  lossesOT: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  players: HockeyPlayer[]
}

export interface HockeyMatch {
  id: string
  homeTeamId: string
  awayTeamId: string
  homeScore?: number
  awayScore?: number
  date: string
  played: boolean
  overtime?: boolean
}

// Pomocná funkce pro generování ID
const playerId = (team: string, num: number) => `${team}-${num}`

export const hockeyTeams: HockeyTeam[] = [
  // 1. HC SPARTA PRAHA
  {
    id: 'sparta-praha',
    name: 'HC Sparta Praha',
    shortName: 'Sparta',
    city: 'Praha',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/9.png',
    arenaName: 'O2 Arena',
    arenaCapacity: 17360,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/O2_Arena_Prague.jpg/1280px-O2_Arena_Prague.jpg',
    arenaMapLat: 50.1047,
    arenaMapLng: 14.4923,
    founded: 1903,
    colors: 'Červená, bílá',
    points: 89,
    wins: 28,
    winsOT: 5,
    lossesOT: 3,
    losses: 12,
    goalsFor: 156,
    goalsAgainst: 112,
    players: [
      // Brankáři
      { id: playerId('sparta', 1), name: 'Kořenář', fullName: 'Josef Kořenář', position: 'Brankář', number: 30, nationality: 'CZE', matches: 35, goals: 0, assists: 1, points: 1, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('sparta', 2), name: 'Kovář', fullName: 'Jakub Kovář', position: 'Brankář', number: 31, nationality: 'CZE', matches: 20, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('sparta', 3), name: 'Němeček', fullName: 'Tomáš Němeček', position: 'Obránce', number: 4, nationality: 'CZE', matches: 48, goals: 5, assists: 18, points: 23, penaltyMinutes: 32, plusMinus: 15 },
      { id: playerId('sparta', 4), name: 'Krejčík', fullName: 'Jakub Krejčík', position: 'Obránce', number: 21, nationality: 'CZE', matches: 46, goals: 3, assists: 12, points: 15, penaltyMinutes: 44, plusMinus: 8 },
      { id: playerId('sparta', 5), name: 'Mikliš', fullName: 'David Mikliš', position: 'Obránce', number: 7, nationality: 'CZE', matches: 44, goals: 2, assists: 8, points: 10, penaltyMinutes: 28, plusMinus: 5 },
      { id: playerId('sparta', 6), name: 'Moravčík', fullName: 'Adam Moravčík', position: 'Obránce', number: 15, nationality: 'CZE', matches: 42, goals: 4, assists: 14, points: 18, penaltyMinutes: 20, plusMinus: 12 },
      { id: playerId('sparta', 7), name: 'Jurčina', fullName: 'Martin Jurčina', position: 'Obránce', number: 44, nationality: 'SVK', matches: 40, goals: 1, assists: 6, points: 7, penaltyMinutes: 52, plusMinus: 3 },
      { id: playerId('sparta', 8), name: 'Tomov', fullName: 'David Tomov', position: 'Obránce', number: 5, nationality: 'CZE', matches: 38, goals: 2, assists: 5, points: 7, penaltyMinutes: 18, plusMinus: 2 },
      // Útočníci
      { id: playerId('sparta', 9), name: 'Řepík', fullName: 'Michal Řepík', position: 'Útočník', number: 62, nationality: 'CZE', matches: 48, goals: 22, assists: 35, points: 57, penaltyMinutes: 24, plusMinus: 25 },
      { id: playerId('sparta', 10), name: 'Sobotka', fullName: 'Vladimír Sobotka', position: 'Útočník', number: 17, nationality: 'CZE', matches: 46, goals: 15, assists: 28, points: 43, penaltyMinutes: 18, plusMinus: 18 },
      { id: playerId('sparta', 11), name: 'Chlapík', fullName: 'Filip Chlapík', position: 'Útočník', number: 8, nationality: 'CZE', matches: 48, goals: 18, assists: 32, points: 50, penaltyMinutes: 16, plusMinus: 22 },
      { id: playerId('sparta', 12), name: 'Horák', fullName: 'Roman Horák', position: 'Útočník', number: 10, nationality: 'CZE', matches: 45, goals: 14, assists: 25, points: 39, penaltyMinutes: 22, plusMinus: 15 },
      { id: playerId('sparta', 13), name: 'Forman', fullName: 'Miroslav Forman', position: 'Útočník', number: 52, nationality: 'CZE', matches: 44, goals: 12, assists: 18, points: 30, penaltyMinutes: 14, plusMinus: 10 },
      { id: playerId('sparta', 14), name: 'Šmerha', fullName: 'David Šmerha', position: 'Útočník', number: 19, nationality: 'CZE', matches: 42, goals: 8, assists: 15, points: 23, penaltyMinutes: 28, plusMinus: 6 },
      { id: playerId('sparta', 15), name: 'Vitouch', fullName: 'Tomáš Vitouch', position: 'Útočník', number: 23, nationality: 'CZE', matches: 40, goals: 6, assists: 12, points: 18, penaltyMinutes: 10, plusMinus: 4 },
      { id: playerId('sparta', 16), name: 'Dvořáček', fullName: 'Jan Dvořáček', position: 'Útočník', number: 11, nationality: 'CZE', matches: 38, goals: 5, assists: 8, points: 13, penaltyMinutes: 12, plusMinus: 2 },
      { id: playerId('sparta', 17), name: 'Konečný', fullName: 'Erik Konečný', position: 'Útočník', number: 88, nationality: 'CZE', matches: 35, goals: 4, assists: 10, points: 14, penaltyMinutes: 8, plusMinus: 5 },
      { id: playerId('sparta', 18), name: 'Říčka', fullName: 'Matěj Říčka', position: 'Útočník', number: 9, nationality: 'CZE', matches: 32, goals: 7, assists: 6, points: 13, penaltyMinutes: 6, plusMinus: 3 },
    ],
  },

  // 2. HC OCELÁŘI TŘINEC
  {
    id: 'trinec',
    name: 'HC Oceláři Třinec',
    shortName: 'Třinec',
    city: 'Třinec',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/8.png',
    arenaName: 'WERK Arena',
    arenaCapacity: 5400,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Werk_Arena_2016.jpg/1280px-Werk_Arena_2016.jpg',
    arenaMapLat: 49.6775,
    arenaMapLng: 18.6697,
    founded: 1929,
    colors: 'Červená, černá',
    points: 85,
    wins: 26,
    winsOT: 6,
    lossesOT: 4,
    losses: 12,
    goalsFor: 148,
    goalsAgainst: 108,
    players: [
      // Brankáři
      { id: playerId('trinec', 1), name: 'Kacetl', fullName: 'Ondřej Kacetl', position: 'Brankář', number: 32, nationality: 'CZE', matches: 38, goals: 0, assists: 2, points: 2, penaltyMinutes: 2, plusMinus: 0 },
      { id: playerId('trinec', 2), name: 'Mazanec', fullName: 'Marek Mazanec', position: 'Brankář', number: 1, nationality: 'CZE', matches: 18, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('trinec', 3), name: 'Marinčin', fullName: 'Martin Marinčin', position: 'Obránce', number: 52, nationality: 'SVK', matches: 46, goals: 4, assists: 20, points: 24, penaltyMinutes: 38, plusMinus: 18 },
      { id: playerId('trinec', 4), name: 'Smith', fullName: 'Brendan Smith', position: 'Obránce', number: 2, nationality: 'CAN', matches: 44, goals: 3, assists: 15, points: 18, penaltyMinutes: 42, plusMinus: 12 },
      { id: playerId('trinec', 5), name: 'Kundrátek', fullName: 'Tomáš Kundrátek', position: 'Obránce', number: 84, nationality: 'CZE', matches: 42, goals: 5, assists: 18, points: 23, penaltyMinutes: 30, plusMinus: 16 },
      { id: playerId('trinec', 6), name: 'Doudera', fullName: 'Jakub Doudera', position: 'Obránce', number: 4, nationality: 'CZE', matches: 40, goals: 2, assists: 10, points: 12, penaltyMinutes: 24, plusMinus: 8 },
      { id: playerId('trinec', 7), name: 'Freibergs', fullName: 'Ralfs Freibergs', position: 'Obránce', number: 29, nationality: 'LAT', matches: 38, goals: 1, assists: 8, points: 9, penaltyMinutes: 20, plusMinus: 5 },
      { id: playerId('trinec', 8), name: 'Adámek', fullName: 'Jan Adámek', position: 'Obránce', number: 6, nationality: 'CZE', matches: 35, goals: 0, assists: 5, points: 5, penaltyMinutes: 16, plusMinus: 3 },
      // Útočníci
      { id: playerId('trinec', 9), name: 'Daňo', fullName: 'Marko Daňo', position: 'Útočník', number: 10, nationality: 'SVK', matches: 48, goals: 25, assists: 30, points: 55, penaltyMinutes: 28, plusMinus: 22 },
      { id: playerId('trinec', 10), name: 'Nestrašil', fullName: 'Andrej Nestrašil', position: 'Útočník', number: 15, nationality: 'CZE', matches: 46, goals: 18, assists: 28, points: 46, penaltyMinutes: 20, plusMinus: 18 },
      { id: playerId('trinec', 11), name: 'Vrána', fullName: 'Petr Vrána', position: 'Útočník', number: 17, nationality: 'CZE', matches: 44, goals: 15, assists: 22, points: 37, penaltyMinutes: 16, plusMinus: 14 },
      { id: playerId('trinec', 12), name: 'Růžička', fullName: 'Michael Růžička', position: 'Útočník', number: 9, nationality: 'CZE', matches: 42, goals: 12, assists: 20, points: 32, penaltyMinutes: 14, plusMinus: 10 },
      { id: playerId('trinec', 13), name: 'Chmielewski', fullName: 'Erik Chmielewski', position: 'Útočník', number: 19, nationality: 'SVK', matches: 40, goals: 10, assists: 15, points: 25, penaltyMinutes: 22, plusMinus: 8 },
      { id: playerId('trinec', 14), name: 'Hrňa', fullName: 'Tomáš Hrňa', position: 'Útočník', number: 14, nationality: 'CZE', matches: 38, goals: 8, assists: 12, points: 20, penaltyMinutes: 10, plusMinus: 6 },
      { id: playerId('trinec', 15), name: 'Hrehorčák', fullName: 'Dávid Hrehorčák', position: 'Útočník', number: 21, nationality: 'SVK', matches: 36, goals: 6, assists: 10, points: 16, penaltyMinutes: 8, plusMinus: 4 },
      { id: playerId('trinec', 16), name: 'Roman', fullName: 'Miloš Roman', position: 'Útočník', number: 23, nationality: 'SVK', matches: 34, goals: 5, assists: 8, points: 13, penaltyMinutes: 12, plusMinus: 2 },
      { id: playerId('trinec', 17), name: 'Svačina', fullName: 'Lukáš Svačina', position: 'Útočník', number: 77, nationality: 'CZE', matches: 32, goals: 4, assists: 6, points: 10, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 3. HC MOTOR ČESKÉ BUDĚJOVICE
  {
    id: 'ceske-budejovice',
    name: 'HC Motor České Budějovice',
    shortName: 'Č. Budějovice',
    city: 'České Budějovice',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/12.png',
    arenaName: 'Budvar Aréna',
    arenaCapacity: 6500,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Budvar_arena.jpg/1280px-Budvar_arena.jpg',
    arenaMapLat: 48.9756,
    arenaMapLng: 14.4608,
    founded: 1928,
    colors: 'Modrá, bílá',
    points: 78,
    wins: 24,
    winsOT: 4,
    lossesOT: 5,
    losses: 15,
    goalsFor: 140,
    goalsAgainst: 118,
    players: [
      // Brankáři
      { id: playerId('cb', 1), name: 'Hrachovina', fullName: 'Jan Hrachovina', position: 'Brankář', number: 33, nationality: 'CZE', matches: 36, goals: 0, assists: 1, points: 1, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('cb', 2), name: 'Strmeň', fullName: 'Jiří Strmeň', position: 'Brankář', number: 30, nationality: 'CZE', matches: 18, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('cb', 3), name: 'Šenkeřík', fullName: 'Ondřej Šenkeřík', position: 'Obránce', number: 3, nationality: 'CZE', matches: 45, goals: 6, assists: 22, points: 28, penaltyMinutes: 36, plusMinus: 14 },
      { id: playerId('cb', 4), name: 'Bindulis', fullName: 'Kristians Bindulis', position: 'Obránce', number: 5, nationality: 'LAT', matches: 44, goals: 4, assists: 16, points: 20, penaltyMinutes: 28, plusMinus: 10 },
      { id: playerId('cb', 5), name: 'Pýcha', fullName: 'Lukáš Pýcha', position: 'Obránce', number: 6, nationality: 'CZE', matches: 42, goals: 3, assists: 12, points: 15, penaltyMinutes: 22, plusMinus: 8 },
      { id: playerId('cb', 6), name: 'Štencel', fullName: 'Ondřej Štencel', position: 'Obránce', number: 44, nationality: 'CZE', matches: 40, goals: 2, assists: 8, points: 10, penaltyMinutes: 34, plusMinus: 5 },
      { id: playerId('cb', 7), name: 'Bučko', fullName: 'Šimon Bučko', position: 'Obránce', number: 4, nationality: 'CZE', matches: 38, goals: 1, assists: 6, points: 7, penaltyMinutes: 18, plusMinus: 3 },
      // Útočníci
      { id: playerId('cb', 8), name: 'Gulaš', fullName: 'Milan Gulaš', position: 'Útočník', number: 23, nationality: 'CZE', matches: 46, goals: 28, assists: 38, points: 66, penaltyMinutes: 32, plusMinus: 24 },
      { id: playerId('cb', 9), name: 'Pech', fullName: 'Lukáš Pech', position: 'Útočník', number: 9, nationality: 'CZE', matches: 45, goals: 18, assists: 26, points: 44, penaltyMinutes: 20, plusMinus: 16 },
      { id: playerId('cb', 10), name: 'Hanzl', fullName: 'Jiří Hanzl', position: 'Útočník', number: 11, nationality: 'CZE', matches: 44, goals: 14, assists: 22, points: 36, penaltyMinutes: 18, plusMinus: 12 },
      { id: playerId('cb', 11), name: 'Holec', fullName: 'Adam Holec', position: 'Útočník', number: 19, nationality: 'CZE', matches: 42, goals: 10, assists: 18, points: 28, penaltyMinutes: 14, plusMinus: 8 },
      { id: playerId('cb', 12), name: 'Abdul', fullName: 'Dominik Abdul', position: 'Útočník', number: 77, nationality: 'CZE', matches: 40, goals: 8, assists: 14, points: 22, penaltyMinutes: 10, plusMinus: 6 },
      { id: playerId('cb', 13), name: 'Vondrka', fullName: 'Michal Vondrka', position: 'Útočník', number: 82, nationality: 'CZE', matches: 38, goals: 6, assists: 12, points: 18, penaltyMinutes: 24, plusMinus: 4 },
      { id: playerId('cb', 14), name: 'Chlubna', fullName: 'Jiří Chlubna', position: 'Útočník', number: 21, nationality: 'CZE', matches: 36, goals: 5, assists: 8, points: 13, penaltyMinutes: 8, plusMinus: 2 },
      { id: playerId('cb', 15), name: 'Přikryl', fullName: 'Petr Přikryl', position: 'Útočník', number: 14, nationality: 'CZE', matches: 34, goals: 4, assists: 6, points: 10, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 4. HC VERVA LITVÍNOV
  {
    id: 'litvinov',
    name: 'HC Verva Litvínov',
    shortName: 'Litvínov',
    city: 'Litvínov',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/3.png',
    arenaName: 'Zimní stadion Ivana Hlinky',
    arenaCapacity: 6200,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ZS_Ivan_Hlinka_Litv%C3%ADnov.jpg/1280px-ZS_Ivan_Hlinka_Litv%C3%ADnov.jpg',
    arenaMapLat: 50.5998,
    arenaMapLng: 13.6106,
    founded: 1945,
    colors: 'Žlutá, černá',
    points: 74,
    wins: 22,
    winsOT: 5,
    lossesOT: 6,
    losses: 15,
    goalsFor: 138,
    goalsAgainst: 122,
    players: [
      // Brankáři
      { id: playerId('ltv', 1), name: 'Godla', fullName: 'Šimon Godla', position: 'Brankář', number: 30, nationality: 'CZE', matches: 34, goals: 0, assists: 1, points: 1, penaltyMinutes: 2, plusMinus: 0 },
      { id: playerId('ltv', 2), name: 'Zajíček', fullName: 'Matěj Zajíček', position: 'Brankář', number: 1, nationality: 'CZE', matches: 20, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('ltv', 3), name: 'Irving', fullName: 'Duane Irving', position: 'Obránce', number: 23, nationality: 'USA', matches: 44, goals: 8, assists: 24, points: 32, penaltyMinutes: 28, plusMinus: 16 },
      { id: playerId('ltv', 4), name: 'Baránek', fullName: 'Tomáš Baránek', position: 'Obránce', number: 4, nationality: 'CZE', matches: 42, goals: 3, assists: 12, points: 15, penaltyMinutes: 32, plusMinus: 8 },
      { id: playerId('ltv', 5), name: 'Štich', fullName: 'David Štich', position: 'Obránce', number: 7, nationality: 'CZE', matches: 40, goals: 2, assists: 10, points: 12, penaltyMinutes: 24, plusMinus: 5 },
      { id: playerId('ltv', 6), name: 'Demel', fullName: 'Štěpán Demel', position: 'Obránce', number: 6, nationality: 'CZE', matches: 38, goals: 1, assists: 8, points: 9, penaltyMinutes: 20, plusMinus: 3 },
      { id: playerId('ltv', 7), name: 'Zile', fullName: 'Ralfs Zile', position: 'Obránce', number: 44, nationality: 'LAT', matches: 36, goals: 2, assists: 6, points: 8, penaltyMinutes: 26, plusMinus: 2 },
      // Útočníci
      { id: playerId('ltv', 8), name: 'Zdráhal', fullName: 'David Zdráhal', position: 'Útočník', number: 19, nationality: 'CZE', matches: 46, goals: 24, assists: 28, points: 52, penaltyMinutes: 22, plusMinus: 18 },
      { id: playerId('ltv', 9), name: 'Sukeľ', fullName: 'Patrik Sukeľ', position: 'Útočník', number: 11, nationality: 'SVK', matches: 44, goals: 18, assists: 24, points: 42, penaltyMinutes: 18, plusMinus: 14 },
      { id: playerId('ltv', 10), name: 'Kudrna', fullName: 'Jiří Kudrna', position: 'Útočník', number: 17, nationality: 'CZE', matches: 42, goals: 14, assists: 20, points: 34, penaltyMinutes: 16, plusMinus: 10 },
      { id: playerId('ltv', 11), name: 'Hlava', fullName: 'Jakub Hlava', position: 'Útočník', number: 9, nationality: 'CZE', matches: 40, goals: 10, assists: 16, points: 26, penaltyMinutes: 12, plusMinus: 6 },
      { id: playerId('ltv', 12), name: 'Estephan', fullName: 'Adam Estephan', position: 'Útočník', number: 91, nationality: 'CAN', matches: 38, goals: 12, assists: 14, points: 26, penaltyMinutes: 10, plusMinus: 8 },
      { id: playerId('ltv', 13), name: 'Jarůšek', fullName: 'Tomáš Jarůšek', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 6, assists: 10, points: 16, penaltyMinutes: 14, plusMinus: 4 },
      { id: playerId('ltv', 14), name: 'Helt', fullName: 'Jan Helt', position: 'Útočník', number: 21, nationality: 'CZE', matches: 34, goals: 4, assists: 8, points: 12, penaltyMinutes: 8, plusMinus: 2 },
      { id: playerId('ltv', 15), name: 'Jurčík', fullName: 'Radek Jurčík', position: 'Útočník', number: 77, nationality: 'CZE', matches: 32, goals: 3, assists: 6, points: 9, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 5. HC DYNAMO PARDUBICE
  {
    id: 'pardubice',
    name: 'HC Dynamo Pardubice',
    shortName: 'Pardubice',
    city: 'Pardubice',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/1.png',
    arenaName: 'Enteria Arena',
    arenaCapacity: 10194,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Tipsport_Arena_Pardubice.jpg/1280px-Tipsport_Arena_Pardubice.jpg',
    arenaMapLat: 50.0297,
    arenaMapLng: 15.7703,
    founded: 1923,
    colors: 'Červená, bílá',
    points: 72,
    wins: 22,
    winsOT: 4,
    lossesOT: 5,
    losses: 17,
    goalsFor: 135,
    goalsAgainst: 125,
    players: [
      // Brankáři
      { id: playerId('pce', 1), name: 'Will', fullName: 'Roman Will', position: 'Brankář', number: 35, nationality: 'CZE', matches: 32, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      { id: playerId('pce', 2), name: 'Klouček', fullName: 'Dominik Klouček', position: 'Brankář', number: 31, nationality: 'CZE', matches: 22, goals: 0, assists: 1, points: 1, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('pce', 3), name: 'Nakládal', fullName: 'Jakub Nakládal', position: 'Obránce', number: 87, nationality: 'CZE', matches: 44, goals: 5, assists: 20, points: 25, penaltyMinutes: 40, plusMinus: 12 },
      { id: playerId('pce', 4), name: 'Vála', fullName: 'Ondřej Vála', position: 'Obránce', number: 4, nationality: 'CZE', matches: 42, goals: 4, assists: 14, points: 18, penaltyMinutes: 28, plusMinus: 8 },
      { id: playerId('pce', 5), name: 'Robertson', fullName: 'Dennis Robertson', position: 'Obránce', number: 28, nationality: 'USA', matches: 40, goals: 3, assists: 12, points: 15, penaltyMinutes: 22, plusMinus: 6 },
      { id: playerId('pce', 6), name: 'Kolář', fullName: 'Jan Kolář', position: 'Obránce', number: 7, nationality: 'CZE', matches: 38, goals: 2, assists: 10, points: 12, penaltyMinutes: 34, plusMinus: 4 },
      { id: playerId('pce', 7), name: 'Hrádek', fullName: 'Petr Hrádek', position: 'Obránce', number: 6, nationality: 'CZE', matches: 36, goals: 1, assists: 6, points: 7, penaltyMinutes: 18, plusMinus: 2 },
      // Útočníci
      { id: playerId('pce', 8), name: 'Camara', fullName: 'Anthony Camara', position: 'Útočník', number: 21, nationality: 'CAN', matches: 46, goals: 22, assists: 26, points: 48, penaltyMinutes: 26, plusMinus: 16 },
      { id: playerId('pce', 9), name: 'Paulovič', fullName: 'Tomáš Paulovič', position: 'Útočník', number: 19, nationality: 'SVK', matches: 44, goals: 16, assists: 22, points: 38, penaltyMinutes: 18, plusMinus: 12 },
      { id: playerId('pce', 10), name: 'Kousal', fullName: 'Radoslav Kousal', position: 'Útočník', number: 9, nationality: 'CZE', matches: 42, goals: 14, assists: 18, points: 32, penaltyMinutes: 14, plusMinus: 8 },
      { id: playerId('pce', 11), name: 'Říčka', fullName: 'Martin Říčka', position: 'Útočník', number: 10, nationality: 'CZE', matches: 40, goals: 10, assists: 16, points: 26, penaltyMinutes: 12, plusMinus: 6 },
      { id: playerId('pce', 12), name: 'Mandát', fullName: 'Jan Mandát', position: 'Útočník', number: 11, nationality: 'CZE', matches: 38, goals: 8, assists: 12, points: 20, penaltyMinutes: 20, plusMinus: 4 },
      { id: playerId('pce', 13), name: 'Blümel', fullName: 'Matěj Blümel', position: 'Útočník', number: 96, nationality: 'CZE', matches: 36, goals: 6, assists: 10, points: 16, penaltyMinutes: 8, plusMinus: 2 },
      { id: playerId('pce', 14), name: 'Machala', fullName: 'Ondřej Machala', position: 'Útočník', number: 14, nationality: 'CZE', matches: 34, goals: 4, assists: 8, points: 12, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 6. HC KOMETA BRNO
  {
    id: 'brno',
    name: 'HC Kometa Brno',
    shortName: 'Brno',
    city: 'Brno',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/2.png',
    arenaName: 'DRFG Arena',
    arenaCapacity: 7700,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DRFG_Arena_Brno.jpg/1280px-DRFG_Arena_Brno.jpg',
    arenaMapLat: 49.2094,
    arenaMapLng: 16.6083,
    founded: 1953,
    colors: 'Modrá, bílá',
    points: 70,
    wins: 21,
    winsOT: 4,
    lossesOT: 6,
    losses: 17,
    goalsFor: 130,
    goalsAgainst: 122,
    players: [
      // Brankáři
      { id: playerId('brn', 1), name: 'Postava', fullName: 'Marek Postava', position: 'Brankář', number: 31, nationality: 'CZE', matches: 35, goals: 0, assists: 1, points: 1, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('brn', 2), name: 'Čiliak', fullName: 'Matúš Čiliak', position: 'Brankář', number: 33, nationality: 'SVK', matches: 19, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('brn', 3), name: 'Holland', fullName: 'Peter Holland', position: 'Obránce', number: 13, nationality: 'CAN', matches: 44, goals: 6, assists: 22, points: 28, penaltyMinutes: 30, plusMinus: 14 },
      { id: playerId('brn', 4), name: 'Ščotka', fullName: 'Jan Ščotka', position: 'Obránce', number: 7, nationality: 'CZE', matches: 42, goals: 3, assists: 14, points: 17, penaltyMinutes: 26, plusMinus: 8 },
      { id: playerId('brn', 5), name: 'Kučeřík', fullName: 'Stanislav Kučeřík', position: 'Obránce', number: 4, nationality: 'CZE', matches: 40, goals: 2, assists: 10, points: 12, penaltyMinutes: 22, plusMinus: 5 },
      { id: playerId('brn', 6), name: 'Gulaši', fullName: 'Ondřej Gulaši', position: 'Obránce', number: 44, nationality: 'CZE', matches: 38, goals: 1, assists: 8, points: 9, penaltyMinutes: 18, plusMinus: 3 },
      { id: playerId('brn', 7), name: 'Bartejs', fullName: 'Jakub Bartejs', position: 'Obránce', number: 6, nationality: 'CZE', matches: 36, goals: 1, assists: 5, points: 6, penaltyMinutes: 14, plusMinus: 2 },
      // Útočníci
      { id: playerId('brn', 8), name: 'Mueller', fullName: 'Peter Mueller', position: 'Útočník', number: 88, nationality: 'USA', matches: 46, goals: 24, assists: 32, points: 56, penaltyMinutes: 28, plusMinus: 18 },
      { id: playerId('brn', 9), name: 'Zaťovič', fullName: 'Martin Zaťovič', position: 'Útočník', number: 18, nationality: 'CZE', matches: 44, goals: 16, assists: 22, points: 38, penaltyMinutes: 20, plusMinus: 12 },
      { id: playerId('brn', 10), name: 'Kollár', fullName: 'Samuel Kollár', position: 'Útočník', number: 10, nationality: 'SVK', matches: 42, goals: 12, assists: 18, points: 30, penaltyMinutes: 14, plusMinus: 8 },
      { id: playerId('brn', 11), name: 'Šik', fullName: 'Lukáš Šik', position: 'Útočník', number: 91, nationality: 'CZE', matches: 40, goals: 10, assists: 14, points: 24, penaltyMinutes: 12, plusMinus: 6 },
      { id: playerId('brn', 12), name: 'Bondra', fullName: 'Radovan Bondra', position: 'Útočník', number: 19, nationality: 'SVK', matches: 38, goals: 8, assists: 12, points: 20, penaltyMinutes: 16, plusMinus: 4 },
      { id: playerId('brn', 13), name: 'Vincour', fullName: 'Tomáš Vincour', position: 'Útočník', number: 9, nationality: 'CZE', matches: 36, goals: 6, assists: 10, points: 16, penaltyMinutes: 8, plusMinus: 2 },
      { id: playerId('brn', 14), name: 'Kratochvíl', fullName: 'Jan Kratochvíl', position: 'Útočník', number: 14, nationality: 'CZE', matches: 34, goals: 4, assists: 8, points: 12, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 7. BÍLÍ TYGŘI LIBEREC
  {
    id: 'liberec',
    name: 'Bílí Tygři Liberec',
    shortName: 'Liberec',
    city: 'Liberec',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/4.png',
    arenaName: 'Home Credit Arena',
    arenaCapacity: 7500,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tipsport_Arena_Liberec.jpg/1280px-Tipsport_Arena_Liberec.jpg',
    arenaMapLat: 50.7628,
    arenaMapLng: 15.0547,
    founded: 1956,
    colors: 'Bílá, modrá',
    points: 68,
    wins: 20,
    winsOT: 5,
    lossesOT: 5,
    losses: 18,
    goalsFor: 128,
    goalsAgainst: 120,
    players: [
      // Brankáři
      { id: playerId('lib', 1), name: 'Kváča', fullName: 'Petr Kváča', position: 'Brankář', number: 23, nationality: 'CZE', matches: 38, goals: 0, assists: 2, points: 2, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('lib', 2), name: 'Neužil', fullName: 'Marek Neužil', position: 'Brankář', number: 30, nationality: 'CZE', matches: 16, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('lib', 3), name: 'Vitásek', fullName: 'Ladislav Vitásek', position: 'Obránce', number: 7, nationality: 'CZE', matches: 44, goals: 5, assists: 18, points: 23, penaltyMinutes: 32, plusMinus: 10 },
      { id: playerId('lib', 4), name: 'Rosandič', fullName: 'Tomáš Rosandič', position: 'Obránce', number: 3, nationality: 'SVK', matches: 42, goals: 4, assists: 14, points: 18, penaltyMinutes: 28, plusMinus: 8 },
      { id: playerId('lib', 5), name: 'Aubrecht', fullName: 'Michal Aubrecht', position: 'Obránce', number: 4, nationality: 'CZE', matches: 40, goals: 2, assists: 10, points: 12, penaltyMinutes: 22, plusMinus: 5 },
      { id: playerId('lib', 6), name: 'Derner', fullName: 'Tomáš Derner', position: 'Obránce', number: 6, nationality: 'CZE', matches: 38, goals: 1, assists: 8, points: 9, penaltyMinutes: 18, plusMinus: 3 },
      { id: playerId('lib', 7), name: 'Ivan', fullName: 'Radek Ivan', position: 'Obránce', number: 44, nationality: 'CZE', matches: 36, goals: 1, assists: 5, points: 6, penaltyMinutes: 16, plusMinus: 2 },
      // Útočníci
      { id: playerId('lib', 8), name: 'Bulíř', fullName: 'Tomáš Bulíř', position: 'Útočník', number: 10, nationality: 'CZE', matches: 46, goals: 20, assists: 28, points: 48, penaltyMinutes: 24, plusMinus: 16 },
      { id: playerId('lib', 9), name: 'Birner', fullName: 'Michal Birner', position: 'Útočník', number: 19, nationality: 'CZE', matches: 44, goals: 15, assists: 22, points: 37, penaltyMinutes: 18, plusMinus: 12 },
      { id: playerId('lib', 10), name: 'Najman', fullName: 'Petr Najman', position: 'Útočník', number: 17, nationality: 'CZE', matches: 42, goals: 12, assists: 18, points: 30, penaltyMinutes: 14, plusMinus: 8 },
      { id: playerId('lib', 11), name: 'Frolík', fullName: 'Michael Frolík', position: 'Útočník', number: 67, nationality: 'CZE', matches: 40, goals: 10, assists: 16, points: 26, penaltyMinutes: 12, plusMinus: 6 },
      { id: playerId('lib', 12), name: 'Gríger', fullName: 'Tomáš Gríger', position: 'Útočník', number: 14, nationality: 'SVK', matches: 38, goals: 8, assists: 12, points: 20, penaltyMinutes: 10, plusMinus: 4 },
      { id: playerId('lib', 13), name: 'Vlach', fullName: 'Jaroslav Vlach', position: 'Útočník', number: 21, nationality: 'CZE', matches: 36, goals: 6, assists: 10, points: 16, penaltyMinutes: 8, plusMinus: 2 },
      { id: playerId('lib', 14), name: 'Špaček', fullName: 'Adam Špaček', position: 'Útočník', number: 9, nationality: 'CZE', matches: 34, goals: 4, assists: 8, points: 12, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 8. HC ŠKODA PLZEŇ
  {
    id: 'plzen',
    name: 'HC Škoda Plzeň',
    shortName: 'Plzeň',
    city: 'Plzeň',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/5.png',
    arenaName: 'Home Monitoring Arena',
    arenaCapacity: 8232,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Home_Monitoring_Arena_Plze%C5%88.jpg/1280px-Home_Monitoring_Arena_Plze%C5%88.jpg',
    arenaMapLat: 49.7478,
    arenaMapLng: 13.3936,
    founded: 1929,
    colors: 'Modrá, červená',
    points: 66,
    wins: 19,
    winsOT: 6,
    lossesOT: 4,
    losses: 19,
    goalsFor: 125,
    goalsAgainst: 118,
    players: [
      // Brankáři
      { id: playerId('plz', 1), name: 'Pavlát', fullName: 'Dominik Pavlát', position: 'Brankář', number: 30, nationality: 'CZE', matches: 36, goals: 0, assists: 1, points: 1, penaltyMinutes: 2, plusMinus: 0 },
      { id: playerId('plz', 2), name: 'Malík', fullName: 'Nick Malík', position: 'Brankář', number: 1, nationality: 'CZE', matches: 18, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('plz', 3), name: 'Budík', fullName: 'Vojtěch Budík', position: 'Obránce', number: 21, nationality: 'CZE', matches: 44, goals: 6, assists: 20, points: 26, penaltyMinutes: 34, plusMinus: 12 },
      { id: playerId('plz', 4), name: 'Kremláček', fullName: 'Jan Kremláček', position: 'Obránce', number: 4, nationality: 'CZE', matches: 42, goals: 3, assists: 12, points: 15, penaltyMinutes: 26, plusMinus: 6 },
      { id: playerId('plz', 5), name: 'Jiříček', fullName: 'David Jiříček', position: 'Obránce', number: 7, nationality: 'CZE', matches: 40, goals: 4, assists: 10, points: 14, penaltyMinutes: 20, plusMinus: 5 },
      { id: playerId('plz', 6), name: 'Čerešňák', fullName: 'Peter Čerešňák', position: 'Obránce', number: 44, nationality: 'SVK', matches: 38, goals: 2, assists: 8, points: 10, penaltyMinutes: 24, plusMinus: 3 },
      { id: playerId('plz', 7), name: 'Graňák', fullName: 'Dominik Graňák', position: 'Obránce', number: 6, nationality: 'SVK', matches: 36, goals: 1, assists: 6, points: 7, penaltyMinutes: 18, plusMinus: 2 },
      // Útočníci
      { id: playerId('plz', 8), name: 'Mertl', fullName: 'Tomáš Mertl', position: 'Útočník', number: 19, nationality: 'CZE', matches: 46, goals: 18, assists: 26, points: 44, penaltyMinutes: 22, plusMinus: 14 },
      { id: playerId('plz', 9), name: 'Pour', fullName: 'Jan Pour', position: 'Útočník', number: 17, nationality: 'CZE', matches: 44, goals: 14, assists: 20, points: 34, penaltyMinutes: 16, plusMinus: 10 },
      { id: playerId('plz', 10), name: 'Schleiss', fullName: 'Jakub Schleiss', position: 'Útočník', number: 11, nationality: 'CZE', matches: 42, goals: 12, assists: 18, points: 30, penaltyMinutes: 14, plusMinus: 8 },
      { id: playerId('plz', 11), name: 'Blomstrand', fullName: 'Ludwig Blomstrand', position: 'Útočník', number: 91, nationality: 'SWE', matches: 40, goals: 10, assists: 14, points: 24, penaltyMinutes: 10, plusMinus: 6 },
      { id: playerId('plz', 12), name: 'Kodýtek', fullName: 'Jakub Kodýtek', position: 'Útočník', number: 9, nationality: 'CZE', matches: 38, goals: 8, assists: 12, points: 20, penaltyMinutes: 18, plusMinus: 4 },
      { id: playerId('plz', 13), name: 'Malát', fullName: 'Martin Malát', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 6, assists: 10, points: 16, penaltyMinutes: 8, plusMinus: 2 },
      { id: playerId('plz', 14), name: 'Stránský', fullName: 'Jakub Stránský', position: 'Útočník', number: 77, nationality: 'CZE', matches: 34, goals: 4, assists: 8, points: 12, penaltyMinutes: 6, plusMinus: 1 },
    ],
  },

  // 9. HC VÍTKOVICE RIDERA
  {
    id: 'vitkovice',
    name: 'HC Vítkovice Ridera',
    shortName: 'Vítkovice',
    city: 'Ostrava',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/7.png',
    arenaName: 'Ostravar Aréna',
    arenaCapacity: 10104,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ostravar_Arena.jpg/1280px-Ostravar_Arena.jpg',
    arenaMapLat: 49.8348,
    arenaMapLng: 18.2831,
    founded: 1928,
    colors: 'Modrá, bílá',
    points: 62,
    wins: 18,
    winsOT: 4,
    lossesOT: 6,
    losses: 20,
    goalsFor: 120,
    goalsAgainst: 125,
    players: [
      // Brankáři
      { id: playerId('vtk', 1), name: 'Dolejš', fullName: 'Aleš Dolejš', position: 'Brankář', number: 35, nationality: 'CZE', matches: 34, goals: 0, assists: 0, points: 0, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('vtk', 2), name: 'Stezka', fullName: 'Lukáš Stezka', position: 'Brankář', number: 30, nationality: 'CZE', matches: 20, goals: 0, assists: 1, points: 1, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('vtk', 3), name: 'Koch', fullName: 'Jakub Koch', position: 'Obránce', number: 4, nationality: 'CZE', matches: 44, goals: 5, assists: 16, points: 21, penaltyMinutes: 30, plusMinus: 8 },
      { id: playerId('vtk', 4), name: 'Gewiese', fullName: 'Philip Gewiese', position: 'Obránce', number: 3, nationality: 'GER', matches: 42, goals: 3, assists: 12, points: 15, penaltyMinutes: 26, plusMinus: 5 },
      { id: playerId('vtk', 5), name: 'Plášil', fullName: 'Ondřej Plášil', position: 'Obránce', number: 7, nationality: 'CZE', matches: 40, goals: 2, assists: 10, points: 12, penaltyMinutes: 22, plusMinus: 3 },
      { id: playerId('vtk', 6), name: 'Polák', fullName: 'Roman Polák', position: 'Obránce', number: 46, nationality: 'CZE', matches: 38, goals: 1, assists: 8, points: 9, penaltyMinutes: 52, plusMinus: 2 },
      { id: playerId('vtk', 7), name: 'Mrázek', fullName: 'Jan Mrázek', position: 'Obránce', number: 6, nationality: 'CZE', matches: 36, goals: 1, assists: 5, points: 6, penaltyMinutes: 16, plusMinus: 1 },
      // Útočníci
      { id: playerId('vtk', 8), name: 'Lakatoš', fullName: 'Tomáš Lakatoš', position: 'Útočník', number: 91, nationality: 'CZE', matches: 46, goals: 20, assists: 24, points: 44, penaltyMinutes: 26, plusMinus: 12 },
      { id: playerId('vtk', 9), name: 'Kalus', fullName: 'Petr Kalus', position: 'Útočník', number: 10, nationality: 'CZE', matches: 44, goals: 14, assists: 20, points: 34, penaltyMinutes: 18, plusMinus: 8 },
      { id: playerId('vtk', 10), name: 'Fridrich', fullName: 'Lukáš Fridrich', position: 'Útočník', number: 17, nationality: 'CZE', matches: 42, goals: 10, assists: 16, points: 26, penaltyMinutes: 14, plusMinus: 5 },
      { id: playerId('vtk', 11), name: 'Hruška', fullName: 'Jan Hruška', position: 'Útočník', number: 9, nationality: 'CZE', matches: 40, goals: 8, assists: 14, points: 22, penaltyMinutes: 12, plusMinus: 3 },
      { id: playerId('vtk', 12), name: 'Werbik', fullName: 'Martin Werbik', position: 'Útočník', number: 19, nationality: 'CZE', matches: 38, goals: 6, assists: 10, points: 16, penaltyMinutes: 10, plusMinus: 2 },
      { id: playerId('vtk', 13), name: 'Bambula', fullName: 'Vladimír Bambula', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 4, assists: 8, points: 12, penaltyMinutes: 8, plusMinus: 1 },
      { id: playerId('vtk', 14), name: 'Ďatko', fullName: 'Adam Ďatko', position: 'Útočník', number: 21, nationality: 'CZE', matches: 34, goals: 3, assists: 6, points: 9, penaltyMinutes: 6, plusMinus: 0 },
    ],
  },

  // 10. MOUNTFIELD HK
  {
    id: 'hradec-kralove',
    name: 'Mountfield HK',
    shortName: 'Hradec Králové',
    city: 'Hradec Králové',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/10.png',
    arenaName: 'ČPP Aréna',
    arenaCapacity: 7500,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/CPP_Arena_Hradec_Kralove.jpg/1280px-CPP_Arena_Hradec_Kralove.jpg',
    arenaMapLat: 50.2031,
    arenaMapLng: 15.8178,
    founded: 1925,
    colors: 'Červená, černá',
    points: 60,
    wins: 17,
    winsOT: 5,
    lossesOT: 5,
    losses: 21,
    goalsFor: 118,
    goalsAgainst: 122,
    players: [
      // Brankáři
      { id: playerId('hk', 1), name: 'Škorvánek', fullName: 'Štěpán Škorvánek', position: 'Brankář', number: 1, nationality: 'CZE', matches: 36, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      { id: playerId('hk', 2), name: 'Růžička', fullName: 'Adam Růžička', position: 'Brankář', number: 30, nationality: 'CZE', matches: 18, goals: 0, assists: 1, points: 1, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('hk', 3), name: 'Nedomlel', fullName: 'Lukáš Nedomlel', position: 'Obránce', number: 7, nationality: 'CZE', matches: 44, goals: 4, assists: 18, points: 22, penaltyMinutes: 28, plusMinus: 8 },
      { id: playerId('hk', 4), name: 'Gaspar', fullName: 'Filip Gaspar', position: 'Obránce', number: 4, nationality: 'CZE', matches: 42, goals: 3, assists: 12, points: 15, penaltyMinutes: 24, plusMinus: 5 },
      { id: playerId('hk', 5), name: 'Blain', fullName: 'Jeremie Blain', position: 'Obránce', number: 21, nationality: 'CAN', matches: 40, goals: 2, assists: 10, points: 12, penaltyMinutes: 20, plusMinus: 3 },
      { id: playerId('hk', 6), name: 'Pilař', fullName: 'Jan Pilař', position: 'Obránce', number: 6, nationality: 'CZE', matches: 38, goals: 1, assists: 8, points: 9, penaltyMinutes: 18, plusMinus: 2 },
      { id: playerId('hk', 7), name: 'Čáp', fullName: 'Adam Čáp', position: 'Obránce', number: 44, nationality: 'CZE', matches: 36, goals: 1, assists: 5, points: 6, penaltyMinutes: 14, plusMinus: 1 },
      // Útočníci
      { id: playerId('hk', 8), name: 'Kelly Klíma', fullName: 'Kelly Klíma', position: 'Útočník', number: 17, nationality: 'USA', matches: 46, goals: 18, assists: 24, points: 42, penaltyMinutes: 22, plusMinus: 10 },
      { id: playerId('hk', 9), name: 'Perret', fullName: 'Jordan Perret', position: 'Útočník', number: 10, nationality: 'SUI', matches: 44, goals: 14, assists: 20, points: 34, penaltyMinutes: 18, plusMinus: 8 },
      { id: playerId('hk', 10), name: 'Jergl', fullName: 'Jakub Jergl', position: 'Útočník', number: 19, nationality: 'CZE', matches: 42, goals: 10, assists: 16, points: 26, penaltyMinutes: 14, plusMinus: 5 },
      { id: playerId('hk', 11), name: 'Lev', fullName: 'Radek Lev', position: 'Útočník', number: 9, nationality: 'CZE', matches: 40, goals: 8, assists: 12, points: 20, penaltyMinutes: 12, plusMinus: 3 },
      { id: playerId('hk', 12), name: 'Orsava', fullName: 'Jakub Orsava', position: 'Útočník', number: 11, nationality: 'CZE', matches: 38, goals: 6, assists: 10, points: 16, penaltyMinutes: 10, plusMinus: 2 },
      { id: playerId('hk', 13), name: 'Pilný', fullName: 'Jakub Pilný', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 4, assists: 8, points: 12, penaltyMinutes: 8, plusMinus: 1 },
      { id: playerId('hk', 14), name: 'Štohanzl', fullName: 'Radek Štohanzl', position: 'Útočník', number: 77, nationality: 'CZE', matches: 34, goals: 3, assists: 6, points: 9, penaltyMinutes: 6, plusMinus: 0 },
    ],
  },

  // 11. HC OLOMOUC
  {
    id: 'olomouc',
    name: 'HC Olomouc',
    shortName: 'Olomouc',
    city: 'Olomouc',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/11.png',
    arenaName: 'Zimní stadion Olomouc',
    arenaCapacity: 5500,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Zimni_stadion_Olomouc.jpg/1280px-Zimni_stadion_Olomouc.jpg',
    arenaMapLat: 49.5831,
    arenaMapLng: 17.2575,
    founded: 1994,
    colors: 'Červená, modrá',
    points: 56,
    wins: 16,
    winsOT: 4,
    lossesOT: 6,
    losses: 22,
    goalsFor: 112,
    goalsAgainst: 128,
    players: [
      // Brankáři
      { id: playerId('olm', 1), name: 'Konrád', fullName: 'Jan Konrád', position: 'Brankář', number: 31, nationality: 'CZE', matches: 35, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      { id: playerId('olm', 2), name: 'Lukáš', fullName: 'Tomáš Lukáš', position: 'Brankář', number: 30, nationality: 'CZE', matches: 19, goals: 0, assists: 1, points: 1, penaltyMinutes: 0, plusMinus: 0 },
      // Obránci
      { id: playerId('olm', 3), name: 'Švrček', fullName: 'Jan Švrček', position: 'Obránce', number: 7, nationality: 'CZE', matches: 44, goals: 4, assists: 14, points: 18, penaltyMinutes: 28, plusMinus: 5 },
      { id: playerId('olm', 4), name: 'Ondrušek', fullName: 'Jiří Ondrušek', position: 'Obránce', number: 23, nationality: 'CZE', matches: 42, goals: 2, assists: 10, points: 12, penaltyMinutes: 32, plusMinus: 3 },
      { id: playerId('olm', 5), name: 'Rašner', fullName: 'Tomáš Rašner', position: 'Obránce', number: 4, nationality: 'CZE', matches: 40, goals: 2, assists: 8, points: 10, penaltyMinutes: 20, plusMinus: 2 },
      { id: playerId('olm', 6), name: 'Mareš', fullName: 'Jan Mareš', position: 'Obránce', number: 6, nationality: 'CZE', matches: 38, goals: 1, assists: 6, points: 7, penaltyMinutes: 18, plusMinus: 1 },
      { id: playerId('olm', 7), name: 'Škůrek', fullName: 'Matěj Škůrek', position: 'Obránce', number: 44, nationality: 'CZE', matches: 36, goals: 1, assists: 4, points: 5, penaltyMinutes: 14, plusMinus: 0 },
      // Útočníci
      { id: playerId('olm', 8), name: 'Kucsera', fullName: 'Šimon Kucsera', position: 'Útočník', number: 9, nationality: 'SVK', matches: 46, goals: 16, assists: 22, points: 38, penaltyMinutes: 20, plusMinus: 6 },
      { id: playerId('olm', 9), name: 'Knotek', fullName: 'Jakub Knotek', position: 'Útočník', number: 17, nationality: 'CZE', matches: 44, goals: 12, assists: 18, points: 30, penaltyMinutes: 16, plusMinus: 4 },
      { id: playerId('olm', 10), name: 'Nahodil', fullName: 'Jan Nahodil', position: 'Útočník', number: 10, nationality: 'CZE', matches: 42, goals: 10, assists: 14, points: 24, penaltyMinutes: 14, plusMinus: 3 },
      { id: playerId('olm', 11), name: 'Bambula', fullName: 'Jiří Bambula', position: 'Útočník', number: 19, nationality: 'CZE', matches: 40, goals: 8, assists: 12, points: 20, penaltyMinutes: 10, plusMinus: 2 },
      { id: playerId('olm', 12), name: 'Klimek', fullName: 'David Klimek', position: 'Útočník', number: 11, nationality: 'CZE', matches: 38, goals: 6, assists: 10, points: 16, penaltyMinutes: 22, plusMinus: 1 },
      { id: playerId('olm', 13), name: 'Kolouch', fullName: 'Lukáš Kolouch', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 4, assists: 8, points: 12, penaltyMinutes: 8, plusMinus: 0 },
      { id: playerId('olm', 14), name: 'Zadražil', fullName: 'Adam Zadražil', position: 'Útočník', number: 77, nationality: 'CZE', matches: 34, goals: 3, assists: 6, points: 9, penaltyMinutes: 6, plusMinus: -1 },
    ],
  },

  // 12. BK MLADÁ BOLESLAV
  {
    id: 'mlada-boleslav',
    name: 'BK Mladá Boleslav',
    shortName: 'Ml. Boleslav',
    city: 'Mladá Boleslav',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/6.png',
    arenaName: 'Škoda Auto Aréna',
    arenaCapacity: 4222,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Skoda_Auto_Arena_Mlada_Boleslav.jpg/1280px-Skoda_Auto_Arena_Mlada_Boleslav.jpg',
    arenaMapLat: 50.4178,
    arenaMapLng: 14.9028,
    founded: 1909,
    colors: 'Bílá, zelená',
    points: 54,
    wins: 15,
    winsOT: 5,
    lossesOT: 5,
    losses: 23,
    goalsFor: 115,
    goalsAgainst: 130,
    players: [
      // Brankáři
      { id: playerId('mb', 1), name: 'Krošelj', fullName: 'Gašper Krošelj', position: 'Brankář', number: 32, nationality: 'SLO', matches: 34, goals: 0, assists: 1, points: 1, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('mb', 2), name: 'Furch', fullName: 'Jan Furch', position: 'Brankář', number: 30, nationality: 'CZE', matches: 20, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('mb', 3), name: 'Dlapa', fullName: 'Pavel Dlapa', position: 'Obránce', number: 4, nationality: 'CZE', matches: 44, goals: 4, assists: 16, points: 20, penaltyMinutes: 26, plusMinus: 4 },
      { id: playerId('mb', 4), name: 'Šidlík', fullName: 'Marek Šidlík', position: 'Obránce', number: 7, nationality: 'CZE', matches: 42, goals: 3, assists: 12, points: 15, penaltyMinutes: 22, plusMinus: 2 },
      { id: playerId('mb', 5), name: 'Pláněk', fullName: 'Karel Pláněk', position: 'Obránce', number: 6, nationality: 'CZE', matches: 40, goals: 2, assists: 8, points: 10, penaltyMinutes: 20, plusMinus: 1 },
      { id: playerId('mb', 6), name: 'Bernad', fullName: 'David Bernad', position: 'Obránce', number: 44, nationality: 'CZE', matches: 38, goals: 1, assists: 6, points: 7, penaltyMinutes: 18, plusMinus: 0 },
      { id: playerId('mb', 7), name: 'Jánošík', fullName: 'Adam Jánošík', position: 'Obránce', number: 3, nationality: 'SVK', matches: 36, goals: 1, assists: 4, points: 5, penaltyMinutes: 14, plusMinus: -1 },
      // Útočníci
      { id: playerId('mb', 8), name: 'Flynn', fullName: 'Brian Flynn', position: 'Útočník', number: 91, nationality: 'USA', matches: 46, goals: 18, assists: 22, points: 40, penaltyMinutes: 20, plusMinus: 5 },
      { id: playerId('mb', 9), name: 'Šťastný', fullName: 'Jakub Šťastný', position: 'Útočník', number: 19, nationality: 'CZE', matches: 44, goals: 14, assists: 18, points: 32, penaltyMinutes: 16, plusMinus: 3 },
      { id: playerId('mb', 10), name: 'Claireaux', fullName: 'Valentin Claireaux', position: 'Útočník', number: 10, nationality: 'FRA', matches: 42, goals: 10, assists: 14, points: 24, penaltyMinutes: 14, plusMinus: 2 },
      { id: playerId('mb', 11), name: 'Najman', fullName: 'Ondřej Najman', position: 'Útočník', number: 17, nationality: 'CZE', matches: 40, goals: 8, assists: 12, points: 20, penaltyMinutes: 10, plusMinus: 1 },
      { id: playerId('mb', 12), name: 'Lunter', fullName: 'Adam Lunter', position: 'Útočník', number: 11, nationality: 'CZE', matches: 38, goals: 6, assists: 10, points: 16, penaltyMinutes: 8, plusMinus: 0 },
      { id: playerId('mb', 13), name: 'Kotala', fullName: 'Jakub Kotala', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 4, assists: 8, points: 12, penaltyMinutes: 6, plusMinus: -1 },
      { id: playerId('mb', 14), name: 'Kelemen', fullName: 'Miloš Kelemen', position: 'Útočník', number: 77, nationality: 'SVK', matches: 34, goals: 3, assists: 6, points: 9, penaltyMinutes: 12, plusMinus: -2 },
    ],
  },

  // 13. HC ENERGIE KARLOVY VARY
  {
    id: 'karlovy-vary',
    name: 'HC Energie Karlovy Vary',
    shortName: 'K. Vary',
    city: 'Karlovy Vary',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/13.png',
    arenaName: 'KV Arena',
    arenaCapacity: 6000,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/KV_Arena_Karlovy_Vary.jpg/1280px-KV_Arena_Karlovy_Vary.jpg',
    arenaMapLat: 50.2306,
    arenaMapLng: 12.8614,
    founded: 1932,
    colors: 'Žlutá, černá',
    points: 48,
    wins: 13,
    winsOT: 4,
    lossesOT: 7,
    losses: 24,
    goalsFor: 108,
    goalsAgainst: 135,
    players: [
      // Brankáři
      { id: playerId('kv', 1), name: 'Habal', fullName: 'Šimon Habal', position: 'Brankář', number: 31, nationality: 'CZE', matches: 36, goals: 0, assists: 0, points: 0, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('kv', 2), name: 'Bednář', fullName: 'Dominik Bednář', position: 'Brankář', number: 30, nationality: 'CZE', matches: 18, goals: 0, assists: 1, points: 1, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('kv', 3), name: 'Plutnar', fullName: 'David Plutnar', position: 'Obránce', number: 4, nationality: 'CZE', matches: 44, goals: 4, assists: 14, points: 18, penaltyMinutes: 30, plusMinus: 2 },
      { id: playerId('kv', 4), name: 'Zábranský', fullName: 'Tomáš Zábranský', position: 'Obránce', number: 7, nationality: 'CZE', matches: 42, goals: 2, assists: 10, points: 12, penaltyMinutes: 24, plusMinus: 0 },
      { id: playerId('kv', 5), name: 'Parkkonen', fullName: 'Niki Parkkonen', position: 'Obránce', number: 6, nationality: 'FIN', matches: 40, goals: 2, assists: 8, points: 10, penaltyMinutes: 22, plusMinus: -1 },
      { id: playerId('kv', 6), name: 'Havlín', fullName: 'Dominik Havlín', position: 'Obránce', number: 44, nationality: 'CZE', matches: 38, goals: 1, assists: 6, points: 7, penaltyMinutes: 18, plusMinus: -2 },
      { id: playerId('kv', 7), name: 'Pulpán', fullName: 'Lukáš Pulpán', position: 'Obránce', number: 3, nationality: 'CZE', matches: 36, goals: 1, assists: 4, points: 5, penaltyMinutes: 16, plusMinus: -3 },
      // Útočníci
      { id: playerId('kv', 8), name: 'Černoch', fullName: 'Tomáš Černoch', position: 'Útočník', number: 19, nationality: 'CZE', matches: 46, goals: 16, assists: 20, points: 36, penaltyMinutes: 22, plusMinus: 2 },
      { id: playerId('kv', 9), name: 'Vondráček', fullName: 'Jiří Vondráček', position: 'Útočník', number: 17, nationality: 'CZE', matches: 44, goals: 12, assists: 16, points: 28, penaltyMinutes: 16, plusMinus: 0 },
      { id: playerId('kv', 10), name: 'Gríger', fullName: 'Tomáš Gríger', position: 'Útočník', number: 10, nationality: 'SVK', matches: 42, goals: 10, assists: 14, points: 24, penaltyMinutes: 14, plusMinus: -1 },
      { id: playerId('kv', 11), name: 'Hladonik', fullName: 'Adam Hladonik', position: 'Útočník', number: 9, nationality: 'CZE', matches: 40, goals: 8, assists: 10, points: 18, penaltyMinutes: 12, plusMinus: -2 },
      { id: playerId('kv', 12), name: 'Koblasa', fullName: 'Jiří Koblasa', position: 'Útočník', number: 11, nationality: 'CZE', matches: 38, goals: 6, assists: 8, points: 14, penaltyMinutes: 10, plusMinus: -3 },
      { id: playerId('kv', 13), name: 'Rachůnek', fullName: 'Tomáš Rachůnek', position: 'Útočník', number: 14, nationality: 'CZE', matches: 36, goals: 4, assists: 6, points: 10, penaltyMinutes: 8, plusMinus: -4 },
      { id: playerId('kv', 14), name: 'Osmík', fullName: 'Jiří Osmík', position: 'Útočník', number: 77, nationality: 'CZE', matches: 34, goals: 3, assists: 4, points: 7, penaltyMinutes: 6, plusMinus: -5 },
    ],
  },

  // 14. HC KLADNO (RYTÍŘI KLADNO)
  {
    id: 'kladno',
    name: 'Rytíři Kladno',
    shortName: 'Kladno',
    city: 'Kladno',
    logoUrl: 'https://www.hokej.cz/images/logos/teams/14.png',
    arenaName: 'ČEZ Stadion',
    arenaCapacity: 5200,
    arenaImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/CEZ_stadion_Kladno.jpg/1280px-CEZ_stadion_Kladno.jpg',
    arenaMapLat: 50.1431,
    arenaMapLng: 14.1006,
    founded: 1924,
    colors: 'Bílá, červená',
    points: 42,
    wins: 11,
    winsOT: 4,
    lossesOT: 6,
    losses: 27,
    goalsFor: 102,
    goalsAgainst: 145,
    players: [
      // Brankáři
      { id: playerId('kla', 1), name: 'Bow', fullName: 'Dustin Bow', position: 'Brankář', number: 31, nationality: 'CAN', matches: 34, goals: 0, assists: 0, points: 0, penaltyMinutes: 4, plusMinus: 0 },
      { id: playerId('kla', 2), name: 'Brízgala', fullName: 'Adam Brízgala', position: 'Brankář', number: 30, nationality: 'CZE', matches: 20, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
      // Obránci
      { id: playerId('kla', 3), name: 'Sotnieks', fullName: 'Kristaps Sotnieks', position: 'Obránce', number: 4, nationality: 'LAT', matches: 44, goals: 3, assists: 12, points: 15, penaltyMinutes: 32, plusMinus: -2 },
      { id: playerId('kla', 4), name: 'Wood', fullName: 'Kyle Wood', position: 'Obránce', number: 7, nationality: 'CAN', matches: 42, goals: 4, assists: 14, points: 18, penaltyMinutes: 28, plusMinus: 0 },
      { id: playerId('kla', 5), name: 'Babka', fullName: 'Radim Babka', position: 'Obránce', number: 6, nationality: 'CZE', matches: 40, goals: 2, assists: 8, points: 10, penaltyMinutes: 24, plusMinus: -3 },
      { id: playerId('kla', 6), name: 'Baránek', fullName: 'Jiří Baránek', position: 'Obránce', number: 44, nationality: 'CZE', matches: 38, goals: 1, assists: 6, points: 7, penaltyMinutes: 20, plusMinus: -4 },
      { id: playerId('kla', 7), name: 'Ticháček', fullName: 'David Ticháček', position: 'Obránce', number: 3, nationality: 'CZE', matches: 36, goals: 1, assists: 4, points: 5, penaltyMinutes: 16, plusMinus: -5 },
      // Útočníci
      { id: playerId('kla', 8), name: 'Jágr', fullName: 'Jaromír Jágr', position: 'Útočník', number: 68, nationality: 'CZE', matches: 44, goals: 12, assists: 22, points: 34, penaltyMinutes: 18, plusMinus: 2 },
      { id: playerId('kla', 9), name: 'Plekanec', fullName: 'Tomáš Plekanec', position: 'Útočník', number: 14, nationality: 'CZE', matches: 42, goals: 10, assists: 18, points: 28, penaltyMinutes: 14, plusMinus: 0 },
      { id: playerId('kla', 10), name: 'Kubík', fullName: 'Jaromír Kubík', position: 'Útočník', number: 17, nationality: 'CZE', matches: 40, goals: 8, assists: 12, points: 20, penaltyMinutes: 16, plusMinus: -2 },
      { id: playerId('kla', 11), name: 'Machač', fullName: 'Adam Machač', position: 'Útočník', number: 9, nationality: 'CZE', matches: 38, goals: 6, assists: 10, points: 16, penaltyMinutes: 10, plusMinus: -3 },
      { id: playerId('kla', 12), name: 'Pytlík', fullName: 'Jakub Pytlík', position: 'Útočník', number: 11, nationality: 'CZE', matches: 36, goals: 5, assists: 8, points: 13, penaltyMinutes: 8, plusMinus: -4 },
      { id: playerId('kla', 13), name: 'Filip', fullName: 'Jakub Filip', position: 'Útočník', number: 19, nationality: 'CZE', matches: 34, goals: 4, assists: 6, points: 10, penaltyMinutes: 6, plusMinus: -5 },
      { id: playerId('kla', 14), name: 'Redlich', fullName: 'Petr Redlich', position: 'Útočník', number: 77, nationality: 'CZE', matches: 32, goals: 3, assists: 4, points: 7, penaltyMinutes: 12, plusMinus: -6 },
    ],
  },
]

// Zápasy
export const hockeyMatches: HockeyMatch[] = [
  { id: 'match-1', homeTeamId: 'sparta-praha', awayTeamId: 'trinec', homeScore: 3, awayScore: 2, date: 'Včera', played: true, overtime: false },
  { id: 'match-2', homeTeamId: 'brno', awayTeamId: 'liberec', homeScore: 4, awayScore: 3, date: 'Sobota', played: true, overtime: true },
  { id: 'match-3', homeTeamId: 'pardubice', awayTeamId: 'plzen', date: 'Pátek 18:00', played: false },
  { id: 'match-4', homeTeamId: 'ceske-budejovice', awayTeamId: 'litvinov', date: 'Sobota 17:00', played: false },
]

export function getHockeyTeamById(id: string): HockeyTeam | undefined {
  return hockeyTeams.find((team) => team.id === id)
}

export function getHockeyTeamsByPoints(): HockeyTeam[] {
  return [...hockeyTeams].sort((a, b) => b.points - a.points)
}
