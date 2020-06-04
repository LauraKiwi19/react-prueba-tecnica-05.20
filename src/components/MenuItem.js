import React from 'react';
import styled from 'styled-components';



const MenuButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    padding-right: 2rem;
    cursor: pointer;
    background-color: transparent;
    color:  ${(props => props.theme.colors.light)};
    transition: color 1s ease-in-out;
    &:before{
        content:'';
        background-color: black;
        height: 0.2rem;
        width:0;
        transition: width 1s ease-in-out;
    }
    &:hover{
        color: ${(props) => props.theme.colors.main};
        &:before{
            width: 100%;
        }
    }

    &.active{
        color: ${(props) => props.theme.colors.main};
        &:before{
            width: 100%;
        }
    }

    &:focus{
        outline: none;
    }

`

const MenuNumber = styled.p`
    color: ${(props => props.theme.colors.light)};
    padding: 0.3rem 0;
`

const MenuItem = props => {

    const getItemClicked = () => props.handleClick(props.number)



    return (

        <MenuButton onClick={getItemClicked} className={props.number === props.itemSelected ? 'active' : ''}>
            <MenuNumber>{props.number}</MenuNumber>
            <p>{props.title}</p>
        </MenuButton>
    )
}

export default MenuItem;