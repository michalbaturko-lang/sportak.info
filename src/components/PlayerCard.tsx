import Image from 'next/image'

interface PlayerStats {
  label: string
  value: number | string
}

interface PlayerCardProps {
  name: string
  position: string
  photoUrl: string
  stats: PlayerStats[]
}

export default function PlayerCard({ name, position, photoUrl, stats }: PlayerCardProps) {
  return (
    <div className="bg-black/30 rounded-xl p-4 text-center transition-all duration-300 border border-transparent hover:border-sportak-blue hover:-translate-y-1 cursor-pointer">
      <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-sportak-blue/30">
        <Image
          src={photoUrl}
          alt={name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-sm font-semibold mb-1">{name}</p>
      <p className="text-xs text-sportak-blue mb-3">{position}</p>

      <div className="flex justify-center gap-3 pt-3 border-t border-white/10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-sm font-bold text-sportak-purple">{stat.value}</p>
            <p className="text-[8px] text-gray-400 uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
