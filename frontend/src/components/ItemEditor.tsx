import { Box, Button, Card, CardMedia, Stack, TextField, Typography } from "@mui/material";
import type ClothingPiece from "../models/ClothingPiece";
import type Outfit from "../models/Outfit";
import type { ItemType } from "../models/Types";
import Selector from "./Selector";

interface ItemEditorProps {
    item_type: ItemType;
    new_item: Boolean;
    item_data?: ClothingPiece | Outfit
}

function ItemEditor({ item_type, new_item, item_data }:ItemEditorProps) {
    console.log(item_type, new_item, item_data)

    return (
        <Box className='flex flex-col items-center justify-center w-full py-5 md:px-10 md:py-10 md:border-2 rounded-xl border-gray-200 md:mt-2 lg:w-[85%]'>

            <Typography 
            variant="h5"
            className="font-dmsans capitalize font-semibold"
            >
                {item_data ? item_data.name : `New ${item_type}`}
            </Typography>

            <Box className='flex flex-col gap-5 md:flex-row w-full p-5 items-center justify-center lg:gap-15'>
                <Card className="rounded-2xl shadow-md border-2 border-gray-100">
                    <CardMedia 
                        component="img"
                        image={item_data?.imageUrl ? item_data?.imageUrl : ''}
                        alt={item_data?.name ? item_data.name : 'Add Item'}
                        className="p-2 rounded-2xl w-60 md:p-4 md:rounded-4xl h-70 md:h-90 md:w-80 lg:h-110 lg:w-90"
                    />
                </Card>
                <Stack gap={2}>
                    <TextField
                        id="name"
                        label="Name"
                        type="text"
                        size="medium"
                        value={item_data?.name ? item_data.name : ''}
                        required
                        slotProps={{
                            input: {
                                classes: {
                                    root: "rounded-xl w-65 lg:w-90"
                                }
                            }
                        }}
                    />
                    {(item_type == "clothing") ? (
                        <>
                            <Selector 
                                id="color-selector"
                                label="Color"
                                labelId="tags-selector-label"
                                options={["Blue", "Red"]}
                                minWidth={200}
                                />
                            <Selector 
                                id="type-selector"
                                label="Clothing Type"
                                labelId="type-selector-label"
                                options={["Outter", "Upper", "Lower", "Shoes", "Accessory"]}
                                minWidth={200}
                                />
                        </>
                    ) : (
                        <Selector
                            id="clothes-selector"
                            label="Clothes"
                            labelId="clothes-selector-label"
                            options={["Load", "User", "Clothing", "Here"]}
                            minWidth={200}
                        />  
                    )}
                    <Selector 
                        id="season-selector"
                        label="Season"
                        labelId="season-selector-label"
                        options={["Spring", "Summer", "Fall", "Winter"]}
                        minWidth={200}
                        />
                    <Selector 
                        id="tags-selector"
                        label="Tags"
                        labelId="tags-selector-label"
                        options={["Formal", "Casual", "Cozy"]}
                        minWidth={200}
                        />
                    <Button
                    size="large"
                    className="bg-primary rounded-xl normal-case text-white text-md"
                    >
                        {new_item ? "Create" : "Save"}
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default ItemEditor;