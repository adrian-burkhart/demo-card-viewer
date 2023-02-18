interface ButtonProps {
  label?: string
  onClick?: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='bg-primary hover:bg-accent text-white font-medium text-sm py-2 px-8 rounded-full shadow-button active:shadow-none active:bg-active active:transform active:translate-y-0.5 transition-all duration-500 ease-out '
    >
      {label}
    </button>
  )
}
