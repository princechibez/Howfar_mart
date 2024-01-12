import { Container, Content, ContentWrap, ImageSection, PackageContainer } from "./styles"
import AkaraImg from '../../../assets/homepage_assets/akara.png'
import { Button, Typography } from "@mui/material"
import { PackageContents } from "../../../models/packageContents"
import Greenmark from '../../../assets/homepage_assets/greenmark.png'


const PackageSection = () => {
    return (
        <Container>
            <ImageSection>
                <img src={AkaraImg} height="100%" width="100%" style={{ objectFit: 'cover' }} />
            </ImageSection>
            <PackageContainer>
                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>What’s inside each box?</Typography>
                <ContentWrap>
                    {
                        PackageContents.map((content, index) => (
                            <Content key={index}>
                                <img src={Greenmark} />
                                <Typography>{content.text}</Typography>
                            </Content>
                        ))
                    }
                </ContentWrap>
                <Button variant="contained">Start cooking</Button>
            </PackageContainer>
        </Container>
    )
}

export default PackageSection