import styled from 'styled-components';
import { breakpoints } from '../../../globalStyles';


// const MenuIt = styled(MenuItem)`
//     &:hover {
//         background-color: "#2196F3";
//     }
// `

const NavBtnWrappers = styled.div`
    position: absolute;
    bottom: 0;
    width: 80%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: red;

    @media ${breakpoints.laptopMax} {
        display: none;
    }
`

export {
    // MenuIt,
    NavBtnWrappers
}