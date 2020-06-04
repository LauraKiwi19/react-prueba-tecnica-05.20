
import React, { useState } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'


import Item from './Item'
import MenuItem from './MenuItem'

import blackChair from '../images/black-chair.png'
import blackTable from '../images/black-table.png'




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

/* const ForniturePicture = styled(animated.img)`
    height: 100%;
    width: 100%;
    max-height: 500px;
    max-width: 500px;
` */

const Home = () => {

    const [itemSelected, setNewItemSelected] = useState(1)

    const handleClick = itemClicked => setNewItemSelected(itemClicked)

    /*     const props = useSpring({
            to: { opacity: 1, marginTop: '0' },
            from: { opacity: 0, marginTop: '-1000px' }
        } */



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
                    <MenuItem number={1} title='Chair Dining Nose qué' handleClick={handleClick} itemSelected={itemSelected} />
                    <MenuItem number={2} title='Table blablabla' handleClick={handleClick} itemSelected={itemSelected} />
                </MenuContainer>
            </LeftSection>

            <RightSection>
                <Spring
                    from={{ opacity: 0, marginTop: '-1000px' }}
                    to={{ opacity: 1, marginTop: '0' }}>
                    {props => <ForniturePicture style={props} src={itemSelected === 1 ? blackChair : blackTable} />}
                </Spring>

            </RightSection>
        </>

    )
}


export default Home;