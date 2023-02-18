import classNames from 'classnames'

interface SmallCardProps {
  children?: React.ReactNode
  highlighted?: boolean
  onClick?: () => void
}

export const SmallCard = ({
  children,
  highlighted,
  onClick,
}: SmallCardProps) => {
  return (
    <div
      className={classNames(
        'bg-white py-3 px-1 h-[10rem] rounded-md ',
        highlighted
          ? 'shadow-inner transition-all duration-200'
          : 'shadow-test hover:mb-1 hover:-mt-1 transition-all duration-200 active:shadow-inner active:mb-0 active:mt-0'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
