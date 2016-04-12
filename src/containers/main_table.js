import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTimezone } from '../actions/index'; // import getTimezone action from external file


class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 5
        };
    }

    changeState() {
        var tester = this.props.getTimezone('Warsaw');
        console.log(tester);

        this.setState({
            count: this.state.count + 1
        });
    };

    render(){
        return(
            <div>
                <table className="col-md-4 table">
                    <thead>{this.props.name}</thead>
                    <tbody>
                        <tr onClick={this.changeState.bind(this)}>
                            <td>Click on this row</td>
                            <td>Second column</td>
                            <td>{this.state.count}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

// Integrate ReactJS with Redux
function mapDispatchToProps(dispatch){
    return bindActionCreators({ getTimezone }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)