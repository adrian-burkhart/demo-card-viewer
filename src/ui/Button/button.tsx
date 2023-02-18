import classNames from 'classnames'

interface ButtonProps {
  label?: string
  inactive?: boolean
  onClick?: () => void
}

export const Button = ({ label, inactive, onClick }: ButtonProps) => {
  return (
    <button
      onClick={inactive ? undefined : onClick}
      className={classNames(
        'bg-primary text-white font-medium text-sm py-2 px-8 rounded-full ',
        inactive
          ? 'bg-tertiary cursor-not-allowed '
          : 'shadow-button hover:bg-accent active:shadow-none active:bg-active active:transform active:translate-y-0.5 transition-all duration-500 ease-out'
      )}
    >
      {label}
    </button>
  )
}
