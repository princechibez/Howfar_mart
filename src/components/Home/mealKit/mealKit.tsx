import { Button, Typography } from "@mui/material"
import { Container } from "./styles"

function MealKit() {
    return (
        <Container>
            <Typography sx={{fontWeight: 700, fontSize: 18}}>THE MEAL KIT MADE FOR YOU</Typography>
            <Typography>
                Choose delicious recipes. Order when convenient. Cook with seasonal ingredients.
            </Typography>
            <Button variant="contained">Start cooking</Button>
        </Container>
    )
}

export default MealKit