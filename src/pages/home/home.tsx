import { Typography, Button } from '@mui/material'

import HeroBg from '../../assets/homepage_assets/hero-bg.png'
import IngredientsBg from '../../assets/homepage_assets/ingredients.jpg'
import PlansBg from '../../assets/homepage_assets/plans.jpg'
import NavBar from '../../components/navbar/navbar'
import GenericUI from '../../components/Home/hero/hero'
import HeroCardSection from '../../components/Home/heroCard/heroCard'
import MealKit from '../../components/Home/mealKit/mealKit'
import PackageSection from '../../components/Home/packageContent/package'
import RecipeSection from '../../components/Home/recipes/recipes'

function Home() {
    return (
        <>
            <NavBar />

            {/* hero section */}
            <GenericUI bgImage={HeroBg}>
                <Typography variant='h4' sx={{ fontWeight: 600, color: "#FFFFFF" }}>
                    Healthy food for busy people
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: 500, color: "#FFFFFF" }}>
                    Imagine devouring delicious, healthy meals daily without so much as lifting a pot.
                </Typography>
            </GenericUI>

            {/* Hero cards section */}
            <HeroCardSection />

            {/* Meal Kit */}
            <MealKit />

            {/* Package content disclose section */}
            <PackageSection />

            {/* Ingredients and Recipes section */}
            <GenericUI bgImage={IngredientsBg}>
                <Typography variant='h4' sx={{ fontWeight: 600, color: "#FFFFFF" }}>
                    EXCEPTIONAL INGREDIENTS
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: 500, color: "#FFFFFF" }}>
                    Let us do the shopping! We source the best, seasonal produce from trusted nigerian suppliers..
                </Typography>
                <Button variant='contained'>View Ingredients</Button>
            </GenericUI>

            {/* Recipes section */}
            <RecipeSection />


            {/* Plans section */}
            <GenericUI bgImage={PlansBg}>
                <Typography variant='body1' sx={{ fontWeight: 500, color: "#FFFFFF" }}>
                    Skip weeks, swap recipes, and cancel anytime- only order what and when you want. No commitments.
                </Typography>
                <Button variant='contained'>View our plans</Button>
            </GenericUI>
        </>
    )
}

export default Home