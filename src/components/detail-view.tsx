import { Player } from '../hooks'
import { Heading, Card, Text } from '../ui'

interface DetailViewProps {
  player?: Player
}

export const DetailView = ({ player }: DetailViewProps) => {
  return (
    <section className='flex flex-col'>
      <Heading level={2}>Details</Heading>
      {player ? (
        <Card big>
          <Text color={'text-primary'}>
            {player.firstNames.includes(' ') ? 'First Names: ' : 'First Name: '}
            {player.firstNames}
          </Text>
          <Text color={'text-primary'}>Last Name: {player.lastName}</Text>
          <Text color={'text-primary'}>Player Name: {player.playerName}</Text>
          <Text color={'text-primary'}>Asset: {player.asset}</Text>
        </Card>
      ) : (
        <Text>Click a player card to inspect.</Text>
      )}
    </section>
  )
}
