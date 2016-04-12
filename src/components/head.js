import React from 'react';

export default (props) => {

    function average(sum) {
        return(
            sum
        );
    }

    return(
        <div>
            <h3>This is example head</h3>
            <h5>{average(props.args)}</h5>
            <hr />
        </div>
    );
}