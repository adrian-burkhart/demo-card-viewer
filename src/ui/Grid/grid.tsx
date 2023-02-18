interface GridProps {
  children: React.ReactNode
}

export const Grid = ({ children }: GridProps) => {
  return <div className='grid grid-cols-3 gap-6'>{children}</div>
}
