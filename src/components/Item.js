
import React from 'react';
import styled from 'styled-components';


import fornitureData from '../services/fornitureData'


const ItemAuthor = styled.h3`
    color: ${(props) => props.theme.colors.light};
    padding: 1rem 0;
`

const ItemTitle = styled.h2`
    font-weight: ${(props) => props.theme.fontWeight.bold};
`
const ItemDescription = styled.p`
    color: ${(props) => props.theme.colors.light};
    text-align: left;
    padding: 1.5rem 0;
`


const Item = props => {

    return (
        <>

            <ItemAuthor>{fornitureData[props.selectedItem - 1].author}</ItemAuthor>
            <ItemTitle>{fornitureData[props.selectedItem - 1].title}</ItemTitle>
            <ItemDescription>{fornitureData[props.selectedItem - 1].description}</ItemDescription>

        </>
    )


}

export default Item;