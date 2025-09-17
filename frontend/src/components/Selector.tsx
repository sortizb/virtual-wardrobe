import { Autocomplete, Checkbox, TextField } from "@mui/material";
import type { SelectorOption } from "../models/Types";

interface SelectorProps {
    id: string;
    label: string;
    options: SelectorOption[];
    value: SelectorOption | SelectorOption[] | null;
    onChange: (newValue: SelectorOption | SelectorOption[] | null) => void;
    variant: "text" | "color";
    multiple?: boolean;
}

function Selector({id, label, options, value, onChange, variant, multiple}: SelectorProps) {
    return (
        <Autocomplete
        id={id}
        multiple={multiple}
        options={options}
        value={value}
        onChange={(_e, newValue) => onChange(newValue)}
        disableCloseOnSelect={multiple} // If multiple, don't close on select
        getOptionLabel={(opt) => opt.label}
        isOptionEqualToValue={(one, other) => one.value == other.value}
        renderOption={(props, option, { selected }) => {
                return (
                    <li {...props} className={`flex items-center gap-x-2 font-dmsans ${selected ? 'text-primary font-semibold' : ''}`}>
                        <Checkbox checked={selected} />
                        {variant === "color" && option.kind === "color" ? (
                            <div className="flex items-center gap-x-2">
                                <span className="w-4 h-4 rounded-full border"
                                style={{backgroundColor: option.value}}
                                />

                                <span>{option.label}</span>
                            </div>
                        ) : (
                            <span>{option.label}</span>
                        )}
                    </li> 
                )
            }}
        renderInput={(params) => (
            <TextField 
            {...params}
            label={label}
            />
        )}
        />
    )
}

export default Selector;