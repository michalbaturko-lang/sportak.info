import { hockeyTeams, getHockeyTeamById } from '@/data/hockey'
import { notFound } from 'next/navigation'
import HockeyTeamClient from './HockeyTeamClient'

export function generateStaticParams() {
  return hockeyTeams.map((team) => ({
    id: team.id,
  }))
}

export default function HockeyTeamPage({ params }: { params: { id: string } }) {
  const team = getHockeyTeamById(params.id)

  if (!team) {
    notFound()
  }

  return <HockeyTeamClient team={team} />
}
