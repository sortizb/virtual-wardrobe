import { Box, InputAdornment, TextField } from "@mui/material";
import searchIcon from '../assets/search.png';
import Selector from "./Selector";
import type { ActiveFilter, ItemType } from "../models/Types";
import { useEffect } from "react";
import { useFilterState } from "../hooks/Filter";

interface FilterProps {
    kind: ItemType;
    activeFilter: ActiveFilter;
    onFilterChange: (filters: Partial<ActiveFilter>) => void;
}

function Filter({ kind, activeFilter, onFilterChange }: Readonly<FilterProps>) {

    const { filterOptions, loadOptions, handleSearchChange } = useFilterState();

    useEffect(() => {
        loadOptions(kind);
    }, [kind, loadOptions])

    return (
        <Box 
        component="form" 
        autoComplete="off" 
        noValidate 
        className="flex flex-col flex-auto grow shrink gap-4 md:flex-row border-2 border-gray-200 p-5 rounded-2xl md:rounded-4xl hover:shadow-xl">

            <TextField
                id="search"
                label="Search"
                value={activeFilter.search}
                onChange={(e) => handleSearchChange(e, onFilterChange)}
                size="medium"
                type="text"
                variant="outlined"
                className="w-full"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={searchIcon} className="max-w-5" alt=""/>
                            </InputAdornment>
                        ),
                        classes: {
                            root: "rounded-2xl"
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
                        value={activeFilter.colors}
                        onChange={(newValue) => {
                            if (newValue) {
                                if (Array.isArray(newValue)) {
                                    onFilterChange({colors: newValue});
                                }
                                else {
                                    onFilterChange({colors: [newValue]});
                                }
                            }
                            else {
                                onFilterChange({colors: []});
                            }
                        }}
                        variant="color"
                        multiple
                    />
                    <Selector 
                        id="season-filter"
                        label="Season"
                        options={filterOptions ? filterOptions.seasons : []}
                        value={activeFilter.seasons}
                        onChange={(newValue) => {
                            if (newValue) {
                                if (Array.isArray(newValue)) {
                                    onFilterChange({seasons: newValue});
                                }
                                else {
                                    onFilterChange({seasons: [newValue]});
                                }
                            }
                            else {
                                onFilterChange({seasons: []});
                            }
                        }}
                        variant="text"
                        multiple
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Selector 
                        id="tags-filter"
                        label="Tags"
                        options={filterOptions ? filterOptions.tags : []}
                        value={activeFilter.tags}
                        onChange={(newValue) => {
                            if (newValue) {
                                if (Array.isArray(newValue)) {
                                    onFilterChange({tags: newValue});
                                }
                                else {
                                    onFilterChange({tags: [newValue]});
                                }
                            }
                            else {
                                onFilterChange({tags: []});
                            }
                        }}
                        variant="text"
                        multiple
                    />
                    {kind === "clothing" ? (
                        <Selector 
                            id="category-filter"
                            label="Category"
                            options={filterOptions ? filterOptions.clothingTypes : []}
                            value={activeFilter.clothingType}
                            onChange={(newValue) => {
                                if (newValue) {
                                    if (Array.isArray(newValue)) {
                                        onFilterChange({clothingType: newValue});
                                    }
                                    else {
                                        onFilterChange({clothingType: [newValue]});
                                    }
                                }
                                else {
                                    onFilterChange({clothingType: []});
                                }
                            }}
                            variant="text"
                            multiple
                        />
                    ) : (
                        <Selector 
                            id="clothing-filter"
                            label="Clothing Pieces"
                            options={filterOptions ? filterOptions.clothingPieces : []}
                            value={activeFilter.clothingPieces}
                            onChange={(newValue) => {
                                if (newValue) {
                                    if (Array.isArray(newValue)) {
                                        onFilterChange({clothingPieces: newValue});
                                    }
                                    else {
                                        onFilterChange({clothingPieces: [newValue]});
                                    }
                                }
                                else {
                                    onFilterChange({clothingPieces: []});
                                }
                            }}
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