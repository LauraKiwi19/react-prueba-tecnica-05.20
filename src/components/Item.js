
import React from 'react';

//import fornitureData from '../services'




const Item = props => {

    if (props.selectedItem === 1) {
        return (
            <h1>HOAL</h1>
        )
    } else {
        return (
            <h1>
                ADOS
            </h1>
        )

    }


}

export default Item;