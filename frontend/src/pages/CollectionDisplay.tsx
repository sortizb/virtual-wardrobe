import { Box, Container, Grid } from "@mui/material";
import Filter from "../components/Filter";
import ItemDisplay from "../components/ItemDisplay";
import Navbar from "../components/Navbar";
import Greeting from "../components/Greeting";

import type { ItemType } from "../models/Types";
import useCollectionDisplayState from "../hooks/CollectionDisplay";
import { useEffect } from "react";
import { SKELETON_COUNT } from "../constants/global";

interface CollectionDisplayProps {
  whatToDisplay: ItemType;
}

function CollectionDisplay({ whatToDisplay }: Readonly<CollectionDisplayProps>) {
  const { displayItems, loadItems, activeFilter, applyFilters, resetFilters } =
    useCollectionDisplayState();

  useEffect(() => {
    loadItems(whatToDisplay);
    resetFilters();
  }, [loadItems, resetFilters, whatToDisplay]);

  // Skeleton keys for placeholders (strings are fine)
  const skeletonKeys = Array.from({ length: SKELETON_COUNT }, (_, i) => `skeleton-${i}`);

  return (
    <Box
      id="app_container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={{ xs: 6, md: 8 }}
      mb={{ xs: 5, md: 10 }}
    >
      <Navbar currentPage={whatToDisplay === "clothing" ? "closet" : "outfits"} />
      <Greeting />

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Filter
          kind={whatToDisplay}
          activeFilter={activeFilter}
          onFilterChange={applyFilters}
        />

        <Grid container spacing={2}>
          {displayItems && displayItems.length > 0 ? (
            displayItems.map((item, index) => (
              <Grid
                size={{ xs:6, sm: 4, md: 3, lg: 2}}
                key={`${item.id ?? index}`} 
              >
                <ItemDisplay
                  data={item} // item typed as ClothingPiece | Outfit
                  activeFilter={activeFilter}
                  onFilterChange={applyFilters}
                />
              </Grid>
            ))
          ) : (
            // Render skeleton placeholders when displayItems is undefined or empty
            skeletonKeys.map((key) => (
              <Grid size={{ xs:6, sm: 4, md: 3, lg: 2}} key={key}>
                <ItemDisplay data={undefined} activeFilter={activeFilter} onFilterChange={applyFilters} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default CollectionDisplay;
