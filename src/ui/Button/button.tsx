import classNames from 'classnames'

interface ButtonProps {
  inactive?: boolean
  label?: string
  onClick?: () => void
}

export const Button = ({ inactive, label, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'bg-primary text-white font-medium text-sm py-2 px-8 rounded-full ',
        inactive
          ? 'bg-tertiary cursor-not-allowed '
          : 'shadow-button hover:bg-accent active:shadow-none active:bg-active active:transform active:translate-y-0.5 transition-all duration-500 ease-out'
      )}
      onClick={inactive ? undefined : onClick}
    >
      {label}
    </button>
  )
}
