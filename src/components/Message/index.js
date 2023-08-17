import './index.css'

const Heading = props => {
  const {isLogin} = props
  const text = isLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{text}</h1>
}

export default Heading
