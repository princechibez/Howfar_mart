import styled from 'styled-components';
import { breakpoints } from '../../../utilities/globalStyles';



const HeroCardContainer = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3em;
    padding: 1em 0;
    margin: 42px 0;

    @media ${breakpoints.laptopMax} {
        gap: 1em;
    }
    
    @media ${breakpoints.tabletMax} {
        flex-flow: column;
        gap: 2em;
    }
`

const HeroCard = styled.div`
    width: 25%;
    height: 250px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    gap: 5px;
    padding: 14px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

    @media ${breakpoints.laptopMax} {
        width: 30%;
    }
    
    @media ${breakpoints.tabletMax} {
        width: 70%;
    }

    @media ${breakpoints.mobileMax} {
        width: 80%;
    }
`

const HeroCardTextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    gap: 5px;
`

export { HeroCardContainer, HeroCard, HeroCardTextContainer }