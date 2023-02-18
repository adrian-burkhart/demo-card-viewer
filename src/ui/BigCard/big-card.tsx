interface BigCardProps {
  children?: React.ReactNode
}

export const BigCard = ({ children }: BigCardProps) => {
  return (
    <div className='bg-white shadow-test py-3 px-1 border border-white min-h-[12rem] rounded-md my-3'>
      {children}
    </div>
  )
}
