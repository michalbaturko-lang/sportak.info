import HeroBanner from '@/components/HeroBanner'
import NewsCard from '@/components/NewsCard'
import TeamCard from '@/components/TeamCard'
import Sidebar from '@/components/Sidebar'
import { teams, news } from '@/data/teams'

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <HeroBanner
        sport="Premier League"
        title="Sportak.info"
        subtitle="Tvůj zdroj novinek z Premier League • Vytvořil Míša, 9 let"
        imageUrl="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1600&q=80"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Left Column - News & Teams */}
          <div>
            {/* News Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                📰 Nejnovější zprávy
              </h2>
              <div className="grid gap-5">
                {news.map((item) => (
                  <NewsCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    tag={item.tag}
                    date={item.date}
                    imageEmoji={item.emoji}
                    featured={item.featured}
                  />
                ))}
              </div>
            </section>

            {/* Teams Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                ⚽ Týmy Premier League
              </h2>
              <p className="text-gray-400 mb-4">Klikni na tým pro zobrazení detailů:</p>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
                {teams.map((team) => (
                  <TeamCard
                    key={team.id}
                    id={team.id}
                    name={team.name}
                    shortName={team.shortName}
                    logoUrl={team.logoUrl}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
