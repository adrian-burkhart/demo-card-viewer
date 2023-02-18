import React from 'react'
import { z } from 'zod'

const API_URL = 'https://opensource.aoe.com/the-card-game-data/player.json'

// We use zod to validate the data we get from the API.
const PlayerSchema = z.object({
  realName: z.string(),
  playerName: z.string(),
  asset: z.string(),
})

type UnformattedPlayer = z.infer<typeof PlayerSchema>

export type Player = Omit<UnformattedPlayer, 'realName'> & {
  firstNames: string
  lastName: string
}

export type LoadingState = 'loading' | 'errored' | 'success' | undefined

/**
 * A custom hook that fetches players from the API.
 */
export const usePlayers = () => {
  const [loadingState, setLoadingState] =
    React.useState<LoadingState>(undefined)

  const [players, setPlayers] = React.useState<Player[]>([])

  const handleErrors = (response: Response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }

  const formatPlayers = (players: UnformattedPlayer[]) =>
    players.map(player => {
      return {
        firstNames: player.realName.split(' ').slice(0, -1).join(' '),
        lastName: player.realName.split(' ').slice(-1).join(' '),
        playerName: player.playerName,
        asset: player.asset,
      }
    })

  React.useEffect(() => {
    setLoadingState('loading')
    fetch(API_URL)
      .then(handleErrors)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const parsedData = z.array(PlayerSchema).parse(data)
        return setTimeout(() => {
          const formattedPlayers = formatPlayers(parsedData)
          setPlayers(formattedPlayers)
          setLoadingState('success')
        }, 0) // Use this to simulate a slow network to test the loading state
      })
      .catch(e => {
        setLoadingState('errored')
      })
  }, [])

  return { loadingState, players }
}

export const submitPlayer = (player: Player) => {
  const unformattedPlayer = {
    realName: `${player.firstNames} ${player.lastName}`,
    playerName: player.playerName,
    asset: player.asset,
  }

  fetch('', {
    // TODO: Add your API URL here
    method: 'POST',
    body: JSON.stringify(PlayerSchema.parse(unformattedPlayer)),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
