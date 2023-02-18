import { Player } from '../hooks'
import { Heading, Card, Text } from '../ui'

interface DetailViewProps {
  player?: Player
}

export const DetailView = ({ player }: DetailViewProps) => {
  return (
    <div className='flex flex-col'>
      <Heading level={2}>Details</Heading>
      <Card big>
        {player ? (
          <Text truncate={false}>
            <Text>Real Name: {player.realName}</Text>
            <Text>Player Name: {player.playerName}</Text>
            <Text>Asset: {player.asset}</Text>
          </Text>
        ) : (
          <Text>Click a player card to inspect.</Text>
        )}
      </Card>
    </div>
  )
}
