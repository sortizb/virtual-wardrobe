import { FormControl, Menu, MenuItem, TextField } from "@mui/material";

function Searchbar() {
    return (
        <FormControl className="w-full">
            <TextField label="Search" variant="filled" size="small"/>
        </FormControl>
    )
}

export default Searchbar;