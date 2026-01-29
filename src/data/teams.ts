// Data týmů Premier League - KOMPLETNÍ
// Všech 20 týmů s hráči

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
  cleanSheets?: number
}

export interface Team {
  id: string
  name: string
  shortName: string
  logoUrl: string
  logoSmall: string
  stadium: string
  stadiumCapacity: number
  stadiumImageUrl: string
  stadiumMapLat: number
  stadiumMapLng: number
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

// URL helper pro loga
const badge = (id: number, size: number = 100) =>
  `https://resources.premierleague.com/premierleague/badges/${size}/t${id}.png`

// URL helper pro hráče
const player = (id: number) =>
  `https://resources.premierleague.com/premierleague/photos/players/110x140/p${id}.png`

export const teams: Team[] = [
  // 1. MANCHESTER CITY
  {
    id: 'manchester-city',
    name: 'Manchester City',
    shortName: 'Man City',
    logoUrl: badge(43),
    logoSmall: badge(43, 25),
    stadium: 'Etihad Stadium',
    stadiumCapacity: 53400,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Etihad_Stadium_2014.jpg/1280px-Etihad_Stadium_2014.jpg',
    stadiumMapLat: 53.4831,
    stadiumMapLng: -2.2004,
    country: 'Anglie',
    founded: 1880,
    points: 58,
    wins: 18,
    draws: 4,
    losses: 2,
    goalsFor: 52,
    goalsAgainst: 18,
    players: [
      // Brankáři
      { id: 'ederson', name: 'Ederson', fullName: 'Ederson Moraes', position: 'Brankář', photoUrl: player(121160), matches: 22, goals: 0, assists: 1, yellowCards: 0, minutes: 1980, cleanSheets: 8 },
      { id: 'ortega', name: 'Ortega', fullName: 'Stefan Ortega', position: 'Brankář', photoUrl: player(444618), matches: 8, goals: 0, assists: 0, yellowCards: 0, minutes: 720, cleanSheets: 3 },
      { id: 'carson', name: 'Carson', fullName: 'Scott Carson', position: 'Brankář', photoUrl: player(19477), matches: 1, goals: 0, assists: 0, yellowCards: 0, minutes: 90, cleanSheets: 1 },
      // Obránci
      { id: 'walker', name: 'Walker', fullName: 'Kyle Walker', position: 'Obránce', photoUrl: player(46459), matches: 20, goals: 0, assists: 2, yellowCards: 3, minutes: 1700 },
      { id: 'dias', name: 'Dias', fullName: 'Rúben Dias', position: 'Obránce', photoUrl: player(171314), matches: 20, goals: 2, assists: 1, yellowCards: 4, minutes: 1780 },
      { id: 'gvardiol', name: 'Gvardiol', fullName: 'Joško Gvardiol', position: 'Obránce', photoUrl: player(433594), matches: 21, goals: 3, assists: 2, yellowCards: 2, minutes: 1800 },
      { id: 'akanji', name: 'Akanji', fullName: 'Manuel Akanji', position: 'Obránce', photoUrl: player(201656), matches: 19, goals: 1, assists: 1, yellowCards: 2, minutes: 1620 },
      { id: 'ake', name: 'Aké', fullName: 'Nathan Aké', position: 'Obránce', photoUrl: player(157756), matches: 16, goals: 1, assists: 2, yellowCards: 1, minutes: 1200 },
      { id: 'stones', name: 'Stones', fullName: 'John Stones', position: 'Obránce', photoUrl: player(101503), matches: 14, goals: 2, assists: 1, yellowCards: 1, minutes: 1100 },
      { id: 'lewis', name: 'Lewis', fullName: 'Rico Lewis', position: 'Obránce', photoUrl: player(524506), matches: 18, goals: 1, assists: 4, yellowCards: 2, minutes: 1150 },
      // Záložníci
      { id: 'rodri', name: 'Rodri', fullName: 'Rodrigo Hernández', position: 'Záložník', photoUrl: player(220566), matches: 21, goals: 3, assists: 5, yellowCards: 6, minutes: 1850 },
      { id: 'debruyne', name: 'De Bruyne', fullName: 'Kevin De Bruyne', position: 'Záložník', photoUrl: player(61366), matches: 18, goals: 8, assists: 12, yellowCards: 3, minutes: 1420 },
      { id: 'bernardo', name: 'B. Silva', fullName: 'Bernardo Silva', position: 'Záložník', photoUrl: player(165809), matches: 22, goals: 5, assists: 6, yellowCards: 1, minutes: 1750 },
      { id: 'foden', name: 'Foden', fullName: 'Phil Foden', position: 'Záložník', photoUrl: player(209244), matches: 21, goals: 11, assists: 7, yellowCards: 1, minutes: 1680 },
      { id: 'grealish', name: 'Grealish', fullName: 'Jack Grealish', position: 'Záložník', photoUrl: player(172780), matches: 18, goals: 3, assists: 4, yellowCards: 2, minutes: 1200 },
      { id: 'kovacic', name: 'Kovačić', fullName: 'Mateo Kovačić', position: 'Záložník', photoUrl: player(98757), matches: 17, goals: 2, assists: 3, yellowCards: 3, minutes: 1300 },
      { id: 'doku', name: 'Doku', fullName: 'Jérémy Doku', position: 'Záložník', photoUrl: player(468007), matches: 19, goals: 4, assists: 8, yellowCards: 1, minutes: 1250 },
      { id: 'nunes', name: 'Nunes', fullName: 'Matheus Nunes', position: 'Záložník', photoUrl: player(435904), matches: 15, goals: 1, assists: 2, yellowCards: 2, minutes: 950 },
      { id: 'mcatee', name: 'McAtee', fullName: 'James McAtee', position: 'Záložník', photoUrl: player(491701), matches: 5, goals: 0, assists: 1, yellowCards: 0, minutes: 180 },
      // Útočníci
      { id: 'haaland', name: 'Haaland', fullName: 'Erling Haaland', position: 'Útočník', photoUrl: player(223094), matches: 22, goals: 24, assists: 5, yellowCards: 2, minutes: 1856 },
      { id: 'alvarez', name: 'Álvarez', fullName: 'Julián Álvarez', position: 'Útočník', photoUrl: player(445221), matches: 20, goals: 8, assists: 4, yellowCards: 1, minutes: 1100 },
      { id: 'bobb', name: 'Bobb', fullName: 'Oscar Bobb', position: 'Útočník', photoUrl: player(505658), matches: 10, goals: 2, assists: 1, yellowCards: 0, minutes: 450 },
    ],
  },

  // 2. ARSENAL
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'Arsenal',
    logoUrl: badge(3),
    logoSmall: badge(3, 25),
    stadium: 'Emirates Stadium',
    stadiumCapacity: 60704,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Emirates_Stadium_east_side_at_dusk.jpg/1280px-Emirates_Stadium_east_side_at_dusk.jpg',
    stadiumMapLat: 51.5549,
    stadiumMapLng: -0.1084,
    country: 'Anglie',
    founded: 1886,
    points: 55,
    wins: 17,
    draws: 4,
    losses: 3,
    goalsFor: 48,
    goalsAgainst: 20,
    players: [
      // Brankáři
      { id: 'raya', name: 'Raya', fullName: 'David Raya', position: 'Brankář', photoUrl: player(109533), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 9 },
      { id: 'ramsdale', name: 'Ramsdale', fullName: 'Aaron Ramsdale', position: 'Brankář', photoUrl: player(178857), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 2 },
      { id: 'hein', name: 'Hein', fullName: 'Karl Hein', position: 'Brankář', photoUrl: player(464410), matches: 1, goals: 0, assists: 0, yellowCards: 0, minutes: 90, cleanSheets: 0 },
      // Obránci
      { id: 'white', name: 'White', fullName: 'Ben White', position: 'Obránce', photoUrl: player(201671), matches: 21, goals: 0, assists: 3, yellowCards: 2, minutes: 1850 },
      { id: 'saliba', name: 'Saliba', fullName: 'William Saliba', position: 'Obránce', photoUrl: player(223340), matches: 22, goals: 2, assists: 0, yellowCards: 3, minutes: 1980 },
      { id: 'gabriel', name: 'Gabriel', fullName: 'Gabriel Magalhães', position: 'Obránce', photoUrl: player(209807), matches: 21, goals: 3, assists: 1, yellowCards: 5, minutes: 1880 },
      { id: 'zinchenko', name: 'Zinchenko', fullName: 'Oleksandr Zinchenko', position: 'Obránce', photoUrl: player(172575), matches: 16, goals: 1, assists: 3, yellowCards: 2, minutes: 1200 },
      { id: 'tomiyasu', name: 'Tomiyasu', fullName: 'Takehiro Tomiyasu', position: 'Obránce', photoUrl: player(211789), matches: 14, goals: 0, assists: 1, yellowCards: 1, minutes: 1050 },
      { id: 'timber', name: 'Timber', fullName: 'Jurriën Timber', position: 'Obránce', photoUrl: player(453274), matches: 12, goals: 0, assists: 2, yellowCards: 1, minutes: 980 },
      { id: 'kiwior', name: 'Kiwior', fullName: 'Jakub Kiwior', position: 'Obránce', photoUrl: player(434212), matches: 10, goals: 1, assists: 0, yellowCards: 1, minutes: 700 },
      // Záložníci
      { id: 'rice', name: 'Rice', fullName: 'Declan Rice', position: 'Záložník', photoUrl: player(204480), matches: 22, goals: 4, assists: 5, yellowCards: 6, minutes: 1950 },
      { id: 'odegaard', name: 'Ødegaard', fullName: 'Martin Ødegaard', position: 'Záložník', photoUrl: player(184029), matches: 21, goals: 7, assists: 9, yellowCards: 2, minutes: 1820 },
      { id: 'saka', name: 'Saka', fullName: 'Bukayo Saka', position: 'Záložník', photoUrl: player(218081), matches: 22, goals: 12, assists: 8, yellowCards: 2, minutes: 1900 },
      { id: 'martinelli', name: 'Martinelli', fullName: 'Gabriel Martinelli', position: 'Záložník', photoUrl: player(444145), matches: 20, goals: 6, assists: 4, yellowCards: 1, minutes: 1500 },
      { id: 'jorginho', name: 'Jorginho', fullName: 'Jorginho', position: 'Záložník', photoUrl: player(113525), matches: 18, goals: 1, assists: 2, yellowCards: 4, minutes: 1100 },
      { id: 'partey', name: 'Partey', fullName: 'Thomas Partey', position: 'Záložník', photoUrl: player(172579), matches: 15, goals: 1, assists: 2, yellowCards: 3, minutes: 1050 },
      { id: 'vieira-ars', name: 'Vieira', fullName: 'Fábio Vieira', position: 'Záložník', photoUrl: player(441288), matches: 12, goals: 2, assists: 3, yellowCards: 0, minutes: 650 },
      { id: 'trossard', name: 'Trossard', fullName: 'Leandro Trossard', position: 'Záložník', photoUrl: player(199031), matches: 19, goals: 8, assists: 3, yellowCards: 1, minutes: 1200 },
      { id: 'smith-rowe-ars', name: 'Smith Rowe', fullName: 'Emile Smith Rowe', position: 'Záložník', photoUrl: player(201940), matches: 8, goals: 1, assists: 1, yellowCards: 0, minutes: 400 },
      // Útočníci
      { id: 'havertz', name: 'Havertz', fullName: 'Kai Havertz', position: 'Útočník', photoUrl: player(219847), matches: 21, goals: 9, assists: 4, yellowCards: 3, minutes: 1650 },
      { id: 'jesus', name: 'Jesus', fullName: 'Gabriel Jesus', position: 'Útočník', photoUrl: player(169187), matches: 18, goals: 5, assists: 3, yellowCards: 1, minutes: 1100 },
      { id: 'nketiah', name: 'Nketiah', fullName: 'Eddie Nketiah', position: 'Útočník', photoUrl: player(195914), matches: 14, goals: 4, assists: 2, yellowCards: 0, minutes: 750 },
    ],
  },

