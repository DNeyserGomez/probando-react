import React, { Component } from 'react';

const User = ( props ) => (
        <li className="collection-item"><h6>{props.question}</h6>{props.pubdate}</li>
)

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    fetchDate(){
        return(
            fetch('http://10.0.2.167:8000/polls')
                .then(response => response.json())
                .then(users => {
                    users.results.forEach(user => {
                        let data = {
                            question:user.question_text,
                            pubdate:user.pub_date,
                        }
                        this.setState({ users:this.state.users.concat([data]) })
                    })
            })
        );
        
    }
    componentDidMount() {
        this.fetchDate();
        /*fetch('http://10.0.2.167:8000/polls')
            .then(response => response.json())
            .then(users => {
                users.results.forEach(user => {
                    let data = {
                        question:user.question_text,
                        pubdate:user.pub_date,
                    }
                    this.setState({ users:this.state.users.concat([data]) })
                })
        })*/
    }

    render() {
        //console.log( this.state.users.length )
        //if( this.state.users.length > 0 ) {
            return(
                <div><ul className="collection">{ this.state.users.map(user => <User question={user.question} pubdate={user.pubdate} />) }</ul></div>
            )
        //}
        //return(<p>Cargando Usuarios...</p>)
    }

}

export default Home;