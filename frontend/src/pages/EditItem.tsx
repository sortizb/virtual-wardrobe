import { Box, Container, Stack, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import type { ItemType } from '../models/Types';
import type ClothingPiece from '../models/ClothingPiece';
import type Outfit from '../models/Outfit';
import { Link } from 'react-router';
import ItemEditor from '../components/ItemEditor';

interface EditItemProps {
    itemType: ItemType;
    newItem: boolean;
    itemData?: ClothingPiece | Outfit;
}

function EditItem({ itemType, newItem, itemData }: Readonly<EditItemProps>) {
    return (
        <Box id='app_container' className='flex flex-col items-center gap-8 p-10'>
            <Navbar currentPage={newItem ? 'add' : 'other'}/>
            <Container className="max-w-screen flex flex-col gap-4 mt-10 items-center justify-center md:mt-15">

                {/* Tab Selector */}
                <Stack direction={'row'} gap={4} className={`w-full items-center align-middle justify-center ${newItem ? '' : 'hidden'}`}>
                    <Link to={'/user/add/clothing'}>
                        <Typography 
                        variant='subtitle1'
                        className={` capitalize font-semibold text-lg ${(itemType === 'clothing') ? 'text-primary' : 'text-black'}`}
                        >
                            Clothing
                        </Typography>
                    </Link>
                    <Link to={'/user/add/outfit'}>
                        <Typography 
                        variant='subtitle1'
                        className={` capitalize font-semibold text-lg ${(itemType === 'outfit') ? 'text-primary' : 'text-black'}`}
                        >
                            Outfit
                        </Typography>
                    </Link>
                </Stack>

                <ItemEditor 
                itemType={itemType}
                newItem={newItem}
                itemData={itemData}
                />

            </Container>
        </Box>
    )
}

export default EditItem;