  // 3. LIVERPOOL
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'Liverpool',
    logoUrl: badge(14),
    logoSmall: badge(14, 25),
    stadium: 'Anfield',
    stadiumCapacity: 61276,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Anfield_stadium_%28Aerial_View%29.jpg/1280px-Anfield_stadium_%28Aerial_View%29.jpg',
    stadiumMapLat: 53.4308,
    stadiumMapLng: -2.9608,
    country: 'Anglie',
    founded: 1892,
    points: 53,
    wins: 16,
    draws: 5,
    losses: 3,
    goalsFor: 51,
    goalsAgainst: 22,
    players: [
      // Brankáři
      { id: 'alisson', name: 'Alisson', fullName: 'Alisson Becker', position: 'Brankář', photoUrl: player(116535), matches: 21, goals: 0, assists: 1, yellowCards: 0, minutes: 1890, cleanSheets: 7 },
      { id: 'kelleher', name: 'Kelleher', fullName: 'Caoimhin Kelleher', position: 'Brankář', photoUrl: player(224179), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 2 },
      { id: 'jaros', name: 'Jaroš', fullName: 'Vítězslav Jaroš', position: 'Brankář', photoUrl: player(449187), matches: 0, goals: 0, assists: 0, yellowCards: 0, minutes: 0, cleanSheets: 0 },
      // Obránci
      { id: 'taa', name: 'Alexander-Arnold', fullName: 'Trent Alexander-Arnold', position: 'Obránce', photoUrl: player(169187), matches: 20, goals: 2, assists: 7, yellowCards: 3, minutes: 1720 },
      { id: 'vandijk', name: 'Van Dijk', fullName: 'Virgil van Dijk', position: 'Obránce', photoUrl: player(97032), matches: 22, goals: 3, assists: 1, yellowCards: 2, minutes: 1980 },
      { id: 'konate', name: 'Konaté', fullName: 'Ibrahima Konaté', position: 'Obránce', photoUrl: player(219316), matches: 18, goals: 1, assists: 0, yellowCards: 3, minutes: 1500 },
      { id: 'robertson', name: 'Robertson', fullName: 'Andrew Robertson', position: 'Obránce', photoUrl: player(122798), matches: 19, goals: 1, assists: 4, yellowCards: 4, minutes: 1600 },
      { id: 'gomez', name: 'Gomez', fullName: 'Joe Gomez', position: 'Obránce', photoUrl: player(174004), matches: 15, goals: 0, assists: 1, yellowCards: 2, minutes: 1100 },
      { id: 'matip', name: 'Matip', fullName: 'Joël Matip', position: 'Obránce', photoUrl: player(82175), matches: 12, goals: 1, assists: 0, yellowCards: 1, minutes: 950 },
      { id: 'tsimikas', name: 'Tsimikas', fullName: 'Kostas Tsimikas', position: 'Obránce', photoUrl: player(238060), matches: 14, goals: 0, assists: 3, yellowCards: 2, minutes: 850 },
      { id: 'bradley', name: 'Bradley', fullName: 'Conor Bradley', position: 'Obránce', photoUrl: player(498149), matches: 10, goals: 1, assists: 2, yellowCards: 1, minutes: 650 },
      // Záložníci
      { id: 'mac', name: 'Mac Allister', fullName: 'Alexis Mac Allister', position: 'Záložník', photoUrl: player(209889), matches: 22, goals: 5, assists: 4, yellowCards: 5, minutes: 1900 },
      { id: 'szoboszlai', name: 'Szoboszlai', fullName: 'Dominik Szoboszlai', position: 'Záložník', photoUrl: player(225321), matches: 22, goals: 5, assists: 6, yellowCards: 4, minutes: 1750 },
      { id: 'diaz', name: 'L. Díaz', fullName: 'Luis Díaz', position: 'Záložník', photoUrl: player(196885), matches: 21, goals: 7, assists: 4, yellowCards: 1, minutes: 1650 },
      { id: 'jones-liv', name: 'Jones', fullName: 'Curtis Jones', position: 'Záložník', photoUrl: player(210505), matches: 18, goals: 3, assists: 2, yellowCards: 3, minutes: 1200 },
      { id: 'endo', name: 'Endo', fullName: 'Wataru Endo', position: 'Záložník', photoUrl: player(116516), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1350 },
      { id: 'gravenberch', name: 'Gravenberch', fullName: 'Ryan Gravenberch', position: 'Záložník', photoUrl: player(442192), matches: 17, goals: 2, assists: 3, yellowCards: 2, minutes: 1100 },
      { id: 'elliott', name: 'Elliott', fullName: 'Harvey Elliott', position: 'Záložník', photoUrl: player(449820), matches: 16, goals: 2, assists: 4, yellowCards: 1, minutes: 950 },
      { id: 'jota', name: 'Jota', fullName: 'Diogo Jota', position: 'Záložník', photoUrl: player(178184), matches: 14, goals: 6, assists: 3, yellowCards: 1, minutes: 850 },
      // Útočníci
      { id: 'salah', name: 'Salah', fullName: 'Mohamed Salah', position: 'Útočník', photoUrl: player(118748), matches: 22, goals: 15, assists: 10, yellowCards: 1, minutes: 1900 },
      { id: 'nunez', name: 'Núñez', fullName: 'Darwin Núñez', position: 'Útočník', photoUrl: player(447203), matches: 20, goals: 8, assists: 5, yellowCards: 3, minutes: 1400 },
      { id: 'gakpo', name: 'Gakpo', fullName: 'Cody Gakpo', position: 'Útočník', photoUrl: player(443067), matches: 18, goals: 5, assists: 4, yellowCards: 0, minutes: 1050 },
    ],
  },

  // 4. ASTON VILLA
  {
    id: 'aston-villa',
    name: 'Aston Villa',
    shortName: 'Aston Villa',
    logoUrl: badge(7),
    logoSmall: badge(7, 25),
    stadium: 'Villa Park',
    stadiumCapacity: 42749,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Villa_Park_from_the_air.jpg/1280px-Villa_Park_from_the_air.jpg',
    stadiumMapLat: 52.5092,
    stadiumMapLng: -1.8847,
    country: 'Anglie',
    founded: 1874,
    points: 48,
    wins: 15,
    draws: 3,
    losses: 6,
    goalsFor: 46,
    goalsAgainst: 32,
    players: [
      // Brankáři
      { id: 'emi', name: 'E. Martínez', fullName: 'Emiliano Martínez', position: 'Brankář', photoUrl: player(98980), matches: 22, goals: 0, assists: 0, yellowCards: 2, minutes: 1980, cleanSheets: 7 },
      { id: 'olsen', name: 'Olsen', fullName: 'Robin Olsen', position: 'Brankář', photoUrl: player(83457), matches: 3, goals: 0, assists: 0, yellowCards: 0, minutes: 270, cleanSheets: 1 },
      // Obránci
      { id: 'cash', name: 'Cash', fullName: 'Matty Cash', position: 'Obránce', photoUrl: player(166206), matches: 19, goals: 1, assists: 3, yellowCards: 4, minutes: 1650 },
      { id: 'konsa', name: 'Konsa', fullName: 'Ezri Konsa', position: 'Obránce', photoUrl: player(201666), matches: 21, goals: 2, assists: 1, yellowCards: 3, minutes: 1850 },
      { id: 'torres', name: 'Torres', fullName: 'Pau Torres', position: 'Obránce', photoUrl: player(211653), matches: 20, goals: 1, assists: 2, yellowCards: 2, minutes: 1750 },
      { id: 'digne', name: 'Digne', fullName: 'Lucas Digne', position: 'Obránce', photoUrl: player(107930), matches: 18, goals: 0, assists: 4, yellowCards: 3, minutes: 1500 },
      { id: 'carlos', name: 'Carlos', fullName: 'Diego Carlos', position: 'Obránce', photoUrl: player(227071), matches: 14, goals: 1, assists: 0, yellowCards: 2, minutes: 1100 },
      { id: 'mings', name: 'Mings', fullName: 'Tyrone Mings', position: 'Obránce', photoUrl: player(170849), matches: 10, goals: 0, assists: 1, yellowCards: 2, minutes: 750 },
      { id: 'moreno-av', name: 'Moreno', fullName: 'Alex Moreno', position: 'Obránce', photoUrl: player(126839), matches: 15, goals: 0, assists: 2, yellowCards: 1, minutes: 1000 },
      // Záložníci
      { id: 'mcginn', name: 'McGinn', fullName: 'John McGinn', position: 'Záložník', photoUrl: player(109053), matches: 21, goals: 4, assists: 4, yellowCards: 5, minutes: 1750 },
      { id: 'tielemans', name: 'Tielemans', fullName: 'Youri Tielemans', position: 'Záložník', photoUrl: player(202178), matches: 20, goals: 3, assists: 5, yellowCards: 4, minutes: 1600 },
      { id: 'bailey', name: 'Bailey', fullName: 'Leon Bailey', position: 'Záložník', photoUrl: player(215520), matches: 18, goals: 6, assists: 5, yellowCards: 2, minutes: 1200 },
      { id: 'rogers', name: 'Rogers', fullName: 'Morgan Rogers', position: 'Záložník', photoUrl: player(493225), matches: 19, goals: 4, assists: 3, yellowCards: 1, minutes: 1400 },
      { id: 'luiz-av', name: 'D. Luiz', fullName: 'Douglas Luiz', position: 'Záložník', photoUrl: player(219623), matches: 21, goals: 4, assists: 6, yellowCards: 3, minutes: 1700 },
      { id: 'kamara', name: 'Kamara', fullName: 'Boubacar Kamara', position: 'Záložník', photoUrl: player(226299), matches: 17, goals: 1, assists: 2, yellowCards: 4, minutes: 1300 },
      { id: 'dendoncker', name: 'Dendoncker', fullName: 'Leander Dendoncker', position: 'Záložník', photoUrl: player(178293), matches: 12, goals: 1, assists: 1, yellowCards: 2, minutes: 800 },
      { id: 'ramsey-av', name: 'Ramsey', fullName: 'Jacob Ramsey', position: 'Záložník', photoUrl: player(447380), matches: 16, goals: 3, assists: 2, yellowCards: 1, minutes: 1050 },
      { id: 'traore-av', name: 'Traoré', fullName: 'Bertrand Traoré', position: 'Záložník', photoUrl: player(153256), matches: 10, goals: 1, assists: 2, yellowCards: 0, minutes: 550 },
      // Útočníci
      { id: 'watkins', name: 'Watkins', fullName: 'Ollie Watkins', position: 'Útočník', photoUrl: player(178301), matches: 22, goals: 13, assists: 9, yellowCards: 2, minutes: 1900 },
      { id: 'duran', name: 'Durán', fullName: 'Jhon Durán', position: 'Útočník', photoUrl: player(497195), matches: 18, goals: 5, assists: 1, yellowCards: 1, minutes: 850 },
    ],
  },

  // 5. TOTTENHAM
  {
    id: 'tottenham',
    name: 'Tottenham',
    shortName: 'Tottenham',
    logoUrl: badge(6),
    logoSmall: badge(6, 25),
    stadium: 'Tottenham Hotspur Stadium',
    stadiumCapacity: 62850,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tottenham_Hotspur_Stadium_-_East_Side_-_2022-02-12.jpg/1280px-Tottenham_Hotspur_Stadium_-_East_Side_-_2022-02-12.jpg',
    stadiumMapLat: 51.6042,
    stadiumMapLng: -0.0662,
    country: 'Anglie',
    founded: 1882,
    points: 46,
    wins: 14,
    draws: 4,
    losses: 6,
    goalsFor: 45,
    goalsAgainst: 30,
    players: [
      // Brankáři
      { id: 'vicario', name: 'Vicario', fullName: 'Guglielmo Vicario', position: 'Brankář', photoUrl: player(180974), matches: 22, goals: 0, assists: 0, yellowCards: 1, minutes: 1980, cleanSheets: 6 },
      { id: 'forster', name: 'Forster', fullName: 'Fraser Forster', position: 'Brankář', photoUrl: player(39815), matches: 3, goals: 0, assists: 0, yellowCards: 0, minutes: 270, cleanSheets: 1 },
      // Obránci
      { id: 'porro', name: 'Porro', fullName: 'Pedro Porro', position: 'Obránce', photoUrl: player(209758), matches: 21, goals: 2, assists: 4, yellowCards: 5, minutes: 1800 },
      { id: 'romero', name: 'Romero', fullName: 'Cristian Romero', position: 'Obránce', photoUrl: player(221820), matches: 18, goals: 1, assists: 1, yellowCards: 6, minutes: 1550 },
      { id: 'vvd-tot', name: 'Van de Ven', fullName: 'Micky van de Ven', position: 'Obránce', photoUrl: player(450618), matches: 19, goals: 1, assists: 2, yellowCards: 3, minutes: 1650 },
      { id: 'udogie', name: 'Udogie', fullName: 'Destiny Udogie', position: 'Obránce', photoUrl: player(478035), matches: 20, goals: 0, assists: 3, yellowCards: 4, minutes: 1700 },
      { id: 'emerson-tot', name: 'Royal', fullName: 'Emerson Royal', position: 'Obránce', photoUrl: player(218878), matches: 14, goals: 0, assists: 2, yellowCards: 3, minutes: 1050 },
      { id: 'davies', name: 'Davies', fullName: 'Ben Davies', position: 'Obránce', photoUrl: player(77933), matches: 12, goals: 0, assists: 1, yellowCards: 2, minutes: 850 },
      { id: 'dragusin', name: 'Drăgușin', fullName: 'Radu Drăgușin', position: 'Obránce', photoUrl: player(449192), matches: 8, goals: 0, assists: 0, yellowCards: 1, minutes: 550 },
      // Záložníci
      { id: 'bissouma', name: 'Bissouma', fullName: 'Yves Bissouma', position: 'Záložník', photoUrl: player(194634), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1450 },
      { id: 'maddison', name: 'Maddison', fullName: 'James Maddison', position: 'Záložník', photoUrl: player(175949), matches: 19, goals: 6, assists: 7, yellowCards: 2, minutes: 1520 },
      { id: 'kulusevski', name: 'Kulusevski', fullName: 'Dejan Kulusevski', position: 'Záložník', photoUrl: player(232348), matches: 21, goals: 5, assists: 6, yellowCards: 3, minutes: 1700 },
      { id: 'johnson', name: 'Johnson', fullName: 'Brennan Johnson', position: 'Záložník', photoUrl: player(434150), matches: 22, goals: 5, assists: 3, yellowCards: 1, minutes: 1400 },
      { id: 'sarr-tot', name: 'Sarr', fullName: 'Pape Sarr', position: 'Záložník', photoUrl: player(461136), matches: 17, goals: 2, assists: 3, yellowCards: 4, minutes: 1200 },
      { id: 'hojbjerg', name: 'Højbjerg', fullName: 'Pierre-Emile Højbjerg', position: 'Záložník', photoUrl: player(110649), matches: 18, goals: 1, assists: 2, yellowCards: 5, minutes: 1300 },
      { id: 'bentancur', name: 'Bentancur', fullName: 'Rodrigo Bentancur', position: 'Záložník', photoUrl: player(205047), matches: 15, goals: 2, assists: 2, yellowCards: 3, minutes: 1050 },
      { id: 'lo-celso', name: 'Lo Celso', fullName: 'Giovani Lo Celso', position: 'Záložník', photoUrl: player(148089), matches: 12, goals: 1, assists: 2, yellowCards: 1, minutes: 750 },
      { id: 'skipp', name: 'Skipp', fullName: 'Oliver Skipp', position: 'Záložník', photoUrl: player(209829), matches: 10, goals: 0, assists: 1, yellowCards: 2, minutes: 600 },
      // Útočníci
      { id: 'son', name: 'Son', fullName: 'Son Heung-min', position: 'Útočník', photoUrl: player(85971), matches: 22, goals: 13, assists: 7, yellowCards: 1, minutes: 1850 },
      { id: 'richarlison', name: 'Richarlison', fullName: 'Richarlison', position: 'Útočník', photoUrl: player(178186), matches: 16, goals: 5, assists: 2, yellowCards: 2, minutes: 950 },
      { id: 'solomon', name: 'Solomon', fullName: 'Manor Solomon', position: 'Útočník', photoUrl: player(470659), matches: 8, goals: 1, assists: 1, yellowCards: 0, minutes: 400 },
    ],
  },

  // 6. CHELSEA
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'Chelsea',
    logoUrl: badge(8),
    logoSmall: badge(8, 25),
    stadium: 'Stamford Bridge',
    stadiumCapacity: 40343,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stamford_Bridge_Clear_Skies.JPG/1280px-Stamford_Bridge_Clear_Skies.JPG',
    stadiumMapLat: 51.4817,
    stadiumMapLng: -0.1910,
    country: 'Anglie',
    founded: 1905,
    points: 44,
    wins: 13,
    draws: 5,
    losses: 6,
    goalsFor: 42,
    goalsAgainst: 28,
    players: [
      // Brankáři
      { id: 'sanchez', name: 'R. Sánchez', fullName: 'Robert Sánchez', position: 'Brankář', photoUrl: player(172778), matches: 18, goals: 0, assists: 0, yellowCards: 1, minutes: 1620, cleanSheets: 5 },
      { id: 'petrovic', name: 'Petrović', fullName: 'Djordje Petrović', position: 'Brankář', photoUrl: player(475094), matches: 7, goals: 0, assists: 0, yellowCards: 0, minutes: 630, cleanSheets: 2 },
      // Obránci
      { id: 'james', name: 'James', fullName: 'Reece James', position: 'Obránce', photoUrl: player(204722), matches: 10, goals: 1, assists: 2, yellowCards: 2, minutes: 800 },
      { id: 'fofana', name: 'Fofana', fullName: 'Wesley Fofana', position: 'Obránce', photoUrl: player(231748), matches: 16, goals: 0, assists: 1, yellowCards: 3, minutes: 1300 },
      { id: 'colwill', name: 'Colwill', fullName: 'Levi Colwill', position: 'Obránce', photoUrl: player(244851), matches: 19, goals: 1, assists: 2, yellowCards: 4, minutes: 1650 },
      { id: 'cucurella', name: 'Cucurella', fullName: 'Marc Cucurella', position: 'Obránce', photoUrl: player(173598), matches: 20, goals: 0, assists: 3, yellowCards: 3, minutes: 1700 },
      { id: 'silva-thiago', name: 'Thiago Silva', fullName: 'Thiago Silva', position: 'Obránce', photoUrl: player(59990), matches: 18, goals: 1, assists: 0, yellowCards: 2, minutes: 1550 },
      { id: 'disasi', name: 'Disasi', fullName: 'Axel Disasi', position: 'Obránce', photoUrl: player(453256), matches: 17, goals: 1, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'gusto', name: 'Gusto', fullName: 'Malo Gusto', position: 'Obránce', photoUrl: player(473515), matches: 18, goals: 0, assists: 3, yellowCards: 2, minutes: 1350 },
      { id: 'chilwell', name: 'Chilwell', fullName: 'Ben Chilwell', position: 'Obránce', photoUrl: player(172850), matches: 8, goals: 0, assists: 1, yellowCards: 0, minutes: 500 },
      // Záložníci
      { id: 'caicedo', name: 'Caicedo', fullName: 'Moisés Caicedo', position: 'Záložník', photoUrl: player(490027), matches: 21, goals: 2, assists: 3, yellowCards: 5, minutes: 1800 },
      { id: 'enzo', name: 'Fernández', fullName: 'Enzo Fernández', position: 'Záložník', photoUrl: player(478082), matches: 20, goals: 2, assists: 4, yellowCards: 4, minutes: 1650 },
      { id: 'palmer', name: 'Palmer', fullName: 'Cole Palmer', position: 'Záložník', photoUrl: player(463560), matches: 22, goals: 14, assists: 8, yellowCards: 1, minutes: 1850 },
      { id: 'gallagher', name: 'Gallagher', fullName: 'Conor Gallagher', position: 'Záložník', photoUrl: player(200700), matches: 21, goals: 4, assists: 5, yellowCards: 6, minutes: 1700 },
      { id: 'mudryk', name: 'Mudryk', fullName: 'Mykhailo Mudryk', position: 'Záložník', photoUrl: player(468412), matches: 18, goals: 3, assists: 4, yellowCards: 1, minutes: 1100 },
      { id: 'sterling', name: 'Sterling', fullName: 'Raheem Sterling', position: 'Záložník', photoUrl: player(85554), matches: 15, goals: 4, assists: 3, yellowCards: 0, minutes: 950 },
      { id: 'madueke', name: 'Madueke', fullName: 'Noni Madueke', position: 'Záložník', photoUrl: player(440282), matches: 17, goals: 4, assists: 2, yellowCards: 1, minutes: 1000 },
      { id: 'chukwuemeka', name: 'Chukwuemeka', fullName: 'Carney Chukwuemeka', position: 'Záložník', photoUrl: player(450431), matches: 10, goals: 1, assists: 1, yellowCards: 0, minutes: 450 },
      // Útočníci
      { id: 'nkunku', name: 'Nkunku', fullName: 'Christopher Nkunku', position: 'Útočník', photoUrl: player(192634), matches: 15, goals: 5, assists: 3, yellowCards: 1, minutes: 900 },
      { id: 'jackson', name: 'Jackson', fullName: 'Nicolas Jackson', position: 'Útočník', photoUrl: player(448035), matches: 21, goals: 10, assists: 4, yellowCards: 2, minutes: 1600 },
      { id: 'broja', name: 'Broja', fullName: 'Armando Broja', position: 'Útočník', photoUrl: player(223802), matches: 8, goals: 1, assists: 0, yellowCards: 0, minutes: 350 },
    ],
  },

  // 7. NEWCASTLE
  {
    id: 'newcastle',
    name: 'Newcastle United',
    shortName: 'Newcastle',
    logoUrl: badge(4),
    logoSmall: badge(4, 25),
    stadium: "St James' Park",
    stadiumCapacity: 52305,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/St_James%27_Park%2C_Newcastle_upon_Tyne%2C_9_August_2021.jpg/1280px-St_James%27_Park%2C_Newcastle_upon_Tyne%2C_9_August_2021.jpg',
    stadiumMapLat: 54.9756,
    stadiumMapLng: -1.6217,
    country: 'Anglie',
    founded: 1892,
    points: 42,
    wins: 12,
    draws: 6,
    losses: 6,
    goalsFor: 40,
    goalsAgainst: 28,
    players: [
      // Brankáři
      { id: 'pope', name: 'Pope', fullName: 'Nick Pope', position: 'Brankář', photoUrl: player(84149), matches: 15, goals: 0, assists: 0, yellowCards: 0, minutes: 1350, cleanSheets: 5 },
      { id: 'dubravka', name: 'Dúbravka', fullName: 'Martin Dúbravka', position: 'Brankář', photoUrl: player(80210), matches: 10, goals: 0, assists: 0, yellowCards: 1, minutes: 900, cleanSheets: 3 },
      // Obránci
      { id: 'trippier', name: 'Trippier', fullName: 'Kieran Trippier', position: 'Obránce', photoUrl: player(61933), matches: 20, goals: 1, assists: 5, yellowCards: 4, minutes: 1750 },
      { id: 'schar', name: 'Schär', fullName: 'Fabian Schär', position: 'Obránce', photoUrl: player(95600), matches: 19, goals: 2, assists: 1, yellowCards: 4, minutes: 1650 },
      { id: 'botman', name: 'Botman', fullName: 'Sven Botman', position: 'Obránce', photoUrl: player(449177), matches: 18, goals: 1, assists: 0, yellowCards: 2, minutes: 1550 },
      { id: 'burn', name: 'Burn', fullName: 'Dan Burn', position: 'Obránce', photoUrl: player(60856), matches: 17, goals: 1, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'lascelles', name: 'Lascelles', fullName: 'Jamaal Lascelles', position: 'Obránce', photoUrl: player(104198), matches: 12, goals: 0, assists: 0, yellowCards: 2, minutes: 950 },
      { id: 'krafth', name: 'Krafth', fullName: 'Emil Krafth', position: 'Obránce', photoUrl: player(170316), matches: 10, goals: 0, assists: 1, yellowCards: 1, minutes: 750 },
      { id: 'livramento', name: 'Livramento', fullName: 'Tino Livramento', position: 'Obránce', photoUrl: player(445020), matches: 16, goals: 0, assists: 2, yellowCards: 2, minutes: 1200 },
      // Záložníci
      { id: 'guimaraes', name: 'Guimarães', fullName: 'Bruno Guimarães', position: 'Záložník', photoUrl: player(238041), matches: 21, goals: 4, assists: 5, yellowCards: 6, minutes: 1820 },
      { id: 'joelinton', name: 'Joelinton', fullName: 'Joelinton', position: 'Záložník', photoUrl: player(169906), matches: 20, goals: 3, assists: 4, yellowCards: 7, minutes: 1700 },
      { id: 'gordon', name: 'Gordon', fullName: 'Anthony Gordon', position: 'Záložník', photoUrl: player(200652), matches: 22, goals: 8, assists: 7, yellowCards: 2, minutes: 1850 },
      { id: 'barnes', name: 'Barnes', fullName: 'Harvey Barnes', position: 'Záložník', photoUrl: player(171711), matches: 19, goals: 5, assists: 3, yellowCards: 1, minutes: 1350 },
      { id: 'longstaff', name: 'Longstaff', fullName: 'Sean Longstaff', position: 'Záložník', photoUrl: player(209827), matches: 17, goals: 2, assists: 2, yellowCards: 4, minutes: 1200 },
      { id: 'willock', name: 'Willock', fullName: 'Joe Willock', position: 'Záložník', photoUrl: player(202252), matches: 16, goals: 2, assists: 3, yellowCards: 2, minutes: 1100 },
      { id: 'almiron', name: 'Almirón', fullName: 'Miguel Almirón', position: 'Záložník', photoUrl: player(121028), matches: 18, goals: 4, assists: 2, yellowCards: 2, minutes: 1200 },
      { id: 'murphy', name: 'Murphy', fullName: 'Jacob Murphy', position: 'Záložník', photoUrl: player(165850), matches: 14, goals: 2, assists: 3, yellowCards: 1, minutes: 900 },
      // Útočníci
      { id: 'isak', name: 'Isak', fullName: 'Alexander Isak', position: 'Útočník', photoUrl: player(219168), matches: 21, goals: 14, assists: 4, yellowCards: 1, minutes: 1780 },
      { id: 'wilson', name: 'Wilson', fullName: 'Callum Wilson', position: 'Útočník', photoUrl: player(60898), matches: 12, goals: 5, assists: 2, yellowCards: 0, minutes: 800 },
      { id: 'miley', name: 'Miley', fullName: 'Lewis Miley', position: 'Záložník', photoUrl: player(548122), matches: 14, goals: 1, assists: 2, yellowCards: 1, minutes: 750 },
    ],
  },

  // 8. MANCHESTER UNITED
  {
    id: 'manchester-united',
    name: 'Manchester United',
    shortName: 'Man Utd',
    logoUrl: badge(1),
    logoSmall: badge(1, 25),
    stadium: 'Old Trafford',
    stadiumCapacity: 74310,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Old_Trafford_inside_20060726_1.jpg/1280px-Old_Trafford_inside_20060726_1.jpg',
    stadiumMapLat: 53.4631,
    stadiumMapLng: -2.2913,
    country: 'Anglie',
    founded: 1878,
    points: 40,
    wins: 12,
    draws: 4,
    losses: 8,
    goalsFor: 35,
    goalsAgainst: 32,
    players: [
      // Brankáři
      { id: 'onana', name: 'Onana', fullName: 'André Onana', position: 'Brankář', photoUrl: player(173983), matches: 22, goals: 0, assists: 0, yellowCards: 1, minutes: 1980, cleanSheets: 5 },
      { id: 'bayindir', name: 'Bayındır', fullName: 'Altay Bayındır', position: 'Brankář', photoUrl: player(451056), matches: 3, goals: 0, assists: 0, yellowCards: 0, minutes: 270, cleanSheets: 1 },
      // Obránci
      { id: 'dalot', name: 'Dalot', fullName: 'Diogo Dalot', position: 'Obránce', photoUrl: player(223848), matches: 21, goals: 1, assists: 3, yellowCards: 5, minutes: 1850 },
      { id: 'maguire', name: 'Maguire', fullName: 'Harry Maguire', position: 'Obránce', photoUrl: player(95658), matches: 17, goals: 2, assists: 0, yellowCards: 4, minutes: 1400 },
      { id: 'martinez-mu', name: 'Martínez', fullName: 'Lisandro Martínez', position: 'Obránce', photoUrl: player(467169), matches: 16, goals: 0, assists: 1, yellowCards: 4, minutes: 1400 },
      { id: 'shaw', name: 'Shaw', fullName: 'Luke Shaw', position: 'Obránce', photoUrl: player(106760), matches: 10, goals: 0, assists: 2, yellowCards: 1, minutes: 800 },
      { id: 'varane', name: 'Varane', fullName: 'Raphaël Varane', position: 'Obránce', photoUrl: player(56678), matches: 14, goals: 0, assists: 0, yellowCards: 1, minutes: 1100 },
      { id: 'wan-bissaka', name: 'Wan-Bissaka', fullName: 'Aaron Wan-Bissaka', position: 'Obránce', photoUrl: player(201669), matches: 15, goals: 0, assists: 1, yellowCards: 3, minutes: 1150 },
      { id: 'lindelof', name: 'Lindelöf', fullName: 'Victor Lindelöf', position: 'Obránce', photoUrl: player(172996), matches: 13, goals: 0, assists: 0, yellowCards: 2, minutes: 950 },
      { id: 'malacia', name: 'Malacia', fullName: 'Tyrell Malacia', position: 'Obránce', photoUrl: player(448044), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 350 },
      // Záložníci
      { id: 'casemiro', name: 'Casemiro', fullName: 'Casemiro', position: 'Záložník', photoUrl: player(61256), matches: 18, goals: 1, assists: 2, yellowCards: 6, minutes: 1400 },
      { id: 'mainoo', name: 'Mainoo', fullName: 'Kobbie Mainoo', position: 'Záložník', photoUrl: player(547498), matches: 18, goals: 3, assists: 2, yellowCards: 2, minutes: 1350 },
      { id: 'fernandes', name: 'Fernandes', fullName: 'Bruno Fernandes', position: 'Záložník', photoUrl: player(141746), matches: 22, goals: 7, assists: 6, yellowCards: 5, minutes: 1900 },
      { id: 'garnacho', name: 'Garnacho', fullName: 'Alejandro Garnacho', position: 'Záložník', photoUrl: player(516792), matches: 21, goals: 6, assists: 5, yellowCards: 2, minutes: 1500 },
      { id: 'mount', name: 'Mount', fullName: 'Mason Mount', position: 'Záložník', photoUrl: player(199764), matches: 12, goals: 2, assists: 2, yellowCards: 1, minutes: 750 },
      { id: 'eriksen', name: 'Eriksen', fullName: 'Christian Eriksen', position: 'Záložník', photoUrl: player(80607), matches: 16, goals: 1, assists: 3, yellowCards: 1, minutes: 950 },
      { id: 'antony', name: 'Antony', fullName: 'Antony', position: 'Záložník', photoUrl: player(444727), matches: 17, goals: 3, assists: 2, yellowCards: 2, minutes: 1050 },
      { id: 'amad', name: 'Amad', fullName: 'Amad Diallo', position: 'Záložník', photoUrl: player(468024), matches: 10, goals: 2, assists: 1, yellowCards: 0, minutes: 500 },
      // Útočníci
      { id: 'hojlund', name: 'Højlund', fullName: 'Rasmus Højlund', position: 'Útočník', photoUrl: player(465411), matches: 19, goals: 8, assists: 2, yellowCards: 1, minutes: 1400 },
      { id: 'martial', name: 'Martial', fullName: 'Anthony Martial', position: 'Útočník', photoUrl: player(162780), matches: 10, goals: 2, assists: 1, yellowCards: 0, minutes: 500 },
    ],
  },

  // 9. WEST HAM
  {
    id: 'west-ham',
    name: 'West Ham United',
    shortName: 'West Ham',
    logoUrl: badge(21),
    logoSmall: badge(21, 25),
    stadium: 'London Stadium',
    stadiumCapacity: 62500,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/London_Stadium_2017.jpg/1280px-London_Stadium_2017.jpg',
    stadiumMapLat: 51.5387,
    stadiumMapLng: -0.0166,
    country: 'Anglie',
    founded: 1895,
    points: 38,
    wins: 11,
    draws: 5,
    losses: 8,
    goalsFor: 38,
    goalsAgainst: 42,
    players: [
      // Brankáři
      { id: 'areola', name: 'Areola', fullName: 'Alphonse Areola', position: 'Brankář', photoUrl: player(110916), matches: 20, goals: 0, assists: 0, yellowCards: 0, minutes: 1800, cleanSheets: 4 },
      { id: 'fabianski', name: 'Fabiaňski', fullName: 'Łukasz Fabiaňski', position: 'Brankář', photoUrl: player(38411), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 1 },
      // Obránci
      { id: 'coufal', name: 'Coufal', fullName: 'Vladimír Coufal', position: 'Obránce', photoUrl: player(96389), matches: 18, goals: 0, assists: 2, yellowCards: 4, minutes: 1550 },
      { id: 'zouma', name: 'Zouma', fullName: 'Kurt Zouma', position: 'Obránce', photoUrl: player(168627), matches: 17, goals: 1, assists: 0, yellowCards: 3, minutes: 1450 },
      { id: 'kilman', name: 'Kilman', fullName: 'Max Kilman', position: 'Obránce', photoUrl: player(430656), matches: 19, goals: 1, assists: 1, yellowCards: 2, minutes: 1650 },
      { id: 'emerson', name: 'Emerson', fullName: 'Emerson Palmieri', position: 'Obránce', photoUrl: player(115845), matches: 18, goals: 0, assists: 3, yellowCards: 3, minutes: 1500 },
      { id: 'aguerd', name: 'Aguerd', fullName: 'Nayef Aguerd', position: 'Obránce', photoUrl: player(449148), matches: 16, goals: 0, assists: 1, yellowCards: 2, minutes: 1300 },
      { id: 'mavropanos', name: 'Mavropanos', fullName: 'Konstantinos Mavropanos', position: 'Obránce', photoUrl: player(227073), matches: 14, goals: 1, assists: 0, yellowCards: 3, minutes: 1100 },
      { id: 'cresswell', name: 'Cresswell', fullName: 'Aaron Cresswell', position: 'Obránce', photoUrl: player(56981), matches: 12, goals: 0, assists: 2, yellowCards: 2, minutes: 900 },
      // Záložníci
      { id: 'soucek', name: 'Souček', fullName: 'Tomáš Souček', position: 'Záložník', photoUrl: player(169718), matches: 21, goals: 4, assists: 2, yellowCards: 5, minutes: 1800 },
      { id: 'paqueta', name: 'Paquetá', fullName: 'Lucas Paquetá', position: 'Záložník', photoUrl: player(223105), matches: 19, goals: 3, assists: 5, yellowCards: 4, minutes: 1600 },
      { id: 'ward-prowse', name: 'Ward-Prowse', fullName: 'James Ward-Prowse', position: 'Záložník', photoUrl: player(106851), matches: 20, goals: 3, assists: 4, yellowCards: 3, minutes: 1700 },
      { id: 'bowen', name: 'Bowen', fullName: 'Jarrod Bowen', position: 'Záložník', photoUrl: player(165814), matches: 22, goals: 9, assists: 6, yellowCards: 2, minutes: 1850 },
      { id: 'alvarez-wh', name: 'Álvarez', fullName: 'Edson Álvarez', position: 'Záložník', photoUrl: player(445173), matches: 18, goals: 1, assists: 2, yellowCards: 6, minutes: 1400 },
      { id: 'ings', name: 'Ings', fullName: 'Danny Ings', position: 'Záložník', photoUrl: player(55494), matches: 15, goals: 3, assists: 2, yellowCards: 1, minutes: 900 },
      { id: 'fornals', name: 'Fornals', fullName: 'Pablo Fornals', position: 'Záložník', photoUrl: player(172566), matches: 14, goals: 2, assists: 3, yellowCards: 1, minutes: 850 },
      // Útočníci
      { id: 'kudus', name: 'Kudus', fullName: 'Mohammed Kudus', position: 'Útočník', photoUrl: player(461234), matches: 21, goals: 7, assists: 4, yellowCards: 3, minutes: 1700 },
      { id: 'antonio', name: 'Antonio', fullName: 'Michail Antonio', position: 'Útočník', photoUrl: player(78209), matches: 18, goals: 5, assists: 3, yellowCards: 2, minutes: 1200 },
      { id: 'cornet', name: 'Cornet', fullName: 'Maxwel Cornet', position: 'Útočník', photoUrl: player(202092), matches: 12, goals: 2, assists: 1, yellowCards: 1, minutes: 650 },
    ],
  },

  // 10. BRIGHTON
  {
    id: 'brighton',
    name: 'Brighton & Hove Albion',
    shortName: 'Brighton',
    logoUrl: badge(131),
    logoSmall: badge(131, 25),
    stadium: 'Amex Stadium',
    stadiumCapacity: 31800,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/American_Express_Community_Stadium%2C_Brighton_%28April_2022%29.jpg/1280px-American_Express_Community_Stadium%2C_Brighton_%28April_2022%29.jpg',
    stadiumMapLat: 50.8616,
    stadiumMapLng: -0.0838,
    country: 'Anglie',
    founded: 1901,
    points: 36,
    wins: 10,
    draws: 6,
    losses: 8,
    goalsFor: 40,
    goalsAgainst: 36,
    players: [
      // Brankáři
      { id: 'verbruggen', name: 'Verbruggen', fullName: 'Bart Verbruggen', position: 'Brankář', photoUrl: player(491697), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 5 },
      { id: 'steele', name: 'Steele', fullName: 'Jason Steele', position: 'Brankář', photoUrl: player(61339), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 1 },
      // Obránci
      { id: 'veltman', name: 'Veltman', fullName: 'Joël Veltman', position: 'Obránce', photoUrl: player(80263), matches: 17, goals: 0, assists: 1, yellowCards: 4, minutes: 1400 },
      { id: 'dunk', name: 'Dunk', fullName: 'Lewis Dunk', position: 'Obránce', photoUrl: player(78396), matches: 19, goals: 2, assists: 1, yellowCards: 3, minutes: 1650 },
      { id: 'igor', name: 'Igor', fullName: 'Igor Julio', position: 'Obránce', photoUrl: player(453275), matches: 18, goals: 1, assists: 0, yellowCards: 3, minutes: 1500 },
      { id: 'estupinan', name: 'Estupiñán', fullName: 'Pervis Estupiñán', position: 'Obránce', photoUrl: player(213928), matches: 16, goals: 1, assists: 4, yellowCards: 2, minutes: 1300 },
      { id: 'webster', name: 'Webster', fullName: 'Adam Webster', position: 'Obránce', photoUrl: player(158296), matches: 14, goals: 1, assists: 0, yellowCards: 2, minutes: 1100 },
      { id: 'lamptey', name: 'Lamptey', fullName: 'Tariq Lamptey', position: 'Obránce', photoUrl: player(244725), matches: 15, goals: 0, assists: 2, yellowCards: 3, minutes: 1000 },
      { id: 'milner', name: 'Milner', fullName: 'James Milner', position: 'Obránce', photoUrl: player(36556), matches: 12, goals: 0, assists: 1, yellowCards: 2, minutes: 800 },
      // Záložníci
      { id: 'gross', name: 'Groß', fullName: 'Pascal Groß', position: 'Záložník', photoUrl: player(59296), matches: 20, goals: 3, assists: 6, yellowCards: 3, minutes: 1650 },
      { id: 'gilmour', name: 'Gilmour', fullName: 'Billy Gilmour', position: 'Záložník', photoUrl: player(442195), matches: 18, goals: 1, assists: 3, yellowCards: 2, minutes: 1400 },
      { id: 'mitoma', name: 'Mitoma', fullName: 'Kaoru Mitoma', position: 'Záložník', photoUrl: player(452758), matches: 19, goals: 6, assists: 5, yellowCards: 1, minutes: 1500 },
      { id: 'adingra', name: 'Adingra', fullName: 'Simon Adingra', position: 'Záložník', photoUrl: player(496362), matches: 20, goals: 4, assists: 3, yellowCards: 2, minutes: 1350 },
      { id: 'march', name: 'March', fullName: 'Solly March', position: 'Záložník', photoUrl: player(102050), matches: 15, goals: 2, assists: 3, yellowCards: 1, minutes: 1000 },
      { id: 'buonanotte', name: 'Buonanotte', fullName: 'Facundo Buonanotte', position: 'Záložník', photoUrl: player(541174), matches: 14, goals: 2, assists: 2, yellowCards: 0, minutes: 850 },
      { id: 'enciso', name: 'Enciso', fullName: 'Julio Enciso', position: 'Záložník', photoUrl: player(505644), matches: 16, goals: 3, assists: 2, yellowCards: 1, minutes: 900 },
      { id: 'ayari', name: 'Ayari', fullName: 'Yasin Ayari', position: 'Záložník', photoUrl: player(543288), matches: 10, goals: 0, assists: 1, yellowCards: 1, minutes: 500 },
      // Útočníci
      { id: 'welbeck', name: 'Welbeck', fullName: 'Danny Welbeck', position: 'Útočník', photoUrl: player(78830), matches: 21, goals: 7, assists: 3, yellowCards: 1, minutes: 1500 },
      { id: 'joao-pedro', name: 'João Pedro', fullName: 'João Pedro', position: 'Útočník', photoUrl: player(481372), matches: 20, goals: 6, assists: 4, yellowCards: 2, minutes: 1400 },
      { id: 'ferguson', name: 'Ferguson', fullName: 'Evan Ferguson', position: 'Útočník', photoUrl: player(475090), matches: 16, goals: 5, assists: 2, yellowCards: 0, minutes: 1000 },
    ],
  },

  // Pokračování dalších týmů v druhém souboru...
  // 11. BOURNEMOUTH
  {
    id: 'bournemouth',
    name: 'AFC Bournemouth',
    shortName: 'Bournemouth',
    logoUrl: badge(91),
    logoSmall: badge(91, 25),
    stadium: 'Vitality Stadium',
    stadiumCapacity: 11364,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Dean_Court_-_Seward_stand.jpg/1280px-Dean_Court_-_Seward_stand.jpg',
    stadiumMapLat: 50.7352,
    stadiumMapLng: -1.8383,
    country: 'Anglie',
    founded: 1899,
    points: 35,
    wins: 10,
    draws: 5,
    losses: 9,
    goalsFor: 35,
    goalsAgainst: 38,
    players: [
      // Brankáři
      { id: 'neto', name: 'Neto', fullName: 'Neto', position: 'Brankář', photoUrl: player(131681), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 4 },
      { id: 'travers', name: 'Travers', fullName: 'Mark Travers', position: 'Brankář', photoUrl: player(449157), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 1 },
      // Obránci
      { id: 'smith', name: 'Smith', fullName: 'Adam Smith', position: 'Obránce', photoUrl: player(57531), matches: 18, goals: 0, assists: 2, yellowCards: 3, minutes: 1500 },
      { id: 'senesi', name: 'Senesi', fullName: 'Marcos Senesi', position: 'Obránce', photoUrl: player(222302), matches: 19, goals: 1, assists: 1, yellowCards: 4, minutes: 1650 },
      { id: 'zabarnyi', name: 'Zabarnyi', fullName: 'Illia Zabarnyi', position: 'Obránce', photoUrl: player(468386), matches: 20, goals: 1, assists: 0, yellowCards: 3, minutes: 1750 },
      { id: 'kerkez', name: 'Kerkez', fullName: 'Milos Kerkez', position: 'Obránce', photoUrl: player(547284), matches: 21, goals: 0, assists: 4, yellowCards: 4, minutes: 1800 },
      { id: 'mepham', name: 'Mepham', fullName: 'Chris Mepham', position: 'Obránce', photoUrl: player(204358), matches: 14, goals: 0, assists: 0, yellowCards: 2, minutes: 1100 },
      { id: 'hill', name: 'Hill', fullName: 'James Hill', position: 'Obránce', photoUrl: player(475082), matches: 12, goals: 0, assists: 1, yellowCards: 1, minutes: 900 },
      // Záložníci
      { id: 'cook', name: 'Cook', fullName: 'Lewis Cook', position: 'Záložník', photoUrl: player(173477), matches: 19, goals: 2, assists: 3, yellowCards: 5, minutes: 1550 },
      { id: 'christie', name: 'Christie', fullName: 'Ryan Christie', position: 'Záložník', photoUrl: player(128177), matches: 18, goals: 3, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'tavernier', name: 'Tavernier', fullName: 'Marcus Tavernier', position: 'Záložník', photoUrl: player(204360), matches: 20, goals: 4, assists: 5, yellowCards: 2, minutes: 1600 },
      { id: 'scott-bou', name: 'Scott', fullName: 'Alex Scott', position: 'Záložník', photoUrl: player(493211), matches: 18, goals: 2, assists: 3, yellowCards: 3, minutes: 1400 },
      { id: 'billing', name: 'Billing', fullName: 'Philip Billing', position: 'Záložník', photoUrl: player(173479), matches: 17, goals: 3, assists: 2, yellowCards: 4, minutes: 1250 },
      { id: 'kluivert', name: 'Kluivert', fullName: 'Justin Kluivert', position: 'Záložník', photoUrl: player(220697), matches: 16, goals: 3, assists: 3, yellowCards: 1, minutes: 1100 },
      { id: 'ouattara', name: 'Ouattara', fullName: 'Dango Ouattara', position: 'Záložník', photoUrl: player(478084), matches: 14, goals: 2, assists: 2, yellowCards: 1, minutes: 850 },
      // Útočníci
      { id: 'semenyo', name: 'Semenyo', fullName: 'Antoine Semenyo', position: 'Útočník', photoUrl: player(437086), matches: 21, goals: 6, assists: 3, yellowCards: 3, minutes: 1650 },
      { id: 'solanke', name: 'Solanke', fullName: 'Dominic Solanke', position: 'Útočník', photoUrl: player(172096), matches: 22, goals: 12, assists: 4, yellowCards: 1, minutes: 1850 },
      { id: 'moore', name: 'Moore', fullName: 'Kieffer Moore', position: 'Útočník', photoUrl: player(112368), matches: 10, goals: 2, assists: 1, yellowCards: 1, minutes: 500 },
    ],
  },

  // 12. FULHAM
  {
    id: 'fulham',
    name: 'Fulham',
    shortName: 'Fulham',
    logoUrl: badge(54),
    logoSmall: badge(54, 25),
    stadium: 'Craven Cottage',
    stadiumCapacity: 25700,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Craven_Cottage_Billy_the_Badger.jpg/1280px-Craven_Cottage_Billy_the_Badger.jpg',
    stadiumMapLat: 51.4749,
    stadiumMapLng: -0.2217,
    country: 'Anglie',
    founded: 1879,
    points: 34,
    wins: 9,
    draws: 7,
    losses: 8,
    goalsFor: 32,
    goalsAgainst: 30,
    players: [
      // Brankáři
      { id: 'leno', name: 'Leno', fullName: 'Bernd Leno', position: 'Brankář', photoUrl: player(76998), matches: 22, goals: 0, assists: 0, yellowCards: 2, minutes: 1980, cleanSheets: 6 },
      { id: 'benda', name: 'Benda', fullName: 'Steven Benda', position: 'Brankář', photoUrl: player(468391), matches: 3, goals: 0, assists: 0, yellowCards: 0, minutes: 270, cleanSheets: 0 },
      // Obránci
      { id: 'tete', name: 'Tete', fullName: 'Kenny Tete', position: 'Obránce', photoUrl: player(172859), matches: 19, goals: 1, assists: 2, yellowCards: 3, minutes: 1600 },
      { id: 'diop', name: 'Diop', fullName: 'Issa Diop', position: 'Obránce', photoUrl: player(172523), matches: 18, goals: 1, assists: 0, yellowCards: 4, minutes: 1500 },
      { id: 'bassey', name: 'Bassey', fullName: 'Calvin Bassey', position: 'Obránce', photoUrl: player(444746), matches: 20, goals: 0, assists: 1, yellowCards: 3, minutes: 1700 },
      { id: 'robinson', name: 'Robinson', fullName: 'Antonee Robinson', position: 'Obránce', photoUrl: player(169012), matches: 21, goals: 1, assists: 5, yellowCards: 4, minutes: 1850 },
      { id: 'ream', name: 'Ream', fullName: 'Tim Ream', position: 'Obránce', photoUrl: player(45914), matches: 16, goals: 0, assists: 0, yellowCards: 2, minutes: 1300 },
      { id: 'castagne', name: 'Castagne', fullName: 'Timothy Castagne', position: 'Obránce', photoUrl: player(172551), matches: 14, goals: 1, assists: 2, yellowCards: 2, minutes: 1100 },
      // Záložníci
      { id: 'lukic', name: 'Lukić', fullName: 'Saša Lukić', position: 'Záložník', photoUrl: player(214663), matches: 19, goals: 2, assists: 3, yellowCards: 5, minutes: 1550 },
      { id: 'pereira', name: 'Pereira', fullName: 'Andreas Pereira', position: 'Záložník', photoUrl: player(180564), matches: 20, goals: 4, assists: 4, yellowCards: 3, minutes: 1650 },
      { id: 'iwobi', name: 'Iwobi', fullName: 'Alex Iwobi', position: 'Záložník', photoUrl: player(176083), matches: 21, goals: 5, assists: 6, yellowCards: 2, minutes: 1750 },
      { id: 'smith-rowe-ful', name: 'Smith Rowe', fullName: 'Emile Smith Rowe', position: 'Záložník', photoUrl: player(201940), matches: 18, goals: 4, assists: 3, yellowCards: 1, minutes: 1200 },
      { id: 'reed', name: 'Reed', fullName: 'Harrison Reed', position: 'Záložník', photoUrl: player(172098), matches: 17, goals: 1, assists: 2, yellowCards: 4, minutes: 1300 },
      { id: 'cairney', name: 'Cairney', fullName: 'Tom Cairney', position: 'Záložník', photoUrl: player(78399), matches: 15, goals: 1, assists: 2, yellowCards: 2, minutes: 950 },
      { id: 'willian', name: 'Willian', fullName: 'Willian', position: 'Záložník', photoUrl: player(52478), matches: 14, goals: 2, assists: 3, yellowCards: 1, minutes: 850 },
      { id: 'wilson-harry', name: 'Wilson', fullName: 'Harry Wilson', position: 'Záložník', photoUrl: player(172882), matches: 16, goals: 3, assists: 2, yellowCards: 1, minutes: 1000 },
      // Útočníci
      { id: 'muniz', name: 'Muniz', fullName: 'Rodrigo Muniz', position: 'Útočník', photoUrl: player(481353), matches: 21, goals: 8, assists: 2, yellowCards: 2, minutes: 1600 },
      { id: 'vinicius', name: 'Vinícius', fullName: 'Carlos Vinícius', position: 'Útočník', photoUrl: player(199018), matches: 12, goals: 3, assists: 1, yellowCards: 1, minutes: 650 },
      { id: 'raul-jimenez', name: 'Jiménez', fullName: 'Raúl Jiménez', position: 'Útočník', photoUrl: player(100886), matches: 10, goals: 2, assists: 1, yellowCards: 0, minutes: 500 },
    ],
  },

  // 13-20 budou v další části
  // 13. WOLVES
  {
    id: 'wolves',
    name: 'Wolverhampton',
    shortName: 'Wolves',
    logoUrl: badge(39),
    logoSmall: badge(39, 25),
    stadium: 'Molineux Stadium',
    stadiumCapacity: 32050,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Molineux_Stadium_from_above_-_geograph.org.uk_-_3474116.jpg/1280px-Molineux_Stadium_from_above_-_geograph.org.uk_-_3474116.jpg',
    stadiumMapLat: 52.5903,
    stadiumMapLng: -2.1304,
    country: 'Anglie',
    founded: 1877,
    points: 33,
    wins: 9,
    draws: 6,
    losses: 9,
    goalsFor: 34,
    goalsAgainst: 38,
    players: [
      // Brankáři
      { id: 'sa', name: 'Sá', fullName: 'José Sá', position: 'Brankář', photoUrl: player(101668), matches: 21, goals: 0, assists: 0, yellowCards: 1, minutes: 1890, cleanSheets: 5 },
      { id: 'bentley', name: 'Bentley', fullName: 'Daniel Bentley', position: 'Brankář', photoUrl: player(106416), matches: 4, goals: 0, assists: 0, yellowCards: 0, minutes: 360, cleanSheets: 1 },
      // Obránci
      { id: 'semedo', name: 'Semedo', fullName: 'Nélson Semedo', position: 'Obránce', photoUrl: player(148884), matches: 19, goals: 1, assists: 2, yellowCards: 4, minutes: 1600 },
      { id: 'dawson', name: 'Dawson', fullName: 'Craig Dawson', position: 'Obránce', photoUrl: player(57688), matches: 18, goals: 2, assists: 0, yellowCards: 5, minutes: 1500 },
      { id: 'toti', name: 'Toti', fullName: 'Toti Gomes', position: 'Obránce', photoUrl: player(468356), matches: 17, goals: 0, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'ait-nouri', name: 'Aït-Nouri', fullName: 'Rayan Aït-Nouri', position: 'Obránce', photoUrl: player(454498), matches: 20, goals: 1, assists: 4, yellowCards: 3, minutes: 1700 },
      { id: 'bueno', name: 'Bueno', fullName: 'Hugo Bueno', position: 'Obránce', photoUrl: player(495686), matches: 14, goals: 0, assists: 2, yellowCards: 2, minutes: 1050 },
      { id: 'kilman-wol', name: 'Kilman', fullName: 'Max Kilman', position: 'Obránce', photoUrl: player(430656), matches: 16, goals: 1, assists: 0, yellowCards: 2, minutes: 1300 },
      // Záložníci
      { id: 'lemina', name: 'Lemina', fullName: 'Mario Lemina', position: 'Záložník', photoUrl: player(123924), matches: 20, goals: 2, assists: 2, yellowCards: 6, minutes: 1650 },
      { id: 'joao-gomes', name: 'J. Gomes', fullName: 'João Gomes', position: 'Záložník', photoUrl: player(477816), matches: 21, goals: 1, assists: 3, yellowCards: 7, minutes: 1750 },
      { id: 'sarabia', name: 'Sarabia', fullName: 'Pablo Sarabia', position: 'Záložník', photoUrl: player(95915), matches: 18, goals: 4, assists: 3, yellowCards: 2, minutes: 1300 },
      { id: 'neto-wol', name: 'Neto', fullName: 'Pedro Neto', position: 'Záložník', photoUrl: player(448039), matches: 19, goals: 3, assists: 6, yellowCards: 1, minutes: 1400 },
      { id: 'traore-wol', name: 'Traoré', fullName: 'Adama Traoré', position: 'Záložník', photoUrl: player(195971), matches: 15, goals: 1, assists: 2, yellowCards: 2, minutes: 900 },
      { id: 'nunes-wol', name: 'Nunes', fullName: 'Matheus Nunes', position: 'Záložník', photoUrl: player(435904), matches: 12, goals: 1, assists: 1, yellowCards: 1, minutes: 750 },
      { id: 'doyle', name: 'Doyle', fullName: 'Tommy Doyle', position: 'Záložník', photoUrl: player(449188), matches: 10, goals: 1, assists: 1, yellowCards: 1, minutes: 550 },
      // Útočníci
      { id: 'hwang', name: 'Hwang', fullName: 'Hwang Hee-chan', position: 'Útočník', photoUrl: player(206851), matches: 21, goals: 8, assists: 4, yellowCards: 2, minutes: 1650 },
      { id: 'cunha', name: 'Cunha', fullName: 'Matheus Cunha', position: 'Útočník', photoUrl: player(209065), matches: 22, goals: 10, assists: 5, yellowCards: 3, minutes: 1800 },
      { id: 'kalajdzic', name: 'Kalajdžić', fullName: 'Sasa Kalajdžić', position: 'Útočník', photoUrl: player(227049), matches: 8, goals: 2, assists: 0, yellowCards: 0, minutes: 400 },
    ],
  },

  // 14. CRYSTAL PALACE
  {
    id: 'crystal-palace',
    name: 'Crystal Palace',
    shortName: 'Crystal Palace',
    logoUrl: badge(31),
    logoSmall: badge(31, 25),
    stadium: 'Selhurst Park',
    stadiumCapacity: 25486,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Selhurst_Park_27_September_2014.jpg/1280px-Selhurst_Park_27_September_2014.jpg',
    stadiumMapLat: 51.3983,
    stadiumMapLng: -0.0855,
    country: 'Anglie',
    founded: 1905,
    points: 32,
    wins: 8,
    draws: 8,
    losses: 8,
    goalsFor: 30,
    goalsAgainst: 32,
    players: [
      // Brankáři
      { id: 'henderson', name: 'Henderson', fullName: 'Dean Henderson', position: 'Brankář', photoUrl: player(169365), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 5 },
      { id: 'johnstone', name: 'Johnstone', fullName: 'Sam Johnstone', position: 'Brankář', photoUrl: player(85127), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 1 },
      // Obránci
      { id: 'munoz', name: 'Muñoz', fullName: 'Daniel Muñoz', position: 'Obránce', photoUrl: player(493192), matches: 19, goals: 2, assists: 2, yellowCards: 5, minutes: 1600 },
      { id: 'guehi', name: 'Guéhi', fullName: 'Marc Guéhi', position: 'Obránce', photoUrl: player(201944), matches: 21, goals: 1, assists: 1, yellowCards: 3, minutes: 1850 },
      { id: 'andersen', name: 'Andersen', fullName: 'Joachim Andersen', position: 'Obránce', photoUrl: player(156027), matches: 20, goals: 1, assists: 0, yellowCards: 4, minutes: 1750 },
      { id: 'mitchell', name: 'Mitchell', fullName: 'Tyrick Mitchell', position: 'Obránce', photoUrl: player(224178), matches: 18, goals: 0, assists: 3, yellowCards: 2, minutes: 1500 },
      { id: 'ward', name: 'Ward', fullName: 'Joel Ward', position: 'Obránce', photoUrl: player(54555), matches: 14, goals: 0, assists: 1, yellowCards: 2, minutes: 1050 },
      { id: 'clyne', name: 'Clyne', fullName: 'Nathaniel Clyne', position: 'Obránce', photoUrl: player(60700), matches: 12, goals: 0, assists: 1, yellowCards: 1, minutes: 850 },
      // Záložníci
      { id: 'lerma', name: 'Lerma', fullName: 'Jefferson Lerma', position: 'Záložník', photoUrl: player(171620), matches: 19, goals: 1, assists: 2, yellowCards: 6, minutes: 1550 },
      { id: 'doucoure-cp', name: 'Doucouré', fullName: 'Cheick Doucouré', position: 'Záložník', photoUrl: player(448002), matches: 18, goals: 0, assists: 2, yellowCards: 4, minutes: 1400 },
      { id: 'eze', name: 'Eze', fullName: 'Eberechi Eze', position: 'Záložník', photoUrl: player(200692), matches: 21, goals: 6, assists: 4, yellowCards: 2, minutes: 1700 },
      { id: 'olise', name: 'Olise', fullName: 'Michael Olise', position: 'Záložník', photoUrl: player(456498), matches: 17, goals: 7, assists: 5, yellowCards: 1, minutes: 1300 },
      { id: 'schlupp', name: 'Schlupp', fullName: 'Jeffrey Schlupp', position: 'Záložník', photoUrl: player(101582), matches: 15, goals: 1, assists: 2, yellowCards: 2, minutes: 950 },
      { id: 'ayew', name: 'Ayew', fullName: 'Jordan Ayew', position: 'Záložník', photoUrl: player(113689), matches: 18, goals: 3, assists: 3, yellowCards: 2, minutes: 1100 },
      { id: 'hughes', name: 'Hughes', fullName: 'Will Hughes', position: 'Záložník', photoUrl: player(101505), matches: 14, goals: 1, assists: 2, yellowCards: 3, minutes: 900 },
      { id: 'riedewald', name: 'Riedewald', fullName: 'Jairo Riedewald', position: 'Záložník', photoUrl: player(176093), matches: 10, goals: 0, assists: 1, yellowCards: 1, minutes: 550 },
      // Útočníci
      { id: 'edouard', name: 'Édouard', fullName: 'Odsonne Édouard', position: 'Útočník', photoUrl: player(200048), matches: 20, goals: 5, assists: 3, yellowCards: 2, minutes: 1400 },
      { id: 'mateta', name: 'Mateta', fullName: 'Jean-Philippe Mateta', position: 'Útočník', photoUrl: player(449150), matches: 19, goals: 8, assists: 2, yellowCards: 1, minutes: 1250 },
    ],
  },

  // 15. BRENTFORD
  {
    id: 'brentford',
    name: 'Brentford',
    shortName: 'Brentford',
    logoUrl: badge(94),
    logoSmall: badge(94, 25),
    stadium: 'Gtech Community Stadium',
    stadiumCapacity: 17250,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brentford_Community_Stadium_2021-07-03.jpg/1280px-Brentford_Community_Stadium_2021-07-03.jpg',
    stadiumMapLat: 51.4907,
    stadiumMapLng: -0.2894,
    country: 'Anglie',
    founded: 1889,
    points: 31,
    wins: 8,
    draws: 7,
    losses: 9,
    goalsFor: 38,
    goalsAgainst: 40,
    players: [
      // Brankáři
      { id: 'flekken', name: 'Flekken', fullName: 'Mark Flekken', position: 'Brankář', photoUrl: player(107271), matches: 21, goals: 0, assists: 0, yellowCards: 1, minutes: 1890, cleanSheets: 4 },
      { id: 'cox', name: 'Cox', fullName: 'Matthew Cox', position: 'Brankář', photoUrl: player(449173), matches: 4, goals: 0, assists: 0, yellowCards: 0, minutes: 360, cleanSheets: 0 },
      // Obránci
      { id: 'roerslev', name: 'Roerslev', fullName: 'Mads Roerslev', position: 'Obránce', photoUrl: player(445333), matches: 18, goals: 0, assists: 2, yellowCards: 3, minutes: 1500 },
      { id: 'collins', name: 'Collins', fullName: 'Nathan Collins', position: 'Obránce', photoUrl: player(444148), matches: 20, goals: 2, assists: 1, yellowCards: 4, minutes: 1700 },
      { id: 'pinnock', name: 'Pinnock', fullName: 'Ethan Pinnock', position: 'Obránce', photoUrl: player(161891), matches: 19, goals: 1, assists: 0, yellowCards: 3, minutes: 1600 },
      { id: 'henry', name: 'Henry', fullName: 'Rico Henry', position: 'Obránce', photoUrl: player(166775), matches: 15, goals: 0, assists: 3, yellowCards: 2, minutes: 1200 },
      { id: 'mee', name: 'Mee', fullName: 'Ben Mee', position: 'Obránce', photoUrl: player(59833), matches: 16, goals: 1, assists: 0, yellowCards: 2, minutes: 1300 },
      { id: 'ajer', name: 'Ajer', fullName: 'Kristoffer Ajer', position: 'Obránce', photoUrl: player(205047), matches: 14, goals: 0, assists: 1, yellowCards: 2, minutes: 1050 },
      // Záložníci
      { id: 'norgaard', name: 'Nørgaard', fullName: 'Christian Nørgaard', position: 'Záložník', photoUrl: player(80346), matches: 20, goals: 2, assists: 2, yellowCards: 5, minutes: 1700 },
      { id: 'janelt', name: 'Janelt', fullName: 'Vitaly Janelt', position: 'Záložník', photoUrl: player(243519), matches: 19, goals: 1, assists: 3, yellowCards: 4, minutes: 1550 },
      { id: 'mbeumo', name: 'Mbeumo', fullName: 'Bryan Mbeumo', position: 'Záložník', photoUrl: player(426165), matches: 22, goals: 10, assists: 5, yellowCards: 2, minutes: 1850 },
      { id: 'damsgaard', name: 'Damsgaard', fullName: 'Mikkel Damsgaard', position: 'Záložník', photoUrl: player(440246), matches: 17, goals: 3, assists: 4, yellowCards: 1, minutes: 1200 },
      { id: 'jensen-bren', name: 'Jensen', fullName: 'Mathias Jensen', position: 'Záložník', photoUrl: player(204359), matches: 18, goals: 2, assists: 4, yellowCards: 3, minutes: 1300 },
      { id: 'onyeka', name: 'Onyeka', fullName: 'Frank Onyeka', position: 'Záložník', photoUrl: player(437088), matches: 15, goals: 0, assists: 2, yellowCards: 4, minutes: 950 },
      { id: 'lewis-potter', name: 'Lewis-Potter', fullName: 'Keane Lewis-Potter', position: 'Záložník', photoUrl: player(446255), matches: 14, goals: 2, assists: 2, yellowCards: 1, minutes: 850 },
      { id: 'schade', name: 'Schade', fullName: 'Kevin Schade', position: 'Záložník', photoUrl: player(478061), matches: 16, goals: 3, assists: 2, yellowCards: 0, minutes: 900 },
      // Útočníci
      { id: 'toney', name: 'Toney', fullName: 'Ivan Toney', position: 'Útočník', photoUrl: player(107655), matches: 18, goals: 8, assists: 3, yellowCards: 2, minutes: 1400 },
      { id: 'wissa', name: 'Wissa', fullName: 'Yoane Wissa', position: 'Útočník', photoUrl: player(241728), matches: 19, goals: 6, assists: 3, yellowCards: 1, minutes: 1200 },
    ],
  },

  // 16. EVERTON
  {
    id: 'everton',
    name: 'Everton',
    shortName: 'Everton',
    logoUrl: badge(11),
    logoSmall: badge(11, 25),
    stadium: 'Goodison Park',
    stadiumCapacity: 39414,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Goodison_Park_2005.jpg/1280px-Goodison_Park_2005.jpg',
    stadiumMapLat: 53.4387,
    stadiumMapLng: -2.9663,
    country: 'Anglie',
    founded: 1878,
    points: 26,
    wins: 6,
    draws: 8,
    losses: 10,
    goalsFor: 25,
    goalsAgainst: 32,
    players: [
      // Brankáři
      { id: 'pickford', name: 'Pickford', fullName: 'Jordan Pickford', position: 'Brankář', photoUrl: player(98747), matches: 22, goals: 0, assists: 0, yellowCards: 2, minutes: 1980, cleanSheets: 5 },
      { id: 'virginia', name: 'Virginia', fullName: 'João Virginia', position: 'Brankář', photoUrl: player(244852), matches: 3, goals: 0, assists: 0, yellowCards: 0, minutes: 270, cleanSheets: 0 },
      // Obránci
      { id: 'coleman', name: 'Coleman', fullName: 'Séamus Coleman', position: 'Obránce', photoUrl: player(40266), matches: 16, goals: 0, assists: 1, yellowCards: 3, minutes: 1300 },
      { id: 'tarkowski', name: 'Tarkowski', fullName: 'James Tarkowski', position: 'Obránce', photoUrl: player(102970), matches: 21, goals: 2, assists: 0, yellowCards: 5, minutes: 1850 },
      { id: 'branthwaite', name: 'Branthwaite', fullName: 'Jarrad Branthwaite', position: 'Obránce', photoUrl: player(447379), matches: 19, goals: 2, assists: 1, yellowCards: 3, minutes: 1650 },
      { id: 'mykolenko', name: 'Mykolenko', fullName: 'Vitaliy Mykolenko', position: 'Obránce', photoUrl: player(232460), matches: 20, goals: 0, assists: 2, yellowCards: 4, minutes: 1700 },
      { id: 'keane', name: 'Keane', fullName: 'Michael Keane', position: 'Obránce', photoUrl: player(101501), matches: 14, goals: 1, assists: 0, yellowCards: 2, minutes: 1100 },
      { id: 'patterson', name: 'Patterson', fullName: 'Nathan Patterson', position: 'Obránce', photoUrl: player(447373), matches: 12, goals: 0, assists: 1, yellowCards: 1, minutes: 850 },
      { id: 'godfrey', name: 'Godfrey', fullName: 'Ben Godfrey', position: 'Obránce', photoUrl: player(198098), matches: 10, goals: 0, assists: 0, yellowCards: 2, minutes: 700 },
      // Záložníci
      { id: 'gueye', name: 'Gueye', fullName: 'Idrissa Gueye', position: 'Záložník', photoUrl: player(80217), matches: 18, goals: 1, assists: 2, yellowCards: 6, minutes: 1450 },
      { id: 'onana-eve', name: 'Onana', fullName: 'Amadou Onana', position: 'Záložník', photoUrl: player(473542), matches: 20, goals: 3, assists: 1, yellowCards: 5, minutes: 1650 },
      { id: 'doucoure-eve', name: 'Doucouré', fullName: 'Abdoulaye Doucouré', position: 'Záložník', photoUrl: player(116781), matches: 19, goals: 2, assists: 3, yellowCards: 4, minutes: 1550 },
      { id: 'mcneil', name: 'McNeil', fullName: 'Dwight McNeil', position: 'Záložník', photoUrl: player(208680), matches: 21, goals: 3, assists: 4, yellowCards: 2, minutes: 1750 },
      { id: 'harrison', name: 'Harrison', fullName: 'Jack Harrison', position: 'Záložník', photoUrl: player(103025), matches: 17, goals: 2, assists: 3, yellowCards: 1, minutes: 1200 },
      { id: 'garner', name: 'Garner', fullName: 'James Garner', position: 'Záložník', photoUrl: player(444153), matches: 15, goals: 1, assists: 2, yellowCards: 3, minutes: 1000 },
      { id: 'lindstrom', name: 'Lindstrøm', fullName: 'Jesper Lindstrøm', position: 'Záložník', photoUrl: player(440281), matches: 14, goals: 2, assists: 1, yellowCards: 1, minutes: 850 },
      // Útočníci
      { id: 'calvert-lewin', name: 'Calvert-Lewin', fullName: 'Dominic Calvert-Lewin', position: 'Útočník', photoUrl: player(177815), matches: 18, goals: 6, assists: 2, yellowCards: 3, minutes: 1350 },
      { id: 'beto', name: 'Beto', fullName: 'Beto', position: 'Útočník', photoUrl: player(456496), matches: 16, goals: 4, assists: 1, yellowCards: 2, minutes: 950 },
      { id: 'dobbin', name: 'Dobbin', fullName: 'Lewis Dobbin', position: 'Útočník', photoUrl: player(449169), matches: 8, goals: 1, assists: 1, yellowCards: 0, minutes: 400 },
    ],
  },

  // 17. NOTTINGHAM FOREST
  {
    id: 'nottingham-forest',
    name: 'Nottingham Forest',
    shortName: 'Forest',
    logoUrl: badge(17),
    logoSmall: badge(17, 25),
    stadium: 'City Ground',
    stadiumCapacity: 30445,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CityGroundAugust2022.jpg/1280px-CityGroundAugust2022.jpg',
    stadiumMapLat: 52.9400,
    stadiumMapLng: -1.1328,
    country: 'Anglie',
    founded: 1865,
    points: 29,
    wins: 7,
    draws: 8,
    losses: 9,
    goalsFor: 30,
    goalsAgainst: 35,
    players: [
      // Brankáři
      { id: 'sels', name: 'Sels', fullName: 'Matz Sels', position: 'Brankář', photoUrl: player(84487), matches: 21, goals: 0, assists: 0, yellowCards: 1, minutes: 1890, cleanSheets: 5 },
      { id: 'turner-nf', name: 'Turner', fullName: 'Matt Turner', position: 'Brankář', photoUrl: player(175955), matches: 4, goals: 0, assists: 0, yellowCards: 0, minutes: 360, cleanSheets: 1 },
      // Obránci
      { id: 'aina', name: 'Aina', fullName: 'Ola Aina', position: 'Obránce', photoUrl: player(172771), matches: 20, goals: 1, assists: 3, yellowCards: 4, minutes: 1700 },
      { id: 'murillo', name: 'Murillo', fullName: 'Murillo', position: 'Obránce', photoUrl: player(462128), matches: 21, goals: 1, assists: 1, yellowCards: 5, minutes: 1850 },
      { id: 'boly', name: 'Boly', fullName: 'Willy Boly', position: 'Obránce', photoUrl: player(90998), matches: 17, goals: 1, assists: 0, yellowCards: 3, minutes: 1400 },
      { id: 'williams-nf', name: 'Williams', fullName: 'Neco Williams', position: 'Obránce', photoUrl: player(468178), matches: 18, goals: 0, assists: 4, yellowCards: 3, minutes: 1500 },
      { id: 'toffolo', name: 'Toffolo', fullName: 'Harry Toffolo', position: 'Obránce', photoUrl: player(161895), matches: 14, goals: 0, assists: 2, yellowCards: 2, minutes: 1050 },
      { id: 'worrall', name: 'Worrall', fullName: 'Joe Worrall', position: 'Obránce', photoUrl: player(176294), matches: 12, goals: 0, assists: 0, yellowCards: 2, minutes: 850 },
      { id: 'aurier', name: 'Aurier', fullName: 'Serge Aurier', position: 'Obránce', photoUrl: player(127754), matches: 10, goals: 0, assists: 1, yellowCards: 2, minutes: 650 },
      // Záložníci
      { id: 'dominguez', name: 'Domínguez', fullName: 'Nicolás Domínguez', position: 'Záložník', photoUrl: player(428456), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1550 },
      { id: 'yates', name: 'Yates', fullName: 'Ryan Yates', position: 'Záložník', photoUrl: player(176300), matches: 18, goals: 2, assists: 1, yellowCards: 6, minutes: 1450 },
      { id: 'elanga', name: 'Elanga', fullName: 'Anthony Elanga', position: 'Záložník', photoUrl: player(450430), matches: 21, goals: 4, assists: 4, yellowCards: 2, minutes: 1650 },
      { id: 'hudson-odoi', name: 'Hudson-Odoi', fullName: 'Callum Hudson-Odoi', position: 'Záložník', photoUrl: player(199717), matches: 19, goals: 4, assists: 5, yellowCards: 1, minutes: 1400 },
      { id: 'sangare', name: 'Sangaré', fullName: 'Ibrahim Sangaré', position: 'Záložník', photoUrl: player(222328), matches: 17, goals: 1, assists: 2, yellowCards: 4, minutes: 1200 },
      { id: 'gibbs-white', name: 'Gibbs-White', fullName: 'Morgan Gibbs-White', position: 'Záložník', photoUrl: player(204363), matches: 20, goals: 5, assists: 6, yellowCards: 3, minutes: 1600 },
      { id: 'danilo', name: 'Danilo', fullName: 'Danilo', position: 'Záložník', photoUrl: player(490028), matches: 15, goals: 1, assists: 1, yellowCards: 3, minutes: 1000 },
      { id: 'johnson-nf', name: 'Johnson', fullName: 'Brennan Johnson', position: 'Záložník', photoUrl: player(434150), matches: 12, goals: 2, assists: 2, yellowCards: 0, minutes: 750 },
      // Útočníci
      { id: 'awoniyi', name: 'Awoniyi', fullName: 'Taiwo Awoniyi', position: 'Útočník', photoUrl: player(208611), matches: 20, goals: 6, assists: 2, yellowCards: 2, minutes: 1500 },
      { id: 'wood', name: 'Wood', fullName: 'Chris Wood', position: 'Útočník', photoUrl: player(82254), matches: 19, goals: 7, assists: 2, yellowCards: 1, minutes: 1350 },
    ],
  },

  // 18. LUTON TOWN
  {
    id: 'luton',
    name: 'Luton Town',
    shortName: 'Luton',
    logoUrl: badge(163),
    logoSmall: badge(163, 25),
    stadium: 'Kenilworth Road',
    stadiumCapacity: 10356,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kenilworth_Road_Luton_2020-02-15.jpg/1280px-Kenilworth_Road_Luton_2020-02-15.jpg',
    stadiumMapLat: 51.8841,
    stadiumMapLng: -0.4316,
    country: 'Anglie',
    founded: 1885,
    points: 22,
    wins: 5,
    draws: 7,
    losses: 12,
    goalsFor: 28,
    goalsAgainst: 42,
    players: [
      // Brankáři
      { id: 'kaminski', name: 'Kaminski', fullName: 'Thomas Kaminski', position: 'Brankář', photoUrl: player(133814), matches: 22, goals: 0, assists: 0, yellowCards: 1, minutes: 1980, cleanSheets: 3 },
      { id: 'shea', name: 'Shea', fullName: 'James Shea', position: 'Brankář', photoUrl: player(60859), matches: 3, goals: 0, assists: 0, yellowCards: 0, minutes: 270, cleanSheets: 0 },
      // Obránci
      { id: 'burke', name: 'Burke', fullName: 'Reece Burke', position: 'Obránce', photoUrl: player(177819), matches: 18, goals: 1, assists: 0, yellowCards: 4, minutes: 1500 },
      { id: 'mengi', name: 'Mengi', fullName: 'Teden Mengi', position: 'Obránce', photoUrl: player(464405), matches: 17, goals: 0, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'lockyer', name: 'Lockyer', fullName: 'Tom Lockyer', position: 'Obránce', photoUrl: player(128189), matches: 12, goals: 1, assists: 0, yellowCards: 2, minutes: 1000 },
      { id: 'doughty', name: 'Doughty', fullName: 'Alfie Doughty', position: 'Obránce', photoUrl: player(446261), matches: 20, goals: 2, assists: 5, yellowCards: 3, minutes: 1700 },
      { id: 'osho', name: 'Osho', fullName: 'Gabriel Osho', position: 'Obránce', photoUrl: player(449152), matches: 16, goals: 1, assists: 0, yellowCards: 2, minutes: 1300 },
      { id: 'potts', name: 'Potts', fullName: 'Dan Potts', position: 'Obránce', photoUrl: player(86035), matches: 14, goals: 0, assists: 1, yellowCards: 2, minutes: 1050 },
      { id: 'bell', name: 'Bell', fullName: 'Amari Bell', position: 'Obránce', photoUrl: player(161899), matches: 12, goals: 0, assists: 1, yellowCards: 1, minutes: 850 },
      // Záložníci
      { id: 'lokonga', name: 'Lokonga', fullName: 'Albert Lokonga', position: 'Záložník', photoUrl: player(234295), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1550 },
      { id: 'clark', name: 'Clark', fullName: 'Jordan Clark', position: 'Záložník', photoUrl: player(103327), matches: 20, goals: 2, assists: 3, yellowCards: 4, minutes: 1650 },
      { id: 'ogbene', name: 'Ogbene', fullName: 'Chiedozie Ogbene', position: 'Záložník', photoUrl: player(449149), matches: 18, goals: 3, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'tahith-chong', name: 'Chong', fullName: 'Tahith Chong', position: 'Záložník', photoUrl: player(244865), matches: 17, goals: 3, assists: 4, yellowCards: 1, minutes: 1200 },
      { id: 'berry', name: 'Berry', fullName: 'Luke Berry', position: 'Záložník', photoUrl: player(104197), matches: 15, goals: 2, assists: 1, yellowCards: 3, minutes: 950 },
      { id: 'mpanzu', name: 'Mpanzu', fullName: 'Pelly Mpanzu', position: 'Záložník', photoUrl: player(143693), matches: 14, goals: 1, assists: 2, yellowCards: 3, minutes: 850 },
      { id: 'townsend', name: 'Townsend', fullName: 'Andros Townsend', position: 'Záložník', photoUrl: player(79299), matches: 16, goals: 2, assists: 3, yellowCards: 1, minutes: 1000 },
      // Útočníci
      { id: 'adebayo', name: 'Adebayo', fullName: 'Elijah Adebayo', position: 'Útočník', photoUrl: player(186484), matches: 21, goals: 5, assists: 3, yellowCards: 3, minutes: 1600 },
      { id: 'morris', name: 'Morris', fullName: 'Carlton Morris', position: 'Útočník', photoUrl: player(176293), matches: 20, goals: 7, assists: 2, yellowCards: 2, minutes: 1550 },
      { id: 'woodrow', name: 'Woodrow', fullName: 'Cauley Woodrow', position: 'Útočník', photoUrl: player(111037), matches: 12, goals: 2, assists: 1, yellowCards: 0, minutes: 600 },
    ],
  },

  // 19. BURNLEY
  {
    id: 'burnley',
    name: 'Burnley',
    shortName: 'Burnley',
    logoUrl: badge(90),
    logoSmall: badge(90, 25),
    stadium: 'Turf Moor',
    stadiumCapacity: 21944,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Turf_Moor%2C_home_of_Burnley_FC.jpg/1280px-Turf_Moor%2C_home_of_Burnley_FC.jpg',
    stadiumMapLat: 53.7889,
    stadiumMapLng: -2.2303,
    country: 'Anglie',
    founded: 1882,
    points: 20,
    wins: 4,
    draws: 8,
    losses: 12,
    goalsFor: 25,
    goalsAgainst: 45,
    players: [
      // Brankáři
      { id: 'muric', name: 'Muric', fullName: 'Arijanet Muric', position: 'Brankář', photoUrl: player(471706), matches: 21, goals: 0, assists: 0, yellowCards: 2, minutes: 1890, cleanSheets: 3 },
      { id: 'trafford', name: 'Trafford', fullName: 'James Trafford', position: 'Brankář', photoUrl: player(475091), matches: 4, goals: 0, assists: 0, yellowCards: 0, minutes: 360, cleanSheets: 0 },
      // Obránci
      { id: 'roberts', name: 'Roberts', fullName: 'Connor Roberts', position: 'Obránce', photoUrl: player(176458), matches: 19, goals: 0, assists: 2, yellowCards: 4, minutes: 1600 },
      { id: 'beyer', name: 'Beyer', fullName: 'Jordan Beyer', position: 'Obránce', photoUrl: player(434202), matches: 18, goals: 0, assists: 1, yellowCards: 3, minutes: 1500 },
      { id: 'oshea', name: "O'Shea", fullName: "Dara O'Shea", position: 'Obránce', photoUrl: player(444748), matches: 20, goals: 2, assists: 0, yellowCards: 4, minutes: 1700 },
      { id: 'taylor', name: 'Taylor', fullName: 'Charlie Taylor', position: 'Obránce', photoUrl: player(106414), matches: 17, goals: 0, assists: 3, yellowCards: 3, minutes: 1400 },
      { id: 'esteve', name: 'Esteve', fullName: 'Maxime Estève', position: 'Obránce', photoUrl: player(497189), matches: 14, goals: 0, assists: 0, yellowCards: 2, minutes: 1100 },
      { id: 'vitinho', name: 'Vitinho', fullName: 'Vitinho', position: 'Obránce', photoUrl: player(541176), matches: 12, goals: 0, assists: 1, yellowCards: 1, minutes: 850 },
      // Záložníci
      { id: 'brownhill', name: 'Brownhill', fullName: 'Josh Brownhill', position: 'Záložník', photoUrl: player(176456), matches: 21, goals: 2, assists: 2, yellowCards: 6, minutes: 1800 },
      { id: 'cullen', name: 'Cullen', fullName: 'Josh Cullen', position: 'Záložník', photoUrl: player(176455), matches: 20, goals: 1, assists: 3, yellowCards: 5, minutes: 1700 },
      { id: 'zaroury', name: 'Zaroury', fullName: 'Anass Zaroury', position: 'Záložník', photoUrl: player(542825), matches: 18, goals: 2, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'benson', name: 'Benson', fullName: 'Manuel Benson', position: 'Záložník', photoUrl: player(241713), matches: 17, goals: 3, assists: 2, yellowCards: 1, minutes: 1200 },
      { id: 'ramsey-bur', name: 'Ramsey', fullName: 'Aaron Ramsey', position: 'Záložník', photoUrl: player(52666), matches: 15, goals: 1, assists: 2, yellowCards: 3, minutes: 950 },
      { id: 'guomundsson', name: 'Guðmundsson', fullName: 'Jóhann Guðmundsson', position: 'Záložník', photoUrl: player(55461), matches: 16, goals: 2, assists: 3, yellowCards: 1, minutes: 1050 },
      { id: 'sarmiento', name: 'Sarmiento', fullName: 'Jeremy Sarmiento', position: 'Záložník', photoUrl: player(478059), matches: 14, goals: 1, assists: 2, yellowCards: 0, minutes: 800 },
      { id: 'cork', name: 'Cork', fullName: 'Jack Cork', position: 'Záložník', photoUrl: player(57090), matches: 13, goals: 0, assists: 1, yellowCards: 3, minutes: 750 },
      // Útočníci
      { id: 'rodriguez', name: 'Rodriguez', fullName: 'Jay Rodriguez', position: 'Útočník', photoUrl: player(56979), matches: 19, goals: 4, assists: 1, yellowCards: 2, minutes: 1350 },
      { id: 'amdouni', name: 'Amdouni', fullName: 'Zeki Amdouni', position: 'Útočník', photoUrl: player(541170), matches: 17, goals: 3, assists: 2, yellowCards: 1, minutes: 1000 },
      { id: 'foster', name: 'Foster', fullName: 'Lyle Foster', position: 'Útočník', photoUrl: player(478062), matches: 15, goals: 2, assists: 1, yellowCards: 1, minutes: 850 },
    ],
  },

  // 20. SHEFFIELD UNITED
  {
    id: 'sheffield-united',
    name: 'Sheffield United',
    shortName: 'Sheffield Utd',
    logoUrl: badge(49),
    logoSmall: badge(49, 25),
    stadium: 'Bramall Lane',
    stadiumCapacity: 32050,
    stadiumImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bramall_Lane_from_the_air_%282020%29.jpg/1280px-Bramall_Lane_from_the_air_%282020%29.jpg',
    stadiumMapLat: 53.3703,
    stadiumMapLng: -1.4709,
    country: 'Anglie',
    founded: 1889,
    points: 16,
    wins: 3,
    draws: 7,
    losses: 14,
    goalsFor: 22,
    goalsAgainst: 52,
    players: [
      // Brankáři
      { id: 'foderingham', name: 'Foderingham', fullName: 'Wes Foderingham', position: 'Brankář', photoUrl: player(85633), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 2 },
      { id: 'grbic', name: 'Grbić', fullName: 'Ivo Grbić', position: 'Brankář', photoUrl: player(442186), matches: 5, goals: 0, assists: 0, yellowCards: 0, minutes: 450, cleanSheets: 0 },
      // Obránci
      { id: 'baldock', name: 'Baldock', fullName: 'George Baldock', position: 'Obránce', photoUrl: player(101379), matches: 18, goals: 0, assists: 1, yellowCards: 4, minutes: 1500 },
      { id: 'ahmedhodzic', name: 'Ahmedhodžić', fullName: 'Anel Ahmedhodžić', position: 'Obránce', photoUrl: player(439816), matches: 19, goals: 1, assists: 0, yellowCards: 5, minutes: 1600 },
      { id: 'robinson-su', name: 'Robinson', fullName: 'Jack Robinson', position: 'Obránce', photoUrl: player(68831), matches: 17, goals: 0, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'lowe', name: 'Lowe', fullName: 'Max Lowe', position: 'Obránce', photoUrl: player(197033), matches: 16, goals: 0, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'trusty', name: 'Trusty', fullName: 'Auston Trusty', position: 'Obránce', photoUrl: player(441127), matches: 14, goals: 0, assists: 0, yellowCards: 2, minutes: 1050 },
      { id: 'egan', name: 'Egan', fullName: 'John Egan', position: 'Obránce', photoUrl: player(82280), matches: 12, goals: 0, assists: 0, yellowCards: 2, minutes: 850 },
      { id: 'basham', name: 'Basham', fullName: 'Chris Basham', position: 'Obránce', photoUrl: player(58192), matches: 10, goals: 0, assists: 0, yellowCards: 1, minutes: 650 },
      // Záložníci
      { id: 'souza', name: 'Souza', fullName: 'Vini Souza', position: 'Záložník', photoUrl: player(454450), matches: 18, goals: 1, assists: 1, yellowCards: 6, minutes: 1450 },
      { id: 'norwood', name: 'Norwood', fullName: 'Oliver Norwood', position: 'Záložník', photoUrl: player(83571), matches: 19, goals: 1, assists: 3, yellowCards: 5, minutes: 1550 },
      { id: 'osborn', name: 'Osborn', fullName: 'Ben Osborn', position: 'Záložník', photoUrl: player(156736), matches: 17, goals: 2, assists: 2, yellowCards: 3, minutes: 1300 },
      { id: 'bogle', name: 'Bogle', fullName: 'Jayden Bogle', position: 'Záložník', photoUrl: player(209323), matches: 18, goals: 1, assists: 3, yellowCards: 2, minutes: 1400 },
      { id: 'hamer', name: 'Hamer', fullName: 'Gustavo Hamer', position: 'Záložník', photoUrl: player(437089), matches: 17, goals: 2, assists: 2, yellowCards: 4, minutes: 1350 },
      { id: 'berge', name: 'Berge', fullName: 'Sander Berge', position: 'Záložník', photoUrl: player(211628), matches: 16, goals: 2, assists: 2, yellowCards: 3, minutes: 1200 },
      { id: 'brooks', name: 'Brooks', fullName: 'James McAtee', position: 'Záložník', photoUrl: player(491701), matches: 14, goals: 3, assists: 2, yellowCards: 1, minutes: 950 },
      { id: 'khadra', name: 'Khadra', fullName: 'Reda Khadra', position: 'Záložník', photoUrl: player(449178), matches: 12, goals: 1, assists: 1, yellowCards: 0, minutes: 700 },
      // Útočníci
      { id: 'archer', name: 'Archer', fullName: 'Cameron Archer', position: 'Útočník', photoUrl: player(441141), matches: 20, goals: 4, assists: 1, yellowCards: 2, minutes: 1500 },
      { id: 'brewster', name: 'Brewster', fullName: 'Rhian Brewster', position: 'Útočník', photoUrl: player(244726), matches: 16, goals: 2, assists: 1, yellowCards: 1, minutes: 850 },
      { id: 'osula', name: 'Osula', fullName: 'Will Osula', position: 'Útočník', photoUrl: player(547502), matches: 10, goals: 1, assists: 0, yellowCards: 0, minutes: 450 },
    ],
  },
]

