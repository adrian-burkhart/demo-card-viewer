import './App.css'
import { Player, submitPlayer, usePlayers } from './hooks'
import { DetailView, PlayerOverview, SettingsCard } from './components'
import { Grid, Heading } from './ui'
import React from 'react'

export const App = () => {
  const { loadingState, players } = usePlayers()

  const [activePlayer, setActivePlayer] = React.useState<Player | undefined>(
    undefined
  )

  const [sortedPlayers, setSortedPlayers] = React.useState<Player[]>([])

  const [sortMethod, setSortMethod] = React.useState<
    'asc' | 'desc' | 'unsorted'
  >('unsorted')

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
      submitPlayer(activePlayer)
    }
  }, [activePlayer])

  return (
    <main>
      <Heading level={1}>Demo Card Viewer</Heading>
      <Grid columns={2}>
        <DetailView player={activePlayer} />
        <SettingsCard
          activePlayer={activePlayer}
          loadingState={loadingState}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
        <PlayerOverview
          players={sortedPlayers}
          loadingState={loadingState}
          setActivePlayer={setActivePlayer}
          activePlayer={activePlayer}
        />
      </Grid>
    </main>
  )
}

export default App
