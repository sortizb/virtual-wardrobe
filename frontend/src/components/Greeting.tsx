import { Box, Container, Typography } from "@mui/material";

function Greeting() {
  return (
    <Container
      id="Greeting_container"
      maxWidth="xl"
      className="flex flex-col gap-5 items-center"
    >
      <Box
        className="rounded-2xl flex flex-col items-center gap-5 w-full shadow-sm"
        sx={(theme) => ({
          p: 5,
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Typography
          variant="h2"
          className=" font-bold text-center text-5xl"
        >
          Welcome back, Santiago!
        </Typography>
        <Typography
          variant="h6"
          className="text-center  text-gray-500 text-md"
        >
          Explore your virtual closet, discover new styles, and create stunning
          outfits. Your fashion journey starts here.
        </Typography>
      </Box>
    </Container>
  );
}

export default Greeting;
