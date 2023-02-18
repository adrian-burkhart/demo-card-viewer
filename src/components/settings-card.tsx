import { LoadingState } from '../hooks'
import { Button, Heading, Card, Text } from '../ui'

interface SettingsCardProps {
  loadingState: LoadingState
  handleClick: (method: 'asc' | 'desc') => void
}

export const SettingsCard = ({
  loadingState,
  handleClick,
}: SettingsCardProps) => {
  return (
    <div className='flex flex-col'>
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
            <Button inactive={loadingState !== 'success'} label='Submit' />
          </div>
        </div>
      </Card>
    </div>
  )
}
