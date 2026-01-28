import Link from 'next/link'

interface NewsCardProps {
  id: string
  title: string
  tag: string
  date: string
  imageEmoji?: string
  featured?: boolean
}

export default function NewsCard({ id, title, tag, date, imageEmoji = '📰', featured }: NewsCardProps) {
  return (
    <Link href={`/novinky/${id}`}>
      <article
        className={`
          glass rounded-2xl overflow-hidden card-hover cursor-pointer
          ${featured ? 'grid md:grid-cols-2' : ''}
        `}
      >
        <div
          className={`
            bg-gradient-to-br from-sportak-purple/30 to-sportak-blue/20
            flex items-center justify-center text-6xl
            ${featured ? 'h-full min-h-[200px]' : 'h-[200px]'}
          `}
        >
          {imageEmoji}
        </div>
        <div className="p-5">
          <span className="gradient-bg px-3 py-1 rounded-full text-xs font-semibold">
            {tag}
          </span>
          <h3 className={`font-bold mt-3 mb-2 leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </article>
    </Link>
  )
}
