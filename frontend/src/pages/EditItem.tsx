import { Box, Container, Stack, Tabs, Toolbar, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import type { ItemType } from '../models/Types';
import type ClothingPiece from '../models/ClothingPiece';
import type Outfit from '../models/Outfit';
import { Link } from 'react-router';

interface EditItemProps {
    item_type: ItemType;
    new_item: Boolean;
    item_data?: ClothingPiece | Outfit;
}

function EditItem({ item_type, new_item, item_data }:EditItemProps) {
    return (
        <Box id='app_container' className='flex flex-col items-center gap-8 mb-5 md:mb-10 lg:mb-15'>
            <Navbar currentPage='add'/>
            <Container className="max-w-screen flex flex-col gap-4 mt-30">
                <Stack direction={'row'} gap={4} className={`w-full items-center align-middle justify-center ${new_item ? '' : 'hidden'}`}>
                    <Link to={'/user/add/clothing'}>
                        <Typography 
                        variant='h6'
                        className={`font-dmsans capitalize ${(item_type === 'clothing') ? 'text-primary underline underline-offset-2' : 'text-black'}`}
                        >
                            Clothing
                        </Typography>
                    </Link>
                    <Link to={'/user/add/outfit'}>
                        <Typography 
                        variant='h6'
                        className={`font-dmsans capitalize ${(item_type === 'outfit') ? 'text-primary underline underline-offset-2' : 'text-black'}`}
                        >
                            Outfit
                        </Typography>
                    </Link>
                </Stack>
            </Container>
        </Box>
    )
}

export default EditItem;