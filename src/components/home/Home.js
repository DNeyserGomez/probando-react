import React, { Component } from 'react';

const User = ( props ) => (
    <ul class="collection">
        <li class="collection-item">{props.name} {props.last}</li>
    </ul>
)

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(users => {
                users.results.forEach(user => {
                    let data = {
                        name:user.name.first,
                        last:user.name.last
                    }
                    this.setState({ users:this.state.users.concat([data]) })
                })
        })
    }

    render() {
        console.log( this.state.users.length )
        if( this.state.users.length > 0 ) {
            return(
                <div>{ this.state.users.map(user => <User name={user.name} last={user.last} />) }</div>
            )
        }
        return(<p>Cargando Usuarios...</p>)
    }

}

export default Home;