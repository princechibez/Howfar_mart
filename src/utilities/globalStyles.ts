// import styled, { createGlobalStyle } from 'styled-components'

const deviceSize = {
    mobile: '425px',
    tablet: '768px',
    laptop: '1025px',
    laptopL: "1440px",
    desktop: "2560px"
}

const breakpoints = {
    longTablet: `(min-width: 992px and min-height: 800px)`,
    mobileMin: `(min-width: ${deviceSize.mobile})`,
    mobileMax: `(max-width: ${deviceSize.mobile})`,
    tabletMin: `(min-width: ${deviceSize.tablet})`,
    tabletMax: `(max-width: ${deviceSize.tablet})`,
    laptopMax: `(max-width: ${deviceSize.laptop})`,
    laptopMin: `(min-width: ${deviceSize.laptop})`,
    laptopL: `(max-width: ${deviceSize.laptopL})`,
    desktop: `(min-width: ${deviceSize.desktop})`
}

export {breakpoints}