import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { frFR } from '@mui/material/locale'
import PoppinsTtf from '../assets/fonts/Poppins-Regular.ttf'

let mui_theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial',
        button: {
            textTransform: 'none'
        },
        h6: {
            // color: '#444444'
        },
        body1: {
            // color: '#444444'
            fontSize: 14
        },
        allVariants: { color: "#323232" }
    },
    palette: {
        text: {
            primary: '#444444'
        },
        primary: {
            main: '#2196F3',
            // dark: '#444444',
            light: '#5C7184'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @FontFace {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400,
                src: local('Poppins'), 
                    local('Poppins-Regular'), 
                    url(${PoppinsTtf}), format('ttf');
            }
            `,
        },
        MuiButton: {
            // styleOverrides: { contained: { backgroundColor: '#E60736' } }
        }
    }
},
    frFR,
);

mui_theme = responsiveFontSizes(mui_theme);

export { mui_theme }