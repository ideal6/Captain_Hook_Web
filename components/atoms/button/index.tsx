interface ButtonProps {
  type?: 'button' | 'submit'
  text: string
  size: 'small' | 'normal' | 'big'
  fontSize: 'small' | 'normal' | 'big'
  fontColor: string
  backgroundColor: string
}

// button type, label, size, font color, background color
const Button: React.FC<ButtonProps> = ({ type = 'button', text }) => {
  return (
    <button type={type} className="w-160 h-36">
      {text}
    </button>
  )
}

export default Button
