import Image from 'next/image'
import Link from 'next/link'

interface TeamCardProps {
  id: string
  name: string
  shortName: string
  logoUrl: string
  isSelected?: boolean
}

export default function TeamCard({ id, name, shortName, logoUrl, isSelected }: TeamCardProps) {
  return (
    <Link href={`/tymy/${id}`}>
      <div
        className={`
          bg-black/30 rounded-xl p-4 text-center cursor-pointer transition-all duration-300
          border-2 hover:border-sportak-blue hover:scale-105
          ${isSelected ? 'border-sportak-blue' : 'border-transparent'}
        `}
      >
        <div className="w-12 h-12 mx-auto mb-2 bg-white/90 rounded-full p-1 flex items-center justify-center">
          <Image
            src={logoUrl}
            alt={name}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <p className="text-xs font-semibold">{shortName}</p>
      </div>
    </Link>
  )
}
