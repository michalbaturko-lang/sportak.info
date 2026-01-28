import Image from 'next/image'

interface HeroBannerProps {
  sport: string
  title: string
  subtitle: string
  imageUrl: string
}

export default function HeroBanner({ sport, title, subtitle, imageUrl }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[350px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={sport}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sportak-dark/70 via-sportak-darker/60 to-[#16213e]/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="gradient-bg px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
          ⚽ {sport}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Vítej na <span className="gradient-text">{title}</span>!
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
