import { BigCard, Button, Heading } from '../ui'

interface SettingsCardProps {}

export const SettingsCard = () => {
  return (
    <BigCard>
      <Heading level={2}>Controls</Heading>
      <div className='grid grid-cols-2 gap-2 my-4 '>
        <div>
          <Button label='Sort Asc' />
        </div>
        <div>
          <Button label='Sort Desc' />
        </div>
        <div className='col-span-2'>
          <Button label='Submit' />
        </div>
      </div>
    </BigCard>
  )
}
