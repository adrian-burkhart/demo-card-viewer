import classNames from 'classnames'

interface CardProps {
  big?: boolean
  children?: React.ReactNode
  clickable?: boolean
  dataCy?: string
  highlighted?: boolean
  onClick?: () => void
}

export const Card = ({
  big,
  children,
  clickable,
  dataCy,
  highlighted,
  onClick,
}: CardProps) => {
  console.log(dataCy)
  return (
    <div
      className={classNames(
        'bg-white py-3 px-1 h-[10rem] rounded-md transition-all duration-200 flex flex-col justify-center',
        clickable &&
          !highlighted &&
          'active:shadow-inner hover:mb-1 hover:-mt-1 active:mb-0 active:mt-0',
        highlighted ? 'shadow-inner hover:mb-0 hover:-mt-0' : 'shadow-test',
        big && 'min-h-[15rem]'
      )}
      data-cy={dataCy}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </div>
  )
}
