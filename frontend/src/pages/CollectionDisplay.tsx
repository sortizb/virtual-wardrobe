import { Box, Container, Grid } from "@mui/material";
import Filter from "../components/Filter";
import ItemDisplay from "../components/ItemDisplay";
import Navbar from "../components/Navbar";
import Greeting from "../components/Greeting";

import type { ItemType } from "../models/Types";
import useCollectionDisplayState from "../hooks/CollectionDisplay";
import { useEffect } from "react";

interface CollectionDisplayProps {
    whatToDisplay: ItemType;
}

function CollectionDisplay({whatToDisplay}: CollectionDisplayProps) {

    const {displayItems, loadItems, activeFilter, applyFilters, resetFilters} = useCollectionDisplayState();
    const SKELETON_COUNT = 6;

    useEffect(() => {
        loadItems(whatToDisplay);
        resetFilters();
    }, [whatToDisplay])

    return (
        <Box id='app_container' className='flex flex-col items-center gap-8 mb-5 md:mb-10 lg:mb-15'>
            <Navbar currentPage={whatToDisplay == "clothing" ? "closet" : "outfits"}/>
            <Greeting />
            <Container className="max-w-screen flex flex-col gap-4">
                <Filter kind={whatToDisplay} activeFilter={activeFilter} onFilterChange={applyFilters}/>
                <Grid container spacing={2}>
                    {displayItems ? displayItems.map((item, index) => (
                        <Grid size={{ xs:6, sm: 4, md: 3, lg: 2}} key={`${item.id}-${index}`}>
                            <ItemDisplay data={item} activeFilter={activeFilter} onFilterChange={applyFilters}/>
                        </Grid>
                    )) : (
                        // Render a bunch of Skeletons
                        Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                            <Grid size={{ xs:6, sm: 4, md: 3, lg: 2}} key={index}>
                                <ItemDisplay data={undefined} activeFilter={activeFilter} onFilterChange={applyFilters}/>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </Box>
    );
}

export default CollectionDisplay;