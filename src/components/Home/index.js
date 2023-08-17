import {Component} from 'react'
import './index.css'

import Heading from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {
    isLogin: false,
  }

  onStatus = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-con">
        <div className="card-con">
          <Heading isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.onStatus} />
          ) : (
            <Login login={this.onStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