// Zápasy
export const matches: Match[] = [
  { id: 'match-1', homeTeamId: 'manchester-city', awayTeamId: 'manchester-united', homeScore: 3, awayScore: 1, date: 'Včera', played: true },
  { id: 'match-2', homeTeamId: 'arsenal', awayTeamId: 'liverpool', homeScore: 2, awayScore: 2, date: 'Sobota', played: true },
  { id: 'match-3', homeTeamId: 'chelsea', awayTeamId: 'arsenal', date: 'Sobota 15:00', played: false },
  { id: 'match-4', homeTeamId: 'liverpool', awayTeamId: 'manchester-city', date: 'Neděle 17:30', played: false },
]

// Novinky
export const news: NewsItem[] = [
  { id: 'novinka-1', title: 'Manchester City vyhrál další zápas! Haaland dal hattrick', content: 'Manchester City pokračuje ve skvělé formě.', tag: 'HLAVNÍ ZPRÁVA', emoji: '🏆', date: 'Před 2 hodinami', featured: true },
  { id: 'novinka-2', title: 'Arsenal jedná o novém útočníkovi', content: 'Arsenal údajně jedná o přestupu nového útočníka.', tag: 'TRANSFER', emoji: '⚡', date: 'Před 5 hodinami' },
  { id: 'novinka-3', title: 'Liverpool vs Chelsea - derby kola!', content: 'Tento víkend nás čeká velký zápas.', tag: 'ZÁPAS', emoji: '🔥', date: 'Včera' },
]

export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id)
}

export function getTeamsByPoints(): Team[] {
  return [...teams].sort((a, b) => b.points - a.points)
}
