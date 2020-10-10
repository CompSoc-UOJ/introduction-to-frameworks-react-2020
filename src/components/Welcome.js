import React , {Component} from  'react'

class Welcome extends Component {
    render(){
    return <h1>Welcome {this.props.name} birthday {this.props.birthday}</h1>
    }

}

export default Welcome