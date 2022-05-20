import './styles.css'

interface ButtonProps {
  children: React.ReactNode
}
const Button = ({ children }: ButtonProps) => {
  return (
    <button className="custom-btn">{children}</button>
  )
}

export default Button