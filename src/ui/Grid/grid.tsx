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
        columns && `grid-cols-${columns}`,
        rows && `grid-rows-${rows}`
      )}
    >
      {children}
    </div>
  )
}
