import { Card, CardActions, CardContent, CardMedia, Skeleton, Typography, Button, Stack } from "@mui/material";
import ClothingPiece from "../models/ClothingPiece";

interface ItemDisplayProps {
    data: ClothingPiece | undefined;
}

function ItemDisplay({ data }: ItemDisplayProps) {
    return (
        <>
        <Card className="border-1 border-gray-200 rounded-2xl">
            {data ? (
                <CardMedia 
                    component="img"
                    image={data.imageUrl}
                    alt={data.name}
                    className="p-2 rounded-2xl md:p-4 md:rounded-4xl"
                />
            ) : (
                <Skeleton variant="rectangular" height={200} className="m-2 md:m-4 rounded-2xl md:rounded-4xl" />
            )}
            <CardContent className="hidden md:flex pt-0 pb-2">
                {data ? (
                    <Typography variant="h6">
                        {data.name}
                    </Typography>
                ) : (
                    <Skeleton width={300} height={50}/>
                )}
            </CardContent>
            <CardActions disableSpacing className="hidden md:flex pt-0 pb-2 px-4">
                {data ? (
                    <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {Array.from(data.seasons).map((season) => (
                            <Button 
                                key={season} 
                                size="small" 
                                variant="outlined" 
                                color="primary"
                            >
                                {season}
                            </Button>
                        ))}
                        {Array.from(data.tags).map((tag) => (
                            <Button 
                                key={tag} 
                                size="small" 
                                variant="outlined" 
                                color="secondary"
                            >
                                {tag}
                            </Button>
                        ))}
                    </Stack>
                ) : (
                    <Stack direction="row" spacing={1}>
                        <Skeleton width={60} height={40} />
                        <Skeleton width={60} height={40} />
                        <Skeleton width={60} height={40} />
                    </Stack>
                )}
            </CardActions>
        </Card>
        </>
    )
}

export default ItemDisplay;