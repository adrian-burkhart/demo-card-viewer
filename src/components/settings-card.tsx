import { LoadingState, Player } from '../hooks'
import { Button, Heading, Card } from '../ui'

interface SettingsCardProps {
  activePlayer: Player | undefined
  handleClick: (method: 'asc' | 'desc') => void
  handleSubmit: () => void
  loadingState: LoadingState
}

export const SettingsCard = ({
  activePlayer,
  handleClick,
  handleSubmit,
  loadingState,
}: SettingsCardProps) => {
  return (
    <aside className='flex flex-col'>
      <Heading level={2}>Controls</Heading>
      <Card big>
        <div className='grid grid-cols-2 gap-2 my-4 '>
          <div>
            <Button
              inactive={loadingState !== 'success'}
              label='Sort Asc'
              onClick={() => handleClick('asc')}
            />
          </div>
          <div>
            <Button
              inactive={loadingState !== 'success'}
              label='Sort Desc'
              onClick={() => handleClick('desc')}
            />
          </div>
          <div className='col-span-2'>
            <Button
              inactive={loadingState !== 'success' || !activePlayer}
              label='Submit'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Card>
    </aside>
  )
}
