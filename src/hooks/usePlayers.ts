import React from 'react'
import { z } from 'zod'

const API_URL = 'https://opensource.aoe.com/the-card-game-data/player.json'

// We use zod to validate the data we get from the API.
const PlayerSchema = z.object({
  realName: z.string(),
  playerName: z.string(),
  asset: z.string(),
})

export type Player = z.infer<typeof PlayerSchema>

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
          setPlayers(parsedData)
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
  fetch('', {
    // TODO: Add your API URL here
    method: 'POST',
    body: JSON.stringify(PlayerSchema.parse(player)),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
