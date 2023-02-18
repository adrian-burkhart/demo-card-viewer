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

  return (
    <main>
      <Heading level={1}>Demo Card Viewer</Heading>
      {loadingState === 'loading' && <p>Loading...</p>}
      <div className='grid grid-cols-2 gap-6'>
        <DetailView player={activePlayer} />
        <SettingsCard />
        <PlayerOverview
          players={players}
          setActivePlayer={setActivePlayer}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  )
}

export default App
