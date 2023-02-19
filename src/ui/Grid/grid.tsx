import classNames from 'classnames'

interface GridProps {
  children: React.ReactNode
  columns?: number
  rows?: number
}

export const Grid = ({ children, columns, rows }: GridProps) => {
  return (
    <div
      className={classNames(
        'grid gap-6',
        columns === 2
          ? 'grid-cols-2'
          : columns === 3
          ? 'grid-cols-3'
          : undefined,
        rows === 2 ? 'grid-rows-2' : undefined
      )}
    >
      {children}
    </div>
  )
}
