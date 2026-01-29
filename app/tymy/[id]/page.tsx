import { teams, getTeamById } from '@/data/teams'
import { notFound } from 'next/navigation'
import TeamPageClient from './TeamPageClient'

// Generování statických parametrů pro všechny týmy
export function generateStaticParams() {
  return teams.map((team) => ({
    id: team.id,
  }))
}

export default function TeamPage({ params }: { params: { id: string } }) {
  const team = getTeamById(params.id)

  if (!team) {
    notFound()
  }

  return <TeamPageClient team={team} />
}
