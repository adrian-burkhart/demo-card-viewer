import classNames from 'classnames'

interface TextProps {
  children: React.ReactNode
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
  truncate?: boolean
}

export const Text = ({ children, color, truncate }: TextProps) => {
  return (
    <p
      className={classNames(
        'text-left p-1 text-lg ',
        color ?? 'text-tertiary',
        truncate && 'truncate'
      )}
    >
      {children}
    </p>
  )
}
