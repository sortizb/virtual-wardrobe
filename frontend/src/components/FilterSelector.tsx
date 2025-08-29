import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface FilterSelectorProps {
    id: string;
    label: string;
    labelId: string;
    multiple?: boolean;
    options: string[];
    className?: string;
    minWidth: number;
}

function FilterSelector({id, label, labelId, multiple, options, className, minWidth}: FilterSelectorProps) {
    return (
        <FormControl sx={{minWidth: minWidth}}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
            id={id}
            labelId={labelId}
            multiple={multiple}
            className={className}
            autoWidth
            >
                {options.map((option) => (
                    <MenuItem value={option}>
                        {option}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    )
}

export default FilterSelector;