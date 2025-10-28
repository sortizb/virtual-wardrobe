import { Box, Button, Card, CardMedia, Icon, Stack, TextField, Typography } from "@mui/material";
import type ClothingPiece from "../models/ClothingPiece";
import type Outfit from "../models/Outfit";
import type { ItemType } from "../models/Types";
import Selector from "./Selector";
import addIcon from "../assets/add.png";
import { useEditorState } from "../hooks/ItemEditor";
import { useEffect } from "react";

interface ItemEditorProps {
    itemType: ItemType;
    newItem: boolean;
    itemData?: ClothingPiece | Outfit;
}

function ItemEditor({ itemType, newItem, itemData }: Readonly<ItemEditorProps>) {    
    const {editorForm, updateForm, editorOptions, loadOptions} = useEditorState();

    useEffect(() => loadOptions(itemType), [itemType, loadOptions]);

    return (
        <Box className='flex flex-col items-center justify-center w-full py-5 md:px-10 md:py-10 md:border-2 rounded-xl border-gray-200 md:mt-2 lg:w-[85%]'>

            <Typography 
            variant="h5"
            className="font-dmsans capitalize font-semibold"
            >
                {itemData ? itemData.name : `New ${itemType}`}
            </Typography>

            <Box className='flex flex-col gap-5 md:flex-row w-full p-5 items-center justify-center lg:gap-15'>
                
                    {itemData?.imageUrl ? (
                        <Card className="rounded-2xl shadow-md border-2 border-gray-100">
                            <CardMedia 
                                component="img"
                                image={itemData?.imageUrl}
                                alt={itemData?.name}
                                className="p-2 rounded-2xl w-60 md:p-4 md:rounded-4xl h-70 md:h-90 md:w-80 lg:h-110 lg:w-90 hover:cursor-pointer"
                            />
                        </Card>
                    ) : (
                        <div className="flex flex-col items-center justify-center bg-gray-100 gap-2
                        border-2 border-dashed font-dmsans text-xl hover:bg-gray-200 hover:cursor-pointer
                        rounded-2xl w-60 h-70 
                        md:rounded-4xl md:h-90 md:w-80 
                        lg:h-110 lg:w-80
                        ">
                            Add Image
                            <Icon>
                                <img src={addIcon} alt=""/>
                            </Icon>
                        </div>
                    )}
                
                <Stack gap={2}>
                    <TextField
                        id="name"
                        label="Name"
                        type="text"
                        size="medium"
                        value={itemData?.name ? itemData.name : editorForm?.name}
                        slotProps={{
                            input: {
                                classes: {
                                    root: "rounded-md w-65 lg:w-90"
                                }
                            }
                        }}
                    />
                    {(itemType == "clothing") ? (
                        <>
                            {/* TODO: Add Color Selector */}
                            <Selector 
                                id="category-filter"
                                label="Category"
                                options={editorOptions?.clothingTypes ?? []}
                                value={editorForm.clothingType}
                                onChange={(newValue) => {
                                    if (newValue) {
                                        if (Array.isArray(newValue))
                                            updateForm({clothingType: newValue[0]});
                                        else
                                            updateForm({clothingType: newValue});
                                    }
                                    else {
                                        updateForm({clothingType: null});
                                    }
                                }}
                                variant="text"
                            />
                        </>
                    ) : (
                        <Selector 
                            id="clothing-filter"
                            label="Clothing Pieces"
                            options={editorOptions ? editorOptions.clothingPieces : []}
                            value={editorForm.clothingPieces}
                            onChange={(newValue) => {
                                if (newValue) {
                                    if (Array.isArray(newValue))
                                        updateForm({clothingPieces: newValue});
                                    else
                                        updateForm({clothingPieces: [newValue]});
                                }
                                else {
                                    updateForm({clothingPieces: []});
                                }
                            }}
                            variant="icon"
                            multiple
                        />
                    )}
                    <Selector 
                        id="season-filter"
                        label="Season"
                        options={editorOptions ? editorOptions.seasons : []}
                        value={editorForm.seasons}
                        onChange={(newValue) => {
                            if (newValue) {
                                if (Array.isArray(newValue))
                                    updateForm({seasons: newValue});
                                else
                                    updateForm({seasons: [newValue]});
                            }
                            else {
                                updateForm({seasons: []});
                            }
                        }}
                        variant="text"
                        multiple
                    />
                    <Selector 
                        id="tags-filter"
                        label="Tags"
                        options={editorOptions ? editorOptions.tags : []}
                        value={editorForm.tags}
                        onChange={(newValue) => {
                            if (newValue) {
                                if (Array.isArray(newValue))
                                    updateForm({tags: newValue});
                                else
                                    updateForm({tags: [newValue]});
                            }
                            else {
                                updateForm({tags: []});
                            }
                        }}
                        variant="text"
                        multiple
                    />
                    <Button
                    size="large"
                    className="bg-primary rounded-xl normal-case text-white text-md"
                    >
                        {newItem ? "Create" : "Save"}
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default ItemEditor;