import React from 'react';





const MenuItem = props => {

    /*     const getItemClicked = event => {
            const itemSelected = parseInt(event.target.innerText);
            return (
                props.handleClick(itemSelected))
        } */

    const getItemClicked = () => props.handleClick(props.number)

    return (
        <button onClick={getItemClicked}>
            <h1>{props.number}</h1>
            <p>{props.title}</p>
        </button>
    )
}

export default MenuItem;