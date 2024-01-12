import { Typography, Button } from '@mui/material'
import { Container } from './styles'
import RecipeCardSection from '../recipeCard/recipeCard'

function RecipeSection() {
    return (
        <>
            <Container>
                {/* Header */}
                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>25+ RECIPES EVERY WEEK</Typography>
                <Typography>
                    Curated by our in house chefs and approved by our nutritionist, there's something for everyone,
                    prepare on your own in 30 minutes or less.
                </Typography>

                {/* Recipe cards */}
                <RecipeCardSection />
                <Button variant="contained">See our menus</Button>
            </Container>
        </>
    )
}

export default RecipeSection