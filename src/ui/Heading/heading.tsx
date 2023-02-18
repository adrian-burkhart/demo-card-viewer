interface HeadingProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = ({ children, level }: HeadingProps) => {
  switch (level) {
    case 1:
      return (
        <h1 className='text-4xl font-bold font-sans text-primary text-center p-1 mb-20'>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 className='text-2xl font-bold font-sans text-primary text-left p-1'>
          {children}
        </h2>
      )
    default:
      return (
        <h3 className='text-2xl font-bold font-sans text-primary text-left p-1'>
          {children}
        </h3>
      )
  }
}
