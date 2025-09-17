import { Box, InputAdornment, TextField } from "@mui/material";
import searchIcon from '../assets/search.png';
import Selector from "./Selector";
import type { SelectorOption } from "../models/Types";
import { useState } from "react";


function Filter() {

    const [ selectedColors, setSelectedColors ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedSeasons, setSelectedSeasons ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedTags, setSelectedTags ] = useState<SelectorOption | SelectorOption[] | null>([]);
    const [ selectedCategories, setSelectedCategories ] = useState<SelectorOption | SelectorOption[] | null>([]);



    const colors: SelectorOption[] = [
        {
            kind: "color",
            label: "Blue",
            value: "#2780F5"
        },
        {
            kind: "color",
            label: "Red",
            value: "#F53127"
        }
    ];

    const seasons: SelectorOption[] = [
        {
            kind: "text",
            label: "Spring",
            value: "Spring"
        },
        {
            kind: "text",
            label: "Summer",
            value: "Summer"
        },
        {
            kind: "text",
            label: "Fall",
            value: "Fall"
        },
        {
            kind: "text",
            label: "Winter",
            value: "Winter"
        }
    ];

    const tags: SelectorOption[] = [
        {
            kind: "text",
            label: "Cozy",
            value: "Cozy"
        },
        {
            kind: "text",
            label: "Casual",
            value: "Casual"
        },
        {
            kind: "text",
            label: "Formal",
            value: "Formal"
        }
    ]

    const categories: SelectorOption[] = [
        {
            kind: "text",
            label: "Upper",
            value: "Upper"
        },
        {
            kind: "text",
            label: "Lower",
            value: "Lower"
        },
        {
            kind: "text",
            label: "Outter",
            value: "Outter"
        },
        {
            kind: "text",
            label: "Shoes",
            value: "Shoes"
        },
        {
            kind: "text",
            label: "Accessory",
            value: "Accessory"
        },
    ]

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
                        options={colors}
                        value={selectedColors}
                        onChange={setSelectedColors}
                        variant="color"
                        multiple
                    />
                    <Selector 
                        id="season-filter"
                        label="Season"
                        options={seasons}
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
                        options={tags}
                        value={selectedTags}
                        onChange={setSelectedTags}
                        variant="text"
                        multiple
                    />
                    <Selector 
                        id="category-filter"
                        label="Category"
                        options={categories}
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