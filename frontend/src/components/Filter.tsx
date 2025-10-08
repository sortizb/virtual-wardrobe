import { Box, InputAdornment, TextField } from "@mui/material";
import searchIcon from '../assets/search.png';
import Selector from "./Selector";
import type { ItemType, SelectorOption } from "../models/Types";
import { useEffect, useState } from "react";
import { useFilterState } from "../hooks/Filter";

interface FilterProps {
    kind: ItemType;

}

function Filter({ kind }: FilterProps) {

    const { filterOptions, loadOptions } = useFilterState();

    const [ selectedColors, setSelectedColors ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedSeasons, setSelectedSeasons ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedTags, setSelectedTags ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedCategories, setSelectedCategories ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedClothing, setSelectedClothing ] = useState<SelectorOption | SelectorOption[] | null>([]);


    useEffect(() => {
        loadOptions(kind);
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
                    {kind === "clothing" ? (
                        <Selector 
                            id="category-filter"
                            label="Category"
                            options={filterOptions ? filterOptions.clothingTypes : []}
                            value={selectedCategories}
                            onChange={setSelectedCategories}
                            variant="text"
                            multiple
                        />
                    ) : (
                        <Selector 
                            id="clothing-filter"
                            label="Clothing Pieces"
                            options={filterOptions ? filterOptions.clothingPieces : []}
                            value={selectedClothing}
                            onChange={setSelectedClothing}
                            variant="icon"
                            multiple
                        />
                    )}
                </div>
            </Box>
        </Box>
    )
}

export default Filter;