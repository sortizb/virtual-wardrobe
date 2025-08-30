import { Container, Grid } from "@mui/material";
import Filter from "../components/Filter";
import ItemDisplay from "../components/ItemDisplay";
import ClothingPiece from "../models/ClothingPiece";
import type { Seasons } from "../models/Types";

const data: ClothingPiece = new ClothingPiece(
    "black_jacket",
    "Casual Black Jacket",
    "Upper", "black", new Set<Seasons>(["Spring", "Fall"]), new Set<string>(["casual"]), "/dummy_data/images/black_jacket.png"
);

const items= [data, data, data, data, data, data, undefined]

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