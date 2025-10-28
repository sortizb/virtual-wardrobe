import { useCallback, useState } from "react";
import { dummyUser } from "../../dummy_data/users/users";
import type { ActiveFilter, FilterOptions, ItemType } from "../models/Types";
import { getUserOptions } from "../services/user";



// This is supposed to request user information from the API, for the moment it just loads dummy data
function loadFilterOptions(itemType: ItemType, setFilterOptions: (filterOptions: FilterOptions) => void) {
    const filterOptions: FilterOptions = getUserOptions(dummyUser, itemType, "filter") as FilterOptions;
    setFilterOptions(filterOptions);
}

export function useFilterState() {
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions | undefined>({
            colors: [],
            tags: [],
            seasons: [],
            clothingTypes: [],
            clothingPieces: []
        });
    const loadOptions = useCallback((itemType: ItemType) => loadFilterOptions(itemType, setFilterOptions), [setFilterOptions]);
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, onFilterChange: (activeFilter: Partial<ActiveFilter>) => void ) => {
        onFilterChange({ search: event.target.value })
    };
    return {filterOptions, loadOptions, handleSearchChange};
}