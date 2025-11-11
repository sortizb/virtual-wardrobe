import { Card, CardActions, CardContent, CardMedia, Skeleton, Typography, Button, Stack } from "@mui/material";
import ClothingPiece from "../models/ClothingPiece";
import Outfit from "../models/Outfit";
import imagePlaceHolder from "../assets/clothes.png";
import type { ActiveFilter } from "../models/Types";

interface ItemDisplayProps {
    data: ClothingPiece | Outfit | undefined;
    activeFilter: ActiveFilter;
    onFilterChange: (filters: Partial<ActiveFilter>) => void;
}

function ItemDisplay({ data, activeFilter, onFilterChange }: Readonly<ItemDisplayProps>) {
    return (
        <Card className="border-1 border-gray-200 rounded-2xl h-full hover:shadow-lg hover:transition-shadow hover:-translate-y-1.5 hover:cursor-pointer">
            {data ? (
                <CardMedia 
                    component="img"
                    image={data.imageUrl ? data.imageUrl : imagePlaceHolder}
                    alt={data.name}
                    className={`p-2 rounded-2xl md:p-4 md:rounded-4xl h-50 md:h-70 lg:h-80`}
                />
            ) : (
                <Skeleton variant="rectangular" className="m-2 md:m-4 rounded-2xl h-50 md:h-70 lg:h-80 md:rounded-4xl" />
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
                                className="capitalize text-amber-50 bg-primary rounded-3xl font-semibold hover:transition-shadow hover:translate-y-0.5 hover:font-bold"                                onClick={() => {onFilterChange({seasons: activeFilter.seasons?.concat({kind: "text", label: season, value: season})})}}
                            >
                                {season}
                            </Button>
                        ))}
                        {Array.from(data.tags).map((tag) => (
                            <Button 
                                key={tag} 
                                size="small" 
                                variant="outlined" 
                                className="capitalize text-amber-50 bg-primary rounded-3xl font-semibold hover:transition-shadow hover:translate-y-0.5 hover:font-bold"
                                onClick={() => {onFilterChange({tags: activeFilter.tags?.concat({kind: "text", label: tag, value: tag})})}}
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
    )
}

export default ItemDisplay;