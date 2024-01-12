import { Typography } from '@mui/material'

import { HeroCards } from '../../../models/heroCards'
import { HeroCard, HeroCardContainer, HeroCardTextContainer } from './styles'

const HeroCardSection = () => {
    return (
        <HeroCardContainer>
            {
                HeroCards.map((card, index) => (
                    <HeroCard key={index}>
                        <img src={card.image} height={80} width={80} />
                        <HeroCardTextContainer>
                            <Typography sx={{ fontWeight: 600 }}>{card.title}</Typography>
                            <Typography variant='body1'>{card.description}</Typography>
                        </HeroCardTextContainer>
                    </HeroCard>
                ))
            }
        </HeroCardContainer>
    )
}

export default HeroCardSection