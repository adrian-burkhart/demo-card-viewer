import { Dispatch, SetStateAction } from 'react'
import { Player } from '../hooks'
import { Grid, Heading, SmallCard, Text } from '../ui'

interface PlayerOverviewProps {
  activePlayer: Player | undefined
  setActivePlayer: Dispatch<SetStateAction<Player | undefined>>
  players: Player[]
}

export const PlayerOverview = ({
  activePlayer,
  players,
  setActivePlayer,
}: PlayerOverviewProps) => {
  const handleClick = (player: Player) => {
    setActivePlayer(player)
  }

  return (
    <div className='flex flex-col col-span-2'>
      <Heading level={2}>Overview</Heading>
      <Grid>
        {players.map((player, idX) => (
          <SmallCard
            highlighted={activePlayer === player}
            key={idX}
            onClick={() => handleClick(player)}
          >
            <Text
              truncate
              color={activePlayer === player ? 'text-primary' : 'text-tertiary'}
            >
              {player.realName}
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
          </SmallCard>
        ))}
      </Grid>
    </div>
  )
}
