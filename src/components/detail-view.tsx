import { Player } from '../hooks'
import { Heading, Card, Text } from '../ui'

interface DetailViewProps {
  cardBouncing?: boolean
  player?: Player
}

export const DetailView = ({ cardBouncing, player }: DetailViewProps) => {
  return (
    <section className='flex flex-col'>
      <Heading level={2}>Details</Heading>
      {player ? (
        <Card big dataCy={'detail-view'} bouncing={cardBouncing} role='article'>
          <Text color={'text-primary'}>
            👤 Real Name: {player.firstNames}
            {player.lastName} {cardBouncing && '✔'}
          </Text>
          <Text color={'text-primary'}>
            🧙 Player Name: {player.playerName} {cardBouncing && '✔'}
          </Text>
          <Text color={'text-primary'}>
            💎 Asset: {player.asset} {cardBouncing && '✔'}
          </Text>
        </Card>
      ) : (
        <Text>Click a player card to inspect.</Text>
      )}
    </section>
  )
}
