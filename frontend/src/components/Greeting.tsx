import { Button, Box, Container, Stack, Typography } from "@mui/material";

function Greeting() {
    return (
        <Container id="Greeting_container" maxWidth="xl" className="flex flex-col gap-5 items-center">
            <Box className="mt-25 p-5 bg-gray-200 rounded-xl flex flex-col items-center gap-5 w-full">
                <Typography
                variant="h2"
                className="font-outfit font-bold text-center text-5xl"
                >
                    Welcome back, Santiago!
                </Typography>
                <Typography
                variant="h6"
                className="text-center font-dmsans text-gray-500 text-md"
                >
                    Explore your virtual closet, discover new styles, and create stunning outfits. 
                    Your fashion journey starts here.
                </Typography>
            </Box>
            <Stack spacing={5} direction="row">
                <Button
                size="large"
                className="font-dmsans bg-primary text-white font-bold normal-case rounded-4xl"
                >
                    + Add Clothing
                </Button>
                <Button
                size="large"
                className="font-dmsans bg-white normal-case font-bold rounded-4xl border-2 border-black text-black"
                >
                    Create Outfit
                </Button>
            </Stack>
        </Container>
    );
}

export default Greeting;