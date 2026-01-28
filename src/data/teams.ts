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
      { id: 'ederson', name: 'Ederson', fullName: 'Ederson Moraes', position: 'Brankář', photoUrl: player(121160), matches: 22, goals: 0, assists: 1, yellowCards: 0, minutes: 1980, cleanSheets: 8 },
      { id: 'walker', name: 'Walker', fullName: 'Kyle Walker', position: 'Obránce', photoUrl: player(46459), matches: 20, goals: 0, assists: 2, yellowCards: 3, minutes: 1700 },
      { id: 'dias', name: 'Dias', fullName: 'Rúben Dias', position: 'Obránce', photoUrl: player(171314), matches: 20, goals: 2, assists: 1, yellowCards: 4, minutes: 1780 },
      { id: 'gvardiol', name: 'Gvardiol', fullName: 'Joško Gvardiol', position: 'Obránce', photoUrl: player(433594), matches: 21, goals: 3, assists: 2, yellowCards: 2, minutes: 1800 },
      { id: 'rodri', name: 'Rodri', fullName: 'Rodrigo Hernández', position: 'Záložník', photoUrl: player(220566), matches: 21, goals: 3, assists: 5, yellowCards: 6, minutes: 1850 },
      { id: 'debruyne', name: 'De Bruyne', fullName: 'Kevin De Bruyne', position: 'Záložník', photoUrl: player(61366), matches: 18, goals: 8, assists: 12, yellowCards: 3, minutes: 1420 },
      { id: 'bernardo', name: 'B. Silva', fullName: 'Bernardo Silva', position: 'Záložník', photoUrl: player(165809), matches: 22, goals: 5, assists: 6, yellowCards: 1, minutes: 1750 },
      { id: 'foden', name: 'Foden', fullName: 'Phil Foden', position: 'Záložník', photoUrl: player(209244), matches: 21, goals: 11, assists: 7, yellowCards: 1, minutes: 1680 },
      { id: 'grealish', name: 'Grealish', fullName: 'Jack Grealish', position: 'Záložník', photoUrl: player(172780), matches: 18, goals: 3, assists: 4, yellowCards: 2, minutes: 1200 },
      { id: 'haaland', name: 'Haaland', fullName: 'Erling Haaland', position: 'Útočník', photoUrl: player(223094), matches: 22, goals: 24, assists: 5, yellowCards: 2, minutes: 1856 },
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
      { id: 'raya', name: 'Raya', fullName: 'David Raya', position: 'Brankář', photoUrl: player(109533), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 9 },
      { id: 'white', name: 'White', fullName: 'Ben White', position: 'Obránce', photoUrl: player(201671), matches: 21, goals: 0, assists: 3, yellowCards: 2, minutes: 1850 },
      { id: 'saliba', name: 'Saliba', fullName: 'William Saliba', position: 'Obránce', photoUrl: player(223340), matches: 22, goals: 2, assists: 0, yellowCards: 3, minutes: 1980 },
      { id: 'gabriel', name: 'Gabriel', fullName: 'Gabriel Magalhães', position: 'Obránce', photoUrl: player(209807), matches: 21, goals: 3, assists: 1, yellowCards: 5, minutes: 1880 },
      { id: 'rice', name: 'Rice', fullName: 'Declan Rice', position: 'Záložník', photoUrl: player(204480), matches: 22, goals: 4, assists: 5, yellowCards: 6, minutes: 1950 },
      { id: 'odegaard', name: 'Ødegaard', fullName: 'Martin Ødegaard', position: 'Záložník', photoUrl: player(184029), matches: 21, goals: 7, assists: 9, yellowCards: 2, minutes: 1820 },
      { id: 'saka', name: 'Saka', fullName: 'Bukayo Saka', position: 'Záložník', photoUrl: player(223340), matches: 22, goals: 12, assists: 8, yellowCards: 2, minutes: 1900 },
      { id: 'martinelli', name: 'Martinelli', fullName: 'Gabriel Martinelli', position: 'Záložník', photoUrl: player(444145), matches: 20, goals: 6, assists: 4, yellowCards: 1, minutes: 1500 },
      { id: 'havertz', name: 'Havertz', fullName: 'Kai Havertz', position: 'Útočník', photoUrl: player(219847), matches: 21, goals: 9, assists: 4, yellowCards: 3, minutes: 1650 },
      { id: 'jesus', name: 'Jesus', fullName: 'Gabriel Jesus', position: 'Útočník', photoUrl: player(169187), matches: 18, goals: 5, assists: 3, yellowCards: 1, minutes: 1100 },
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
      { id: 'alisson', name: 'Alisson', fullName: 'Alisson Becker', position: 'Brankář', photoUrl: player(116535), matches: 21, goals: 0, assists: 1, yellowCards: 0, minutes: 1890, cleanSheets: 7 },
      { id: 'taa', name: 'Alexander-Arnold', fullName: 'Trent Alexander-Arnold', position: 'Obránce', photoUrl: player(169187), matches: 20, goals: 2, assists: 7, yellowCards: 3, minutes: 1720 },
      { id: 'vandijk', name: 'Van Dijk', fullName: 'Virgil van Dijk', position: 'Obránce', photoUrl: player(97032), matches: 22, goals: 3, assists: 1, yellowCards: 2, minutes: 1980 },
      { id: 'konate', name: 'Konaté', fullName: 'Ibrahima Konaté', position: 'Obránce', photoUrl: player(219316), matches: 18, goals: 1, assists: 0, yellowCards: 3, minutes: 1500 },
      { id: 'robertson', name: 'Robertson', fullName: 'Andrew Robertson', position: 'Obránce', photoUrl: player(122798), matches: 19, goals: 1, assists: 4, yellowCards: 4, minutes: 1600 },
      { id: 'mac', name: 'Mac Allister', fullName: 'Alexis Mac Allister', position: 'Záložník', photoUrl: player(209889), matches: 22, goals: 5, assists: 4, yellowCards: 5, minutes: 1900 },
      { id: 'szoboszlai', name: 'Szoboszlai', fullName: 'Dominik Szoboszlai', position: 'Záložník', photoUrl: player(225321), matches: 22, goals: 5, assists: 6, yellowCards: 4, minutes: 1750 },
      { id: 'diaz', name: 'L. Díaz', fullName: 'Luis Díaz', position: 'Záložník', photoUrl: player(196885), matches: 21, goals: 7, assists: 4, yellowCards: 1, minutes: 1650 },
      { id: 'salah', name: 'Salah', fullName: 'Mohamed Salah', position: 'Útočník', photoUrl: player(118748), matches: 22, goals: 15, assists: 10, yellowCards: 1, minutes: 1900 },
      { id: 'nunez', name: 'Núñez', fullName: 'Darwin Núñez', position: 'Útočník', photoUrl: player(447203), matches: 20, goals: 8, assists: 5, yellowCards: 3, minutes: 1400 },
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
      { id: 'emi', name: 'E. Martínez', fullName: 'Emiliano Martínez', position: 'Brankář', photoUrl: player(98980), matches: 22, goals: 0, assists: 0, yellowCards: 2, minutes: 1980, cleanSheets: 7 },
      { id: 'cash', name: 'Cash', fullName: 'Matty Cash', position: 'Obránce', photoUrl: player(166206), matches: 19, goals: 1, assists: 3, yellowCards: 4, minutes: 1650 },
      { id: 'konsa', name: 'Konsa', fullName: 'Ezri Konsa', position: 'Obránce', photoUrl: player(201666), matches: 21, goals: 2, assists: 1, yellowCards: 3, minutes: 1850 },
      { id: 'torres', name: 'Torres', fullName: 'Pau Torres', position: 'Obránce', photoUrl: player(211653), matches: 20, goals: 1, assists: 2, yellowCards: 2, minutes: 1750 },
      { id: 'digne', name: 'Digne', fullName: 'Lucas Digne', position: 'Obránce', photoUrl: player(107930), matches: 18, goals: 0, assists: 4, yellowCards: 3, minutes: 1500 },
      { id: 'mcginn', name: 'McGinn', fullName: 'John McGinn', position: 'Záložník', photoUrl: player(109053), matches: 21, goals: 4, assists: 4, yellowCards: 5, minutes: 1750 },
      { id: 'tielemans', name: 'Tielemans', fullName: 'Youri Tielemans', position: 'Záložník', photoUrl: player(202178), matches: 20, goals: 3, assists: 5, yellowCards: 4, minutes: 1600 },
      { id: 'bailey', name: 'Bailey', fullName: 'Leon Bailey', position: 'Záložník', photoUrl: player(215520), matches: 18, goals: 6, assists: 5, yellowCards: 2, minutes: 1200 },
      { id: 'rogers', name: 'Rogers', fullName: 'Morgan Rogers', position: 'Záložník', photoUrl: player(493225), matches: 19, goals: 4, assists: 3, yellowCards: 1, minutes: 1400 },
      { id: 'watkins', name: 'Watkins', fullName: 'Ollie Watkins', position: 'Útočník', photoUrl: player(178301), matches: 22, goals: 13, assists: 9, yellowCards: 2, minutes: 1900 },
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
      { id: 'vicario', name: 'Vicario', fullName: 'Guglielmo Vicario', position: 'Brankář', photoUrl: player(180974), matches: 22, goals: 0, assists: 0, yellowCards: 1, minutes: 1980, cleanSheets: 6 },
      { id: 'porro', name: 'Porro', fullName: 'Pedro Porro', position: 'Obránce', photoUrl: player(209758), matches: 21, goals: 2, assists: 4, yellowCards: 5, minutes: 1800 },
      { id: 'romero', name: 'Romero', fullName: 'Cristian Romero', position: 'Obránce', photoUrl: player(221820), matches: 18, goals: 1, assists: 1, yellowCards: 6, minutes: 1550 },
      { id: 'vvd-tot', name: 'Van de Ven', fullName: 'Micky van de Ven', position: 'Obránce', photoUrl: player(450618), matches: 19, goals: 1, assists: 2, yellowCards: 3, minutes: 1650 },
      { id: 'udogie', name: 'Udogie', fullName: 'Destiny Udogie', position: 'Obránce', photoUrl: player(478035), matches: 20, goals: 0, assists: 3, yellowCards: 4, minutes: 1700 },
      { id: 'bissouma', name: 'Bissouma', fullName: 'Yves Bissouma', position: 'Záložník', photoUrl: player(194634), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1450 },
      { id: 'maddison', name: 'Maddison', fullName: 'James Maddison', position: 'Záložník', photoUrl: player(175949), matches: 19, goals: 6, assists: 7, yellowCards: 2, minutes: 1520 },
      { id: 'kulusevski', name: 'Kulusevski', fullName: 'Dejan Kulusevski', position: 'Záložník', photoUrl: player(232348), matches: 21, goals: 5, assists: 6, yellowCards: 3, minutes: 1700 },
      { id: 'johnson', name: 'Johnson', fullName: 'Brennan Johnson', position: 'Záložník', photoUrl: player(434150), matches: 22, goals: 5, assists: 3, yellowCards: 1, minutes: 1400 },
      { id: 'son', name: 'Son', fullName: 'Son Heung-min', position: 'Útočník', photoUrl: player(85971), matches: 22, goals: 13, assists: 7, yellowCards: 1, minutes: 1850 },
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
      { id: 'sanchez', name: 'R. Sánchez', fullName: 'Robert Sánchez', position: 'Brankář', photoUrl: player(172778), matches: 18, goals: 0, assists: 0, yellowCards: 1, minutes: 1620, cleanSheets: 5 },
      { id: 'james', name: 'James', fullName: 'Reece James', position: 'Obránce', photoUrl: player(204722), matches: 10, goals: 1, assists: 2, yellowCards: 2, minutes: 800 },
      { id: 'fofana', name: 'Fofana', fullName: 'Wesley Fofana', position: 'Obránce', photoUrl: player(231748), matches: 16, goals: 0, assists: 1, yellowCards: 3, minutes: 1300 },
      { id: 'colwill', name: 'Colwill', fullName: 'Levi Colwill', position: 'Obránce', photoUrl: player(244851), matches: 19, goals: 1, assists: 2, yellowCards: 4, minutes: 1650 },
      { id: 'cucurella', name: 'Cucurella', fullName: 'Marc Cucurella', position: 'Obránce', photoUrl: player(173598), matches: 20, goals: 0, assists: 3, yellowCards: 3, minutes: 1700 },
      { id: 'caicedo', name: 'Caicedo', fullName: 'Moisés Caicedo', position: 'Záložník', photoUrl: player(490027), matches: 21, goals: 2, assists: 3, yellowCards: 5, minutes: 1800 },
      { id: 'enzo', name: 'Fernández', fullName: 'Enzo Fernández', position: 'Záložník', photoUrl: player(478082), matches: 20, goals: 2, assists: 4, yellowCards: 4, minutes: 1650 },
      { id: 'palmer', name: 'Palmer', fullName: 'Cole Palmer', position: 'Záložník', photoUrl: player(463560), matches: 22, goals: 14, assists: 8, yellowCards: 1, minutes: 1850 },
      { id: 'nkunku', name: 'Nkunku', fullName: 'Christopher Nkunku', position: 'Útočník', photoUrl: player(192634), matches: 15, goals: 5, assists: 3, yellowCards: 1, minutes: 900 },
      { id: 'jackson', name: 'Jackson', fullName: 'Nicolas Jackson', position: 'Útočník', photoUrl: player(448035), matches: 21, goals: 10, assists: 4, yellowCards: 2, minutes: 1600 },
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
      { id: 'pope', name: 'Pope', fullName: 'Nick Pope', position: 'Brankář', photoUrl: player(84149), matches: 15, goals: 0, assists: 0, yellowCards: 0, minutes: 1350, cleanSheets: 5 },
      { id: 'trippier', name: 'Trippier', fullName: 'Kieran Trippier', position: 'Obránce', photoUrl: player(61933), matches: 20, goals: 1, assists: 5, yellowCards: 4, minutes: 1750 },
      { id: 'schar', name: 'Schär', fullName: 'Fabian Schär', position: 'Obránce', photoUrl: player(95600), matches: 19, goals: 2, assists: 1, yellowCards: 4, minutes: 1650 },
      { id: 'botman', name: 'Botman', fullName: 'Sven Botman', position: 'Obránce', photoUrl: player(449177), matches: 18, goals: 1, assists: 0, yellowCards: 2, minutes: 1550 },
      { id: 'burn', name: 'Burn', fullName: 'Dan Burn', position: 'Obránce', photoUrl: player(60856), matches: 17, goals: 1, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'guimaraes', name: 'Guimarães', fullName: 'Bruno Guimarães', position: 'Záložník', photoUrl: player(238041), matches: 21, goals: 4, assists: 5, yellowCards: 6, minutes: 1820 },
      { id: 'joelinton', name: 'Joelinton', fullName: 'Joelinton', position: 'Záložník', photoUrl: player(169906), matches: 20, goals: 3, assists: 4, yellowCards: 7, minutes: 1700 },
      { id: 'gordon', name: 'Gordon', fullName: 'Anthony Gordon', position: 'Záložník', photoUrl: player(200652), matches: 22, goals: 8, assists: 7, yellowCards: 2, minutes: 1850 },
      { id: 'barnes', name: 'Barnes', fullName: 'Harvey Barnes', position: 'Záložník', photoUrl: player(171711), matches: 19, goals: 5, assists: 3, yellowCards: 1, minutes: 1350 },
      { id: 'isak', name: 'Isak', fullName: 'Alexander Isak', position: 'Útočník', photoUrl: player(219168), matches: 21, goals: 14, assists: 4, yellowCards: 1, minutes: 1780 },
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
      { id: 'onana', name: 'Onana', fullName: 'André Onana', position: 'Brankář', photoUrl: player(173983), matches: 22, goals: 0, assists: 0, yellowCards: 1, minutes: 1980, cleanSheets: 5 },
      { id: 'dalot', name: 'Dalot', fullName: 'Diogo Dalot', position: 'Obránce', photoUrl: player(223848), matches: 21, goals: 1, assists: 3, yellowCards: 5, minutes: 1850 },
      { id: 'maguire', name: 'Maguire', fullName: 'Harry Maguire', position: 'Obránce', photoUrl: player(95658), matches: 17, goals: 2, assists: 0, yellowCards: 4, minutes: 1400 },
      { id: 'martinez-mu', name: 'Martínez', fullName: 'Lisandro Martínez', position: 'Obránce', photoUrl: player(467169), matches: 16, goals: 0, assists: 1, yellowCards: 4, minutes: 1400 },
      { id: 'shaw', name: 'Shaw', fullName: 'Luke Shaw', position: 'Obránce', photoUrl: player(106760), matches: 10, goals: 0, assists: 2, yellowCards: 1, minutes: 800 },
      { id: 'casemiro', name: 'Casemiro', fullName: 'Casemiro', position: 'Záložník', photoUrl: player(61256), matches: 18, goals: 1, assists: 2, yellowCards: 6, minutes: 1400 },
      { id: 'mainoo', name: 'Mainoo', fullName: 'Kobbie Mainoo', position: 'Záložník', photoUrl: player(547498), matches: 18, goals: 3, assists: 2, yellowCards: 2, minutes: 1350 },
      { id: 'fernandes', name: 'Fernandes', fullName: 'Bruno Fernandes', position: 'Záložník', photoUrl: player(141746), matches: 22, goals: 7, assists: 6, yellowCards: 5, minutes: 1900 },
      { id: 'garnacho', name: 'Garnacho', fullName: 'Alejandro Garnacho', position: 'Záložník', photoUrl: player(516792), matches: 21, goals: 6, assists: 5, yellowCards: 2, minutes: 1500 },
      { id: 'hojlund', name: 'Højlund', fullName: 'Rasmus Højlund', position: 'Útočník', photoUrl: player(465411), matches: 19, goals: 8, assists: 2, yellowCards: 1, minutes: 1400 },
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
      { id: 'areola', name: 'Areola', fullName: 'Alphonse Areola', position: 'Brankář', photoUrl: player(110916), matches: 20, goals: 0, assists: 0, yellowCards: 0, minutes: 1800, cleanSheets: 4 },
      { id: 'coufal', name: 'Coufal', fullName: 'Vladimír Coufal', position: 'Obránce', photoUrl: player(96389), matches: 18, goals: 0, assists: 2, yellowCards: 4, minutes: 1550 },
      { id: 'zouma', name: 'Zouma', fullName: 'Kurt Zouma', position: 'Obránce', photoUrl: player(168627), matches: 17, goals: 1, assists: 0, yellowCards: 3, minutes: 1450 },
      { id: 'kilman', name: 'Kilman', fullName: 'Max Kilman', position: 'Obránce', photoUrl: player(430656), matches: 19, goals: 1, assists: 1, yellowCards: 2, minutes: 1650 },
      { id: 'emerson', name: 'Emerson', fullName: 'Emerson Palmieri', position: 'Obránce', photoUrl: player(115845), matches: 18, goals: 0, assists: 3, yellowCards: 3, minutes: 1500 },
      { id: 'soucek', name: 'Souček', fullName: 'Tomáš Souček', position: 'Záložník', photoUrl: player(169718), matches: 21, goals: 4, assists: 2, yellowCards: 5, minutes: 1800 },
      { id: 'paqueta', name: 'Paquetá', fullName: 'Lucas Paquetá', position: 'Záložník', photoUrl: player(244851), matches: 19, goals: 3, assists: 5, yellowCards: 4, minutes: 1600 },
      { id: 'ward-prowse', name: 'Ward-Prowse', fullName: 'James Ward-Prowse', position: 'Záložník', photoUrl: player(106851), matches: 20, goals: 3, assists: 4, yellowCards: 3, minutes: 1700 },
      { id: 'bowen', name: 'Bowen', fullName: 'Jarrod Bowen', position: 'Záložník', photoUrl: player(165814), matches: 22, goals: 9, assists: 6, yellowCards: 2, minutes: 1850 },
      { id: 'kudus', name: 'Kudus', fullName: 'Mohammed Kudus', position: 'Útočník', photoUrl: player(461234), matches: 21, goals: 7, assists: 4, yellowCards: 3, minutes: 1700 },
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
      { id: 'verbruggen', name: 'Verbruggen', fullName: 'Bart Verbruggen', position: 'Brankář', photoUrl: player(491697), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 5 },
      { id: 'veltman', name: 'Veltman', fullName: 'Joël Veltman', position: 'Obránce', photoUrl: player(80263), matches: 17, goals: 0, assists: 1, yellowCards: 4, minutes: 1400 },
      { id: 'dunk', name: 'Dunk', fullName: 'Lewis Dunk', position: 'Obránce', photoUrl: player(78396), matches: 19, goals: 2, assists: 1, yellowCards: 3, minutes: 1650 },
      { id: 'igor', name: 'Igor', fullName: 'Igor Julio', position: 'Obránce', photoUrl: player(453275), matches: 18, goals: 1, assists: 0, yellowCards: 3, minutes: 1500 },
      { id: 'estupinan', name: 'Estupiñán', fullName: 'Pervis Estupiñán', position: 'Obránce', photoUrl: player(213928), matches: 16, goals: 1, assists: 4, yellowCards: 2, minutes: 1300 },
      { id: 'gross', name: 'Groß', fullName: 'Pascal Groß', position: 'Záložník', photoUrl: player(59296), matches: 20, goals: 3, assists: 6, yellowCards: 3, minutes: 1650 },
      { id: 'gilmour', name: 'Gilmour', fullName: 'Billy Gilmour', position: 'Záložník', photoUrl: player(442195), matches: 18, goals: 1, assists: 3, yellowCards: 2, minutes: 1400 },
      { id: 'mitoma', name: 'Mitoma', fullName: 'Kaoru Mitoma', position: 'Záložník', photoUrl: player(452758), matches: 19, goals: 6, assists: 5, yellowCards: 1, minutes: 1500 },
      { id: 'adingra', name: 'Adingra', fullName: 'Simon Adingra', position: 'Záložník', photoUrl: player(496362), matches: 20, goals: 4, assists: 3, yellowCards: 2, minutes: 1350 },
      { id: 'welbeck', name: 'Welbeck', fullName: 'Danny Welbeck', position: 'Útočník', photoUrl: player(78830), matches: 21, goals: 7, assists: 3, yellowCards: 1, minutes: 1500 },
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
      { id: 'neto', name: 'Neto', fullName: 'Neto', position: 'Brankář', photoUrl: player(131681), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 4 },
      { id: 'smith', name: 'Smith', fullName: 'Adam Smith', position: 'Obránce', photoUrl: player(57531), matches: 18, goals: 0, assists: 2, yellowCards: 3, minutes: 1500 },
      { id: 'senesi', name: 'Senesi', fullName: 'Marcos Senesi', position: 'Obránce', photoUrl: player(222302), matches: 19, goals: 1, assists: 1, yellowCards: 4, minutes: 1650 },
      { id: 'zabarnyi', name: 'Zabarnyi', fullName: 'Illia Zabarnyi', position: 'Obránce', photoUrl: player(468386), matches: 20, goals: 1, assists: 0, yellowCards: 3, minutes: 1750 },
      { id: 'kerkez', name: 'Kerkez', fullName: 'Milos Kerkez', position: 'Obránce', photoUrl: player(547284), matches: 21, goals: 0, assists: 4, yellowCards: 4, minutes: 1800 },
      { id: 'cook', name: 'Cook', fullName: 'Lewis Cook', position: 'Záložník', photoUrl: player(173477), matches: 19, goals: 2, assists: 3, yellowCards: 5, minutes: 1550 },
      { id: 'christie', name: 'Christie', fullName: 'Ryan Christie', position: 'Záložník', photoUrl: player(128177), matches: 18, goals: 3, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'tavernier', name: 'Tavernier', fullName: 'Marcus Tavernier', position: 'Záložník', photoUrl: player(204360), matches: 20, goals: 4, assists: 5, yellowCards: 2, minutes: 1600 },
      { id: 'semenyo', name: 'Semenyo', fullName: 'Antoine Semenyo', position: 'Útočník', photoUrl: player(437086), matches: 21, goals: 6, assists: 3, yellowCards: 3, minutes: 1650 },
      { id: 'solanke', name: 'Solanke', fullName: 'Dominic Solanke', position: 'Útočník', photoUrl: player(172096), matches: 22, goals: 12, assists: 4, yellowCards: 1, minutes: 1850 },
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
      { id: 'leno', name: 'Leno', fullName: 'Bernd Leno', position: 'Brankář', photoUrl: player(76998), matches: 22, goals: 0, assists: 0, yellowCards: 2, minutes: 1980, cleanSheets: 6 },
      { id: 'tete', name: 'Tete', fullName: 'Kenny Tete', position: 'Obránce', photoUrl: player(172859), matches: 19, goals: 1, assists: 2, yellowCards: 3, minutes: 1600 },
      { id: 'diop', name: 'Diop', fullName: 'Issa Diop', position: 'Obránce', photoUrl: player(172523), matches: 18, goals: 1, assists: 0, yellowCards: 4, minutes: 1500 },
      { id: 'bassey', name: 'Bassey', fullName: 'Calvin Bassey', position: 'Obránce', photoUrl: player(444746), matches: 20, goals: 0, assists: 1, yellowCards: 3, minutes: 1700 },
      { id: 'robinson', name: 'Robinson', fullName: 'Antonee Robinson', position: 'Obránce', photoUrl: player(169012), matches: 21, goals: 1, assists: 5, yellowCards: 4, minutes: 1850 },
      { id: 'lukic', name: 'Lukić', fullName: 'Saša Lukić', position: 'Záložník', photoUrl: player(214663), matches: 19, goals: 2, assists: 3, yellowCards: 5, minutes: 1550 },
      { id: 'pereira', name: 'Pereira', fullName: 'Andreas Pereira', position: 'Záložník', photoUrl: player(180564), matches: 20, goals: 4, assists: 4, yellowCards: 3, minutes: 1650 },
      { id: 'iwobi', name: 'Iwobi', fullName: 'Alex Iwobi', position: 'Záložník', photoUrl: player(176083), matches: 21, goals: 5, assists: 6, yellowCards: 2, minutes: 1750 },
      { id: 'smith-rowe', name: 'Smith Rowe', fullName: 'Emile Smith Rowe', position: 'Záložník', photoUrl: player(201940), matches: 18, goals: 4, assists: 3, yellowCards: 1, minutes: 1200 },
      { id: 'muniz', name: 'Muniz', fullName: 'Rodrigo Muniz', position: 'Útočník', photoUrl: player(481353), matches: 21, goals: 8, assists: 2, yellowCards: 2, minutes: 1600 },
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
      { id: 'sa', name: 'Sá', fullName: 'José Sá', position: 'Brankář', photoUrl: player(101668), matches: 21, goals: 0, assists: 0, yellowCards: 1, minutes: 1890, cleanSheets: 5 },
      { id: 'semedo', name: 'Semedo', fullName: 'Nélson Semedo', position: 'Obránce', photoUrl: player(148884), matches: 19, goals: 1, assists: 2, yellowCards: 4, minutes: 1600 },
      { id: 'dawson', name: 'Dawson', fullName: 'Craig Dawson', position: 'Obránce', photoUrl: player(57688), matches: 18, goals: 2, assists: 0, yellowCards: 5, minutes: 1500 },
      { id: 'toti', name: 'Toti', fullName: 'Toti Gomes', position: 'Obránce', photoUrl: player(468356), matches: 17, goals: 0, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'ait-nouri', name: 'Aït-Nouri', fullName: 'Rayan Aït-Nouri', position: 'Obránce', photoUrl: player(454498), matches: 20, goals: 1, assists: 4, yellowCards: 3, minutes: 1700 },
      { id: 'lemina', name: 'Lemina', fullName: 'Mario Lemina', position: 'Záložník', photoUrl: player(123924), matches: 20, goals: 2, assists: 2, yellowCards: 6, minutes: 1650 },
      { id: 'joao-gomes', name: 'J. Gomes', fullName: 'João Gomes', position: 'Záložník', photoUrl: player(477816), matches: 21, goals: 1, assists: 3, yellowCards: 7, minutes: 1750 },
      { id: 'sarabia', name: 'Sarabia', fullName: 'Pablo Sarabia', position: 'Záložník', photoUrl: player(95915), matches: 18, goals: 4, assists: 3, yellowCards: 2, minutes: 1300 },
      { id: 'hwang', name: 'Hwang', fullName: 'Hwang Hee-chan', position: 'Útočník', photoUrl: player(206851), matches: 21, goals: 8, assists: 4, yellowCards: 2, minutes: 1650 },
      { id: 'cunha', name: 'Cunha', fullName: 'Matheus Cunha', position: 'Útočník', photoUrl: player(209065), matches: 22, goals: 10, assists: 5, yellowCards: 3, minutes: 1800 },
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
      { id: 'henderson', name: 'Henderson', fullName: 'Dean Henderson', position: 'Brankář', photoUrl: player(169365), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 5 },
      { id: 'munoz', name: 'Muñoz', fullName: 'Daniel Muñoz', position: 'Obránce', photoUrl: player(493192), matches: 19, goals: 2, assists: 2, yellowCards: 5, minutes: 1600 },
      { id: 'guehi', name: 'Guéhi', fullName: 'Marc Guéhi', position: 'Obránce', photoUrl: player(201944), matches: 21, goals: 1, assists: 1, yellowCards: 3, minutes: 1850 },
      { id: 'andersen', name: 'Andersen', fullName: 'Joachim Andersen', position: 'Obránce', photoUrl: player(156027), matches: 20, goals: 1, assists: 0, yellowCards: 4, minutes: 1750 },
      { id: 'mitchell', name: 'Mitchell', fullName: 'Tyrick Mitchell', position: 'Obránce', photoUrl: player(224178), matches: 18, goals: 0, assists: 3, yellowCards: 2, minutes: 1500 },
      { id: 'lerma', name: 'Lerma', fullName: 'Jefferson Lerma', position: 'Záložník', photoUrl: player(171620), matches: 19, goals: 1, assists: 2, yellowCards: 6, minutes: 1550 },
      { id: 'doucoure', name: 'Doucouré', fullName: 'Cheick Doucouré', position: 'Záložník', photoUrl: player(448002), matches: 18, goals: 0, assists: 2, yellowCards: 4, minutes: 1400 },
      { id: 'eze', name: 'Eze', fullName: 'Eberechi Eze', position: 'Záložník', photoUrl: player(200692), matches: 21, goals: 6, assists: 4, yellowCards: 2, minutes: 1700 },
      { id: 'olise', name: 'Olise', fullName: 'Michael Olise', position: 'Záložník', photoUrl: player(456498), matches: 17, goals: 7, assists: 5, yellowCards: 1, minutes: 1300 },
      { id: 'edouard', name: 'Édouard', fullName: 'Odsonne Édouard', position: 'Útočník', photoUrl: player(200048), matches: 20, goals: 5, assists: 3, yellowCards: 2, minutes: 1400 },
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
      { id: 'flekken', name: 'Flekken', fullName: 'Mark Flekken', position: 'Brankář', photoUrl: player(107271), matches: 21, goals: 0, assists: 0, yellowCards: 1, minutes: 1890, cleanSheets: 4 },
      { id: 'roerslev', name: 'Roerslev', fullName: 'Mads Roerslev', position: 'Obránce', photoUrl: player(445333), matches: 18, goals: 0, assists: 2, yellowCards: 3, minutes: 1500 },
      { id: 'collins', name: 'Collins', fullName: 'Nathan Collins', position: 'Obránce', photoUrl: player(444148), matches: 20, goals: 2, assists: 1, yellowCards: 4, minutes: 1700 },
      { id: 'pinnock', name: 'Pinnock', fullName: 'Ethan Pinnock', position: 'Obránce', photoUrl: player(161891), matches: 19, goals: 1, assists: 0, yellowCards: 3, minutes: 1600 },
      { id: 'henry', name: 'Henry', fullName: 'Rico Henry', position: 'Obránce', photoUrl: player(166775), matches: 15, goals: 0, assists: 3, yellowCards: 2, minutes: 1200 },
      { id: 'norgaard', name: 'Nørgaard', fullName: 'Christian Nørgaard', position: 'Záložník', photoUrl: player(80346), matches: 20, goals: 2, assists: 2, yellowCards: 5, minutes: 1700 },
      { id: 'janelt', name: 'Janelt', fullName: 'Vitaly Janelt', position: 'Záložník', photoUrl: player(243519), matches: 19, goals: 1, assists: 3, yellowCards: 4, minutes: 1550 },
      { id: 'mbeumo', name: 'Mbeumo', fullName: 'Bryan Mbeumo', position: 'Záložník', photoUrl: player(426165), matches: 22, goals: 10, assists: 5, yellowCards: 2, minutes: 1850 },
      { id: 'damsgaard', name: 'Damsgaard', fullName: 'Mikkel Damsgaard', position: 'Záložník', photoUrl: player(440246), matches: 17, goals: 3, assists: 4, yellowCards: 1, minutes: 1200 },
      { id: 'toney', name: 'Toney', fullName: 'Ivan Toney', position: 'Útočník', photoUrl: player(107655), matches: 18, goals: 8, assists: 3, yellowCards: 2, minutes: 1400 },
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
      { id: 'pickford', name: 'Pickford', fullName: 'Jordan Pickford', position: 'Brankář', photoUrl: player(98747), matches: 22, goals: 0, assists: 0, yellowCards: 2, minutes: 1980, cleanSheets: 5 },
      { id: 'coleman', name: 'Coleman', fullName: 'Séamus Coleman', position: 'Obránce', photoUrl: player(40266), matches: 16, goals: 0, assists: 1, yellowCards: 3, minutes: 1300 },
      { id: 'tarkowski', name: 'Tarkowski', fullName: 'James Tarkowski', position: 'Obránce', photoUrl: player(102970), matches: 21, goals: 2, assists: 0, yellowCards: 5, minutes: 1850 },
      { id: 'branthwaite', name: 'Branthwaite', fullName: 'Jarrad Branthwaite', position: 'Obránce', photoUrl: player(447379), matches: 19, goals: 2, assists: 1, yellowCards: 3, minutes: 1650 },
      { id: 'mykolenko', name: 'Mykolenko', fullName: 'Vitaliy Mykolenko', position: 'Obránce', photoUrl: player(232460), matches: 20, goals: 0, assists: 2, yellowCards: 4, minutes: 1700 },
      { id: 'gueye', name: 'Gueye', fullName: 'Idrissa Gueye', position: 'Záložník', photoUrl: player(80217), matches: 18, goals: 1, assists: 2, yellowCards: 6, minutes: 1450 },
      { id: 'onana-eve', name: 'Onana', fullName: 'Amadou Onana', position: 'Záložník', photoUrl: player(473542), matches: 20, goals: 3, assists: 1, yellowCards: 5, minutes: 1650 },
      { id: 'doucoure-eve', name: 'Doucouré', fullName: 'Abdoulaye Doucouré', position: 'Záložník', photoUrl: player(116781), matches: 19, goals: 2, assists: 3, yellowCards: 4, minutes: 1550 },
      { id: 'mcneil', name: 'McNeil', fullName: 'Dwight McNeil', position: 'Záložník', photoUrl: player(208680), matches: 21, goals: 3, assists: 4, yellowCards: 2, minutes: 1750 },
      { id: 'calvert-lewin', name: 'Calvert-Lewin', fullName: 'Dominic Calvert-Lewin', position: 'Útočník', photoUrl: player(177815), matches: 18, goals: 6, assists: 2, yellowCards: 3, minutes: 1350 },
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
      { id: 'sels', name: 'Sels', fullName: 'Matz Sels', position: 'Brankář', photoUrl: player(84487), matches: 21, goals: 0, assists: 0, yellowCards: 1, minutes: 1890, cleanSheets: 5 },
      { id: 'aina', name: 'Aina', fullName: 'Ola Aina', position: 'Obránce', photoUrl: player(172771), matches: 20, goals: 1, assists: 3, yellowCards: 4, minutes: 1700 },
      { id: 'murillo', name: 'Murillo', fullName: 'Murillo', position: 'Obránce', photoUrl: player(462128), matches: 21, goals: 1, assists: 1, yellowCards: 5, minutes: 1850 },
      { id: 'boly', name: 'Boly', fullName: 'Willy Boly', position: 'Obránce', photoUrl: player(90998), matches: 17, goals: 1, assists: 0, yellowCards: 3, minutes: 1400 },
      { id: 'williams-nf', name: 'Williams', fullName: 'Neco Williams', position: 'Obránce', photoUrl: player(468178), matches: 18, goals: 0, assists: 4, yellowCards: 3, minutes: 1500 },
      { id: 'dominguez', name: 'Domínguez', fullName: 'Nicolás Domínguez', position: 'Záložník', photoUrl: player(428456), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1550 },
      { id: 'yates', name: 'Yates', fullName: 'Ryan Yates', position: 'Záložník', photoUrl: player(176300), matches: 18, goals: 2, assists: 1, yellowCards: 6, minutes: 1450 },
      { id: 'elanga', name: 'Elanga', fullName: 'Anthony Elanga', position: 'Záložník', photoUrl: player(450430), matches: 21, goals: 4, assists: 4, yellowCards: 2, minutes: 1650 },
      { id: 'hudson-odoi', name: 'Hudson-Odoi', fullName: 'Callum Hudson-Odoi', position: 'Záložník', photoUrl: player(199717), matches: 19, goals: 4, assists: 5, yellowCards: 1, minutes: 1400 },
      { id: 'awoniyi', name: 'Awoniyi', fullName: 'Taiwo Awoniyi', position: 'Útočník', photoUrl: player(208611), matches: 20, goals: 6, assists: 2, yellowCards: 2, minutes: 1500 },
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
      { id: 'kaminski', name: 'Kaminski', fullName: 'Thomas Kaminski', position: 'Brankář', photoUrl: player(133814), matches: 22, goals: 0, assists: 0, yellowCards: 1, minutes: 1980, cleanSheets: 3 },
      { id: 'burke', name: 'Burke', fullName: 'Reece Burke', position: 'Obránce', photoUrl: player(177819), matches: 18, goals: 1, assists: 0, yellowCards: 4, minutes: 1500 },
      { id: 'mengi', name: 'Mengi', fullName: 'Teden Mengi', position: 'Obránce', photoUrl: player(464405), matches: 17, goals: 0, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'lockyer', name: 'Lockyer', fullName: 'Tom Lockyer', position: 'Obránce', photoUrl: player(128189), matches: 12, goals: 1, assists: 0, yellowCards: 2, minutes: 1000 },
      { id: 'doughty', name: 'Doughty', fullName: 'Alfie Doughty', position: 'Obránce', photoUrl: player(446261), matches: 20, goals: 2, assists: 5, yellowCards: 3, minutes: 1700 },
      { id: 'lokonga', name: 'Lokonga', fullName: 'Albert Lokonga', position: 'Záložník', photoUrl: player(234295), matches: 19, goals: 1, assists: 2, yellowCards: 5, minutes: 1550 },
      { id: 'clark', name: 'Clark', fullName: 'Jordan Clark', position: 'Záložník', photoUrl: player(103327), matches: 20, goals: 2, assists: 3, yellowCards: 4, minutes: 1650 },
      { id: 'ogbene', name: 'Ogbene', fullName: 'Chiedozie Ogbene', position: 'Záložník', photoUrl: player(449149), matches: 18, goals: 3, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'adebayo', name: 'Adebayo', fullName: 'Elijah Adebayo', position: 'Útočník', photoUrl: player(186484), matches: 21, goals: 5, assists: 3, yellowCards: 3, minutes: 1600 },
      { id: 'morris', name: 'Morris', fullName: 'Carlton Morris', position: 'Útočník', photoUrl: player(176293), matches: 20, goals: 7, assists: 2, yellowCards: 2, minutes: 1550 },
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
      { id: 'muric', name: 'Muric', fullName: 'Arijanet Muric', position: 'Brankář', photoUrl: player(471706), matches: 21, goals: 0, assists: 0, yellowCards: 2, minutes: 1890, cleanSheets: 3 },
      { id: 'roberts', name: 'Roberts', fullName: 'Connor Roberts', position: 'Obránce', photoUrl: player(176458), matches: 19, goals: 0, assists: 2, yellowCards: 4, minutes: 1600 },
      { id: 'beyer', name: 'Beyer', fullName: 'Jordan Beyer', position: 'Obránce', photoUrl: player(434202), matches: 18, goals: 0, assists: 1, yellowCards: 3, minutes: 1500 },
      { id: 'oshea', name: "O'Shea", fullName: "Dara O'Shea", position: 'Obránce', photoUrl: player(444748), matches: 20, goals: 2, assists: 0, yellowCards: 4, minutes: 1700 },
      { id: 'taylor', name: 'Taylor', fullName: 'Charlie Taylor', position: 'Obránce', photoUrl: player(106414), matches: 17, goals: 0, assists: 3, yellowCards: 3, minutes: 1400 },
      { id: 'brownhill', name: 'Brownhill', fullName: 'Josh Brownhill', position: 'Záložník', photoUrl: player(176456), matches: 21, goals: 2, assists: 2, yellowCards: 6, minutes: 1800 },
      { id: 'cullen', name: 'Cullen', fullName: 'Josh Cullen', position: 'Záložník', photoUrl: player(176455), matches: 20, goals: 1, assists: 3, yellowCards: 5, minutes: 1700 },
      { id: 'zaroury', name: 'Zaroury', fullName: 'Anass Zaroury', position: 'Záložník', photoUrl: player(542825), matches: 18, goals: 2, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'benson', name: 'Benson', fullName: 'Manuel Benson', position: 'Záložník', photoUrl: player(241713), matches: 17, goals: 3, assists: 2, yellowCards: 1, minutes: 1200 },
      { id: 'rodriguez', name: 'Rodriguez', fullName: 'Jay Rodriguez', position: 'Útočník', photoUrl: player(56979), matches: 19, goals: 4, assists: 1, yellowCards: 2, minutes: 1350 },
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
      { id: 'foderingham', name: 'Foderingham', fullName: 'Wes Foderingham', position: 'Brankář', photoUrl: player(85633), matches: 20, goals: 0, assists: 0, yellowCards: 1, minutes: 1800, cleanSheets: 2 },
      { id: 'baldock', name: 'Baldock', fullName: 'George Baldock', position: 'Obránce', photoUrl: player(101379), matches: 18, goals: 0, assists: 1, yellowCards: 4, minutes: 1500 },
      { id: 'ahmedhodzic', name: 'Ahmedhodžić', fullName: 'Anel Ahmedhodžić', position: 'Obránce', photoUrl: player(439816), matches: 19, goals: 1, assists: 0, yellowCards: 5, minutes: 1600 },
      { id: 'robinson-su', name: 'Robinson', fullName: 'Jack Robinson', position: 'Obránce', photoUrl: player(68831), matches: 17, goals: 0, assists: 1, yellowCards: 3, minutes: 1400 },
      { id: 'lowe', name: 'Lowe', fullName: 'Max Lowe', position: 'Obránce', photoUrl: player(197033), matches: 16, goals: 0, assists: 2, yellowCards: 2, minutes: 1300 },
      { id: 'souza', name: 'Souza', fullName: 'Vini Souza', position: 'Záložník', photoUrl: player(454450), matches: 18, goals: 1, assists: 1, yellowCards: 6, minutes: 1450 },
      { id: 'norwood', name: 'Norwood', fullName: 'Oliver Norwood', position: 'Záložník', photoUrl: player(83571), matches: 19, goals: 1, assists: 3, yellowCards: 5, minutes: 1550 },
      { id: 'osborn', name: 'Osborn', fullName: 'Ben Osborn', position: 'Záložník', photoUrl: player(156736), matches: 17, goals: 2, assists: 2, yellowCards: 3, minutes: 1300 },
      { id: 'bogle', name: 'Bogle', fullName: 'Jayden Bogle', position: 'Záložník', photoUrl: player(209323), matches: 18, goals: 1, assists: 3, yellowCards: 2, minutes: 1400 },
      { id: 'archer', name: 'Archer', fullName: 'Cameron Archer', position: 'Útočník', photoUrl: player(441141), matches: 20, goals: 4, assists: 1, yellowCards: 2, minutes: 1500 },
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
