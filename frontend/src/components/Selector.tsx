import { Autocomplete, Checkbox, TextField } from "@mui/material";
import type { SelectorOption } from "../models/Types";

interface SelectorProps {
    id: string;
    label: string;
    options: SelectorOption[];
    value: SelectorOption | SelectorOption[] | null;
    onChange: (newValue: SelectorOption | SelectorOption[] | null) => void;
    variant: "text" | "color" | "icon";
    multiple?: boolean;
}

function Selector({id, label, options, value, onChange, variant, multiple}: SelectorProps) {
    return (
        <Autocomplete
        id={id}
        multiple={multiple}
        limitTags={2}
        options={options}
        value={value}
        onChange={(_e, newValue) => onChange(newValue)}
        disableCloseOnSelect={multiple} // If multiple, don't close on select
        getOptionLabel={(opt) => opt.label}
        isOptionEqualToValue={(one, other) => one.value == other.value}
        renderOption={(props, option, { selected }) => {
                return (
                    <li {...props} className={`flex items-center gap-x-2 font-dmsans capitalize ${selected ? 'text-primary font-semibold' : ''}`}>
                        <Checkbox checked={selected} />
                        {variant !== "text" && option.kind !== "text" ? ( 
                            <div className="flex items-center gap-x-2">
                                {option.value ? (
                                    <span className={"w-5 h-5 border rounded-sm"}
                                    style={variant === "color" && option.kind === "color" ? {backgroundColor: option.value} : {}}
                                    >
                                        {variant === "icon" && option.kind === "icon" ? (
                                            <img src={option.value}/>
                                        ) : (<></>)}
                                    </span>
                                ) : (<></>)}
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