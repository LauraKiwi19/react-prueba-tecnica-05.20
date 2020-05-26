
import React, { useState } from 'react';
import styled from 'styled-components';


import Item from './Item'
import MenuItem from './MenuItem'



const LeftSection = styled.section`
    min-width: 500px;
    width: 40%;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const RightSection = styled.section`
    min-width: 900px;
    width: 60%;
    background-color: purple;
`

const Logo = styled.div`
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: ${(props => props.theme.fontWeight.bold)};
    color: ${(props) => props.theme.colors.main};
`

const DescriptionSection = styled.div`
    padding: 2rem 2rem 2rem 0;
    background-color: red;    
`

const DetailButton = styled.button`
    background-color: black;
    padding: 1rem 1.5rem;
    color: white;
    border: none;
    display: block;
    font-size: ${(props => props.theme.fontSize.medium)};
    cursor: pointer;
`

const MenuContainer = styled.nav`
    background-color: orange;
    height: 6rem;
    color: white;
    border: none;
    font-size: ${(props => props.theme.fontSize.medium)};
    cursor: pointer;
`

const Home = () => {

    const [itemSelected, setNewItemSelected] = useState(1)

    const handleClick = itemClicked => setNewItemSelected(itemClicked)

    return (
        <>
            <LeftSection>
                <Logo>
                    Mater
                </Logo>
                <DescriptionSection>
                    <Item selectedItem={itemSelected} />
                </DescriptionSection>
                <DetailButton>Product Detail</DetailButton>
                <MenuContainer>
                    <MenuItem number={1} title='Chair Dining Nose qué' handleClick={handleClick} />
                    <MenuItem number={2} title='Table blablabla' handleClick={handleClick} />
                </MenuContainer>
            </LeftSection>

            <RightSection>

            </RightSection>
        </>

    )
}


export default Home;