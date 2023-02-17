import './App.css'
import { usePlayers } from './hooks'
import { PlayerOverview } from './components'
import { Heading } from './ui'

export const App = () => {
  const { loadingState, players } = usePlayers()

  return (
    <main>
      <Heading>Demo Card Viewer</Heading>
      {loadingState === 'loading' && <p>Loading...</p>}
      <PlayerOverview players={players} />
    </main>
  )
}

export default App
