import { Dispatch, SetStateAction } from 'react'

import { LoadingState, Player } from '../hooks'
import { Grid, Heading, Card, Text } from '../ui'

interface PlayerOverviewProps {
  activePlayer: Player | undefined
  loadingState: LoadingState
  players: Player[]
  setActivePlayer: Dispatch<SetStateAction<Player | undefined>>
}

export const PlayerOverview = ({
  activePlayer,
  loadingState,
  players,
  setActivePlayer,
}: PlayerOverviewProps) => {
  const handleClick = (player: Player) => {
    if (activePlayer === player) {
      setActivePlayer(undefined)
      return
    }
    setActivePlayer(player)
  }

  return (
    <section className='flex flex-col col-span-2'>
      <Heading level={2}>Overview</Heading>
      <Grid columns={3}>
        {loadingState === 'loading' && (
          <div className='animate-pulse'>
            <Text>Loading players...</Text>
          </div>
        )}
        {loadingState === 'errored' && (
          <div className='animate-pulse'>
            <Text>Error loading players...</Text>
          </div>
        )}
        {players.map((player, idX) => (
          <Card
            clickable
            dataCy={`player-overview-card`}
            highlighted={activePlayer === player}
            key={idX}
            onClick={() => handleClick(player)}
          >
            <Text
              truncate
              color={activePlayer === player ? 'text-primary' : 'text-tertiary'}
            >
              {player.firstNames} {player.lastName}
            </Text>
            <Text
              truncate
              color={activePlayer === player ? 'text-primary' : 'text-tertiary'}
            >
              {player.playerName}
            </Text>
            <Text
              truncate
              color={activePlayer === player ? 'text-primary' : 'text-tertiary'}
            >
              {player.asset}
            </Text>
          </Card>
        ))}
      </Grid>
    </section>
  )
}
