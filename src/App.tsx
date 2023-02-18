import './App.css'
import { Player, usePlayers } from './hooks'
import { DetailView, PlayerOverview, SettingsCard } from './components'
import { Heading } from './ui'
import React from 'react'

export const App = () => {
  const { loadingState, players } = usePlayers()

  const [activePlayer, setActivePlayer] = React.useState<Player | undefined>(
    players[0]
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
          return a.playerName.localeCompare(b.realName)
        } else {
          return b.playerName.localeCompare(a.realName)
        }
      })
      setSortedPlayers(sortedPlayers)
    },
    [players]
  )

  return (
    <main>
      <Heading level={1}>Demo Card Viewer</Heading>
      <div className='grid grid-cols-2 gap-6 my-20'>
        <DetailView player={activePlayer} />
        <SettingsCard loadingState={loadingState} handleClick={handleClick} />
        <PlayerOverview
          players={sortedPlayers}
          loadingState={loadingState}
          setActivePlayer={setActivePlayer}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  )
}

export default App
