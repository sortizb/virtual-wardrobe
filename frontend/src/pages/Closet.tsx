import { Container, Grid } from "@mui/material";
import Filter from "../components/Filter";
import ItemDisplay from "../components/ItemDisplay";
import { blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch } from '../../dummy_data/items/clothing_items';

const items = [blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch, blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch];

function Closet() {
    return (
        <Container className="max-w-screen flex flex-col gap-4">
            <Filter/>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid size={{ xs:6, sm: 4, md: 3, lg: 2}}>
                        <ItemDisplay data={item} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Closet;