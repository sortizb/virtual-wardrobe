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
        <FormControl sx={{minWidth: minWidth, width: "fit"}}>
            <InputLabel id={labelId} className="mb-10">{label}</InputLabel>
            <Select
            id={id}
            label={label}
            labelId={labelId}
            multiple={multiple}
            className={className}
            autoWidth
            slotProps={{
                root: {className: "rounded-xl"}
            }}
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