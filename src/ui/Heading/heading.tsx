interface HeadingProps {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className='text-4xl font-bold font-sans text-primary '>{children}</h1>
  )
}
