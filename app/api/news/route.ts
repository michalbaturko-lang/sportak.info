import { NextResponse } from 'next/server'

// Typy pro novinky
interface NewsItem {
  id: string
  title: string
  description: string
  link: string
  source: string
  sourceIcon: string
  pubDate: string
  category: 'fotbal' | 'hokej' | 'ostatni'
}

// RSS feed URLs
const RSS_FEEDS = [
  { url: 'https://www.isport.cz/rss/', source: 'iSport.cz', icon: '📰' },
  { url: 'https://sport.cz/rss/', source: 'Sport.cz', icon: '⚡' },
]

// Parsování RSS feedu
async function parseRSSFeed(feedUrl: string, source: string, icon: string): Promise<NewsItem[]> {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 300 } // Cache na 5 minut
    })

    if (!response.ok) return []

    const text = await response.text()
    const items: NewsItem[] = []

    // Jednoduchý XML parser pro RSS
    const itemMatches = text.match(/<item>([\s\S]*?)<\/item>/g) || []

    for (const item of itemMatches.slice(0, 10)) {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
                    item.match(/<title>(.*?)<\/title>/)?.[1] || ''
      const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
                          item.match(/<description>(.*?)<\/description>/)?.[1] || ''
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || ''
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''

      // Kategorizace podle klíčových slov
      let category: 'fotbal' | 'hokej' | 'ostatni' = 'ostatni'
      const lowerTitle = title.toLowerCase()
      if (lowerTitle.includes('fotbal') || lowerTitle.includes('liga') || lowerTitle.includes('gól') ||
          lowerTitle.includes('premier') || lowerTitle.includes('sparta') && !lowerTitle.includes('hokej')) {
        category = 'fotbal'
      } else if (lowerTitle.includes('hokej') || lowerTitle.includes('extraliga') || lowerTitle.includes('nhl')) {
        category = 'hokej'
      }

      items.push({
        id: `${source}-${Date.now()}-${Math.random()}`,
        title: title.replace(/<[^>]*>/g, '').trim(),
        description: description.replace(/<[^>]*>/g, '').substring(0, 200).trim(),
        link,
        source,
        sourceIcon: icon,
        pubDate,
        category
      })
    }

    return items
  } catch (error) {
    console.error(`Error fetching ${source}:`, error)
    return []
  }
}

export async function GET() {
  try {
    // Fetch ze všech zdrojů paralelně
    const allNewsPromises = RSS_FEEDS.map(feed =>
      parseRSSFeed(feed.url, feed.source, feed.icon)
    )

    const allNewsArrays = await Promise.all(allNewsPromises)
    const allNews = allNewsArrays.flat()

    // Seřadit podle data
    allNews.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime() || 0
      const dateB = new Date(b.pubDate).getTime() || 0
      return dateB - dateA
    })

    // Fallback novinky pokud RSS nefunguje
    if (allNews.length === 0) {
      return NextResponse.json({
        news: [
          {
            id: 'fallback-1',
            title: 'Sparta Praha vede tabulku extraligy!',
            description: 'HC Sparta Praha pokračuje ve skvělé formě a vede tabulku Tipsport extraligy.',
            link: '#',
            source: 'Sportak.info',
            sourceIcon: '🏒',
            pubDate: new Date().toISOString(),
            category: 'hokej'
          },
          {
            id: 'fallback-2',
            title: 'Premier League: Manchester City vs Arsenal',
            description: 'Velký zápas kola Premier League se blíží. Kdo vyhraje souboj o první místo?',
            link: '#',
            source: 'Sportak.info',
            sourceIcon: '⚽',
            pubDate: new Date().toISOString(),
            category: 'fotbal'
          },
          {
            id: 'fallback-3',
            title: 'Třinec posiluje kádr před play-off',
            description: 'Oceláři Třinec oznámili novou posilu do útoku před vyřazovacími boji.',
            link: '#',
            source: 'Sportak.info',
            sourceIcon: '🏒',
            pubDate: new Date().toISOString(),
            category: 'hokej'
          }
        ],
        lastUpdate: new Date().toISOString()
      })
    }

    return NextResponse.json({
      news: allNews.slice(0, 20),
      lastUpdate: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error in news API:', error)
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}
