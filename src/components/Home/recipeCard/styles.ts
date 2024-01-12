import styled from 'styled-components';
import { breakpoints } from '../../../utilities/globalStyles';

const RecipeCardContainer = styled.section`
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

const RecipeCard = styled.div`
    width: 25%;
    height: 350px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;

    @media ${breakpoints.laptopMax} {
        width: 30%;
    }
    
    @media ${breakpoints.tabletMax} {
        width: 70%;
    }

    @media ${breakpoints.mobileMax} {
        width: 90%;
    }
`

const ImageSection = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #88ECE2;
`

const RecipeCardTextContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1D786F;
`

export { RecipeCardContainer, RecipeCard, ImageSection, RecipeCardTextContainer }