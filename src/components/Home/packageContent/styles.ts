import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 400px;
    margin: 42px 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

const ImageSection = styled.div`
    height: 100%;
    width: 40%;

    @media (max-width: 550px) {
        display: none;
    }
`

const PackageContainer = styled.div`
    background-color: #F0F0F0;
    height: 100%;
    flex: 1;
    padding: 3em;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    box-sizing: border-box;
`
const ContentWrap = styled.div`
    display: flex;
    flex-flow: column;
    gap: 1em;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`


export { Container, ImageSection, PackageContainer, ContentWrap, Content }