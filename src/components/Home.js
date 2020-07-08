
import React, { useState } from 'react';
import styled from 'styled-components';


import Item from './Item'
import MenuItem from './MenuItem'

import fornitureData from '../services/fornitureData'




const LeftSection = styled.section`
    min-width: 500px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
`

const RightSection = styled.section`
    min-width: 900px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`

const Logo = styled.div`
    font-size: 2rem;
    font-weight: ${(props => props.theme.fontWeight.bold)};
    color: ${(props) => props.theme.colors.main};
    font-family: 'Noto Serif', serif;
`

const DescriptionSection = styled.div`
    padding: 2rem 2rem 2rem 0;
`

const DetailButton = styled.button`
    background-color: black;
    padding: 1rem 1.5rem;
    color: white;
    border: none;
    display: block;
    cursor: pointer;
    max-width: 200px;
`

const MenuContainer = styled.nav`
    height: 6rem;
    color: white;
    border: none;
    font-size: ${(props => props.theme.fontSize.medium)};
    cursor: pointer;
    display: flex;
`
const ForniturePicture = styled.img`
    height: 100%;
    width: 100%;
    max-height: 500px;
    max-width: 500px;
`

const Home = () => {

    const [itemSelected, setNewItemSelected] = useState(1)

    const handleClick = itemClicked => setNewItemSelected(itemClicked)

    const showFornitureImage = () => {
        const fornitureClicked = fornitureData.filter(item => item.id === itemSelected);
        return (
            <ForniturePicture src={fornitureClicked.map(item => item.img)} />
        )
    }



    return (
        <>
            <LeftSection>
                <Logo>
                    Mater
                </Logo>
                <DescriptionSection>
                    <Item selectedItem={itemSelected} />
                    <DetailButton>Product Details</DetailButton>
                </DescriptionSection>
                <MenuContainer>
                    {fornitureData.map(item => {
                        return (
                            <MenuItem number={item.id} title={item.title} handleClick={handleClick} itemSelected={itemSelected} />
                        )
                    })}
                </MenuContainer>
            </LeftSection>

            <RightSection>
                {showFornitureImage()}
            </RightSection>
        </>

    )
}


export default Home;