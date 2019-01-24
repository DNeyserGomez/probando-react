import React, { Component } from 'react';
import * as M from 'materialize-css';
import Home from '../home/Home';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { question_text: '', pub_date: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        
    }
    handleSubmit(event) {
        console.log('A name was submitted: '+this.state.question+this.state.answer)
        event.preventDefault();
        fetch('http://10.0.2.167:8000/polls/results/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(data => {
                console.log(data)
                M.toast({html: 'Question and answer saved'});
                this.setState({question: '', answer: ''});
                window.location.reload();
            })	
            .catch(err => console.log(err));
    }
    /*fetchDates() {
        fetch('http://10.0.2.167:8000/polls')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data })
        })
    }*/
    render() {
        return(
            <div>
                <form id="formreceived" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input name="question_text" value={this.state.question} onChange={this.handleChange} placeholder="Enter question" id="question" type="text" className="validate"/>
                            <label for="question">Do you have any question?</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input name="pub_date" value={this.state.answer} onChange={this.handleChange} placeholder="Enter answer" id="answer" type="text" className="validate"/>
                            <label for="answer">Enter answer here!</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col m2">
                            <button className="waves-effect waves-light btn" type="submit" value="Submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;