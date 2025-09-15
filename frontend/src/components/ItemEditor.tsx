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
        <Box gap={4} className='flex flex-col items-center justify-center w-full lg:w-[80%] px-5 py-10 border-2 rounded-xl border-gray-200 md:mt-10'>

            <Typography 
            variant="h5"
            className="font-dmsans capitalize font-semibold"
            >
                {item_data ? item_data.name : `New ${item_type}`}
            </Typography>

            <Box gap={4} className='flex flex-col md:flex-row w-full p-5 items-center justify-center'>
                <Card className="rounded-2xl shadow-md border-2 border-gray-100">
                    <CardMedia 
                        component="img"
                        image={item_data?.imageUrl ? item_data?.imageUrl : ''}
                        alt={item_data?.name ? item_data.name : 'Add Item'}
                        className="p-2 rounded-2xl w-60 md:p-4 md:rounded-4xl h-70 md:h-90 lg:h-100"
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
                                    root: "rounded-xl"
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
                                minWidth={95}
                                className="w-full"
                            />
                            <Selector 
                                id="type-selector"
                                label="Clothing Type"
                                labelId="type-selector-label"
                                options={["Outter", "Upper", "Lower", "Shoes", "Accessory"]}
                                minWidth={95}
                                className="w-full"
                            />
                        </>
                    ) : (<></>)}
                    <Selector 
                        id="season-selector"
                        label="Season"
                        labelId="season-selector-label"
                        options={["Spring", "Summer", "Fall", "Winter"]}
                        minWidth={95}
                        className="w-full"
                    />
                    <Selector 
                        id="tags-selector"
                        label="Tags"
                        labelId="tags-selector-label"
                        options={["Formal", "Casual", "Cozy"]}
                        minWidth={95}
                        className="w-full"
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