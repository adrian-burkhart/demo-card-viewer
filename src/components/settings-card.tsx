import { LoadingState } from '../hooks'
import { Button, Heading, Card } from '../ui'

interface SettingsCardProps {
  loadingState: LoadingState
}

export const SettingsCard = ({ loadingState }: SettingsCardProps) => {
  return (
    <Card big>
      <Heading level={2}>Controls</Heading>
      <div className='grid grid-cols-2 gap-2 my-4 '>
        <div>
          <Button inactive={loadingState !== 'success'} label='Sort Asc' />
        </div>
        <div>
          <Button inactive={loadingState !== 'success'} label='Sort Desc' />
        </div>
        <div className='col-span-2'>
          <Button inactive={loadingState !== 'success'} label='Submit' />
        </div>
      </div>
    </Card>
  )
}
