import classNames from 'classnames'

interface CardProps {
  big?: boolean
  children?: React.ReactNode
  clickable?: boolean
  highlighted?: boolean
  onClick?: () => void
}

export const Card = ({
  big,
  children,
  clickable,
  highlighted,
  onClick,
}: CardProps) => {
  return (
    <div
      className={classNames(
        'bg-white py-3 px-1 h-[10rem] rounded-md transition-all duration-200',
        highlighted ? 'shadow-inner hover:mb-0 hover:mt-0' : 'shadow-test',
        clickable &&
          'active:shadow-inner hover:mb-1 hover:-mt-1 active:mb-0 active:mt-0',
        big && 'min-h-[12rem]'
      )}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </div>
  )
}
