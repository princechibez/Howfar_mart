import { Typography } from '@mui/material'

import { Recipes } from '../../../models/recipes'
import { ImageSection, RecipeCard, RecipeCardContainer, RecipeCardTextContainer } from './styles'

const RecipeCardSection = () => {
    return (
        <RecipeCardContainer>
            {
                Recipes.map((recipe, index) => (
                    <RecipeCard key={index}>
                        <ImageSection>
                            <img src={recipe.image} height={200} width={200} />
                        </ImageSection>
                        <RecipeCardTextContainer>
                            <Typography sx={{ fontWeight: 500, color: "#fff" }}>{recipe.name}</Typography>
                        </RecipeCardTextContainer>
                    </RecipeCard>
                ))
            }
        </RecipeCardContainer>
    )
}

export default RecipeCardSection