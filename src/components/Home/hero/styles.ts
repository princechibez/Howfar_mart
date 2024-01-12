import styled from 'styled-components';
import { breakpoints } from '../../../utilities/globalStyles';

const HeroContainer = styled.section`
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    position: relative;

    @media ${breakpoints.tabletMax} {
        justify-content: center;
        height: calc(100vh -  60px);
    }
`

const BackgroundImg = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;

`

const HeroTextContainer = styled.div`
    height: 80%;
    width: 25%;
    position: absolute;
    right: 5%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 14px;

    @media ${breakpoints.laptopMax} {
        width: 35%;
    }
    
    @media ${breakpoints.tabletMax} {
        width: 60%;
        right: 20%;
        text-align: center;
    }

    @media ${breakpoints.mobileMax} {
        width: 80%;
        right: 10%;
        text-align: center;
    }
`

export { HeroContainer, BackgroundImg, HeroTextContainer }