import { Box, Container, Stack, Tabs, Toolbar, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import type { ItemType } from '../models/Types';
import type ClothingPiece from '../models/ClothingPiece';
import type Outfit from '../models/Outfit';
import { Link } from 'react-router';
import ItemEditor from '../components/ItemEditor';

interface EditItemProps {
    item_type: ItemType;
    new_item: Boolean;
    item_data?: ClothingPiece | Outfit;
}

function EditItem({ item_type, new_item, item_data }:EditItemProps) {
    return (
        <Box id='app_container' className='flex flex-col items-center gap-8 p-10'>
            <Navbar currentPage={new_item ? 'add' : 'other'}/>
            <Container className="max-w-screen flex flex-col gap-4 mt-10 items-center justify-center md:mt-15">

                {/* Tab Selector */}
                <Stack direction={'row'} gap={4} className={`w-full items-center align-middle justify-center ${new_item ? '' : 'hidden'}`}>
                    <Link to={'/user/add/clothing'}>
                        <Typography 
                        variant='subtitle1'
                        className={`font-dmsans capitalize font-semibold text-lg ${(item_type === 'clothing') ? 'text-primary' : 'text-black'}`}
                        >
                            Clothing
                        </Typography>
                    </Link>
                    <Link to={'/user/add/outfit'}>
                        <Typography 
                        variant='subtitle1'
                        className={`font-dmsans capitalize font-semibold text-lg ${(item_type === 'outfit') ? 'text-primary' : 'text-black'}`}
                        >
                            Outfit
                        </Typography>
                    </Link>
                </Stack>

                <ItemEditor 
                item_type={item_type}
                new_item={new_item}
                item_data={item_data}
                />

            </Container>
        </Box>
    )
}

export default EditItem;