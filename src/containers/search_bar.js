import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: '',
            value: 'Example search text'
        };
    }

    setValue(event){
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.setValue.bind(this)}
                />
            </div>
        );
    }
}
