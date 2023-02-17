interface SmallCardProps {
  children: React.ReactNode
}

export const SmallCard = ({ children }: SmallCardProps) => {
  return (
    <div className='bg-tertiary py-3 px-1 border border-white'>{children}</div>
  )
}
