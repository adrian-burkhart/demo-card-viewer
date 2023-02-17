import React from 'react'
import { z } from 'zod'

const API_URL = 'https://opensource.aoe.com/the-card-game-data/player.json'

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
        setPlayers(parsedData)
        setLoadingState('success')
      })
      .catch(e => {
        setLoadingState('errored')
      })
  }, [])

  return { loadingState, players }
}
