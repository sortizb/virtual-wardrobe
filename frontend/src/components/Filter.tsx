import { Box, InputAdornment, TextField} from "@mui/material";
import searchIcon from '../assets/search.png';
import FilterSelector from "./FilterSelector";


function Filter() {

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
            <Box className="w-full flex flex-col gap-2 md:flex-row md:justify-end">
                <FilterSelector 
                    id="colors-filter"
                    label="Colors"
                    labelId="colors-filter-label"
                    options={["Blue", "Red", "Green"]}
                    minWidth={90}
                />
                <FilterSelector 
                id="season-filter"
                label="Season"
                labelId="season-filter-label"
                options={["Spring", "Summer", "Fall", "Winter"]}
                minWidth={95}
                />
                <FilterSelector 
                id="tags-filter"
                label="Tags"
                labelId="tags-filter-label"
                options={["Formal", "Casual", "Cozy"]}
                minWidth={75}
                />
                <FilterSelector 
                id="category-filter"
                label="Category"
                labelId="category-filter-label"
                options={["Upper", "Lower", "Shoes", "Accessories"]}
                minWidth={110}
                />
            </Box>
        </Box>
    )
}

export default Filter;