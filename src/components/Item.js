
import React from 'react';

import fornitureData from '../services/fornitureData'




const Item = props => {

    return (
        <>
            <h1>
                {fornitureData[props.selectedItem - 1].author}
            </h1>
            <p> {fornitureData[props.selectedItem - 1].title}</p>
        </>
    )


}

export default Item;