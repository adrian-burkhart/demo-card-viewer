import React from 'react'

import './App.css'
import { DetailView, PlayerOverview, SettingsCard } from './components'
import { Player, submitPlayer, usePlayers } from './hooks'
import { Grid, Heading } from './ui'

export const App = () => {
  const { loadingState, players } = usePlayers()

  const [cardBouncing, setCardBouncing] = React.useState(false)

  const [activePlayer, setActivePlayer] = React.useState<Player | undefined>(
    undefined
  )

  const [sortedPlayers, setSortedPlayers] = React.useState<Player[]>([])

  const [sortMethod, setSortMethod] = React.useState<
    'asc' | 'desc' | 'unsorted'
  >('unsorted')

  React.useEffect(() => {
    if (sortMethod === 'asc') {
      sortPlayers('asc')
    } else if (sortMethod === 'desc') {
      sortPlayers('desc')
    } else {
      setSortedPlayers(players)
    }
  }, [players, sortMethod])

  const sortPlayers = React.useCallback(
    (direction: 'asc' | 'desc') => {
      const sortedPlayers = [...players].sort((a, b) => {
        if (direction === 'asc') {
          return a.lastName.localeCompare(b.lastName)
        } else {
          return b.lastName.localeCompare(a.lastName)
        }
      })
      setSortedPlayers(sortedPlayers)
    },
    [players]
  )
  const handleSubmit = React.useCallback(() => {
    if (activePlayer) {
      setCardBouncing(true)
      setTimeout(() => {
        submitPlayer(activePlayer)
        setCardBouncing(false)
      }, 500)
    }
  }, [activePlayer])

  const handleClick = React.useCallback(
    (method: 'asc' | 'desc') => {
      if (method === sortMethod) {
        setSortMethod('unsorted')
      } else {
        setSortMethod(method)
      }
    },
    [sortMethod]
  )

  const handleCardClick = (player: Player) => {
    if (activePlayer === player) {
      setActivePlayer(undefined)
      return
    }
    setActivePlayer(player)
  }

  return (
    <main>
      <Heading level={1}>Demo Card Viewer</Heading>
      <Grid columns={2}>
        <DetailView cardBouncing={cardBouncing} player={activePlayer} />
        <SettingsCard
          activePlayer={activePlayer}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          loadingState={loadingState}
        />
        <PlayerOverview
          activePlayer={activePlayer}
          handleCardClick={handleCardClick}
          loadingState={loadingState}
          players={sortedPlayers}
        />
      </Grid>
    </main>
  )
}

export default App
