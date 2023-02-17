import { Player } from '../hooks'
import { Grid, SmallCard, Text } from '../ui'

interface PlayerOverviewProps {
  players: Player[]
}

export const PlayerOverview = ({ players }: PlayerOverviewProps) => {
  return (
    <Grid>
      {players.map((player, idX) => (
        <SmallCard key={idX}>
          <Text>{player.realName}</Text>
          <Text>{player.playerName}</Text>
          <Text>{player.asset}</Text>
        </SmallCard>
      ))}
    </Grid>
  )
}
