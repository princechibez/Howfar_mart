import { BackgroundImg, HeroContainer, HeroTextContainer } from './styles'

const GenericUI = ({ children, bgImage }) => {
    return (
        <HeroContainer>
            <BackgroundImg src={bgImage} />
            <HeroTextContainer>
                {children}
            </HeroTextContainer>
        </HeroContainer>
    )
}

export default GenericUI