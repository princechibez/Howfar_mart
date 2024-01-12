import styled from 'styled-components';
import { CgMenuRight } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';

import { breakpoints } from '../../utilities/globalStyles'; 

const NavBarWrapper = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    /* box-shadow: 0px 1px 12px rgba(0,0,0,.4); */
    padding: 8px 12px;
    box-sizing: border-box;
    position: relative;
    z-index: 90;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
`

const NavBody = styled.section`
    width: 100%;
    height: 40px;    
    padding-left: 30px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLists = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    @media ${breakpoints.laptopMax} {
        justify-content: center;
        width: 100%;
        padding: 10px;
    }
`

const NavItems = styled.ul`
    @media ${breakpoints.laptopMin} {
        position: relative;
        left: 30px;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media ${breakpoints.laptopMax} {
        display: none;
        /* right: 200px; */
    }
`

const NavItem = styled.li`
    padding: 0 8px;
    margin: 0 12px;
`

// const NavItemLink = styled(NavLink)`
//     text-decoration: none;
//     font-size: 18px;
//     font-weight: 500;
// `

const NavBtnWrappers = styled(NavLists)`
    width: 20%;
    position: relative;
    align-self: center;
    right: 40px;
    display: flex;
    justify-content: center;

    @media ${breakpoints.laptopMax} {
        display: none;
    }
`

const DrawerIcon = styled(CgMenuRight)`
    display: none;
    @media ${breakpoints.laptopMax} {
        position: relative;
        right: 10px;
        display: flex;
        align-self: center;
        justify-self: center;
    }
`

const CloseBarIcon = styled(CgClose)`
    display: none;
    @media ${breakpoints.laptopMax} {
        position: relative;
        right: 10px;
        display: flex;
        align-self: center;
        justify-self: center;
    }
`

export {
    NavBarWrapper,
    NavBody,
    NavLists,
    NavBtnWrappers,
    NavItems,
    NavItem,
    // NavItemLink,
    DrawerIcon,
    CloseBarIcon
} 