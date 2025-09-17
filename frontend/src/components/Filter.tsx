import { Box, InputAdornment, TextField } from "@mui/material";
import searchIcon from '../assets/search.png';
import Selector from "./Selector";
import type { ClothingType, Color, FilterOptions, ItemType, Seasons, SelectorOption } from "../models/Types";
import { dummyUser } from "../../dummy_data/users/users";
import { useEffect, useState } from "react";
import { getAllUserColors, getAllUserTags } from "../services/user";

interface FilterProps {
    kind: ItemType;
}

function Filter({ kind }: FilterProps) {

    const [ filterOptions, setFilterOptions ] = useState<FilterOptions | undefined>({
        colors: [],
        tags: [],
        seasons: [],
        clothingTypes: []
    });

    const [ selectedColors, setSelectedColors ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedSeasons, setSelectedSeasons ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedTags, setSelectedTags ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedCategories, setSelectedCategories ] = useState<SelectorOption | SelectorOption[] | null>([]);

    async function loadFilterOptions(kind: ItemType) {
        const seasons: SelectorOption[] = ["Spring", "Summer", "Fall", "Winter"].map((season: string) => (
            {
                kind: "text",
                label: season,
                value: season
            }
        ));
        const categories: SelectorOption[] = ["Outer", "Upper", "Lower", "Shoes", "Accessory"].map((category: string) => (
            {
                kind: "text",
                label: category,
                value: category
            }
        ))
        const tags: SelectorOption[] = getAllUserTags(dummyUser, kind).map((tag: string) => (
            {
                kind: "text",
                label: tag,
                value: tag
            }
        ));
        const colors: SelectorOption[] = getAllUserColors(dummyUser).map((color: Color) => (
            {
                kind: "color",
                label: color.name,
                value: color.color
            }
        ));

        const filterOptions: FilterOptions = {
            colors: colors,
            tags: tags,
            seasons: seasons,
            clothingTypes: categories,
        }

        setFilterOptions(filterOptions);
    }

    useEffect(() => {
        loadFilterOptions(kind);
    }, [kind])

    return (
        <Box 
        component="form" 
        autoComplete="off" 
        noValidate 
        className="flex flex-col flex-auto grow shrink gap-4 md:flex-row border-2 border-gray-200 p-5 rounded-2xl md:rounded-4xl">

            <TextField
                id="search"
                label="Search"
                size="medium"
                type="text"
                variant="outlined"
                className="w-full"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={searchIcon} className="max-w-5"/>
                            </InputAdornment>
                        ),
                        classes: {
                            root: "rounded-2xl bg-gray-100"
                        }
                    }
                }}
            />
            <Box className="w-full flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <Selector 
                        id="colors-filter"
                        label="Color"
                        options={filterOptions ? filterOptions.colors : []}
                        value={selectedColors}
                        onChange={setSelectedColors}
                        variant="color"
                        multiple
                    />
                    <Selector 
                        id="season-filter"
                        label="Season"
                        options={filterOptions ? filterOptions.seasons : []}
                        value={selectedSeasons}
                        onChange={setSelectedSeasons}
                        variant="text"
                        multiple
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Selector 
                        id="tags-filter"
                        label="Tags"
                        options={filterOptions ? filterOptions.tags : []}
                        value={selectedTags}
                        onChange={setSelectedTags}
                        variant="text"
                        multiple
                    />
                    <Selector 
                        id="category-filter"
                        label="Category"
                        options={filterOptions ? filterOptions.clothingTypes : []}
                        value={selectedCategories}
                        onChange={setSelectedCategories}
                        variant="text"
                        multiple
                    />
                </div>
            </Box>
        </Box>
    )
}

export default Filter;