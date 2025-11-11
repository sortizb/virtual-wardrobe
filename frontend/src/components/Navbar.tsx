import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Link } from "react-router";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { motion } from "framer-motion";
import useNavbarState from "../hooks/Navbar";

interface NavbarProps {
  currentPage: "closet" | "outfits" | "add" | "other";
}

export default function Navbar({ currentPage }: Readonly<NavbarProps>) {
  const pages = ["closet", "outfits", "add"];
  const userSettings = ["My Profile", "Preferences", "Logout"];
  const {
    anchorElNavMenu,
    anchorElUserMenu,
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleOpenUserMenu,
    handleCloseUserMenu,
  } = useNavbarState();

  return (
    <AppBar
      id="navbar"
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "primary.main",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "primary.contrastText",
        borderRadius: "0"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            py: 1,
          }}
        >
          {/* --- Mobile Menu Button --- */}
          <Box
            sx={{
              width: 48,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: "primary.contrastText" }}
            >
              <MenuRoundedIcon fontSize="inherit" />
            </IconButton>
          </Box>

          {/* --- Mobile Menu Items --- */}
          <Menu
            anchorEl={anchorElNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNavMenu)}
            onClose={handleCloseNavMenu}
            disableScrollLock
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": {
                bgcolor: "background.paper",
                borderRadius: 2,
                mt: 1,
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link to={`/user/${page}`} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      color:
                        page === currentPage
                          ? "primary.main"
                          : "text.secondary",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {page}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          {/* --- Logo with motion --- */}
          <Link to="/user/closet" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <CheckroomRoundedIcon
                  sx={{
                    color: "primary.contrastText",
                    fontSize: 34,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.contrastText",
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  StyleAI
                </Typography>
              </Box>
            </motion.div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/user/${page}`}
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Button
                    disableRipple
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontFamily: "Outfit, sans-serif",
                      color:
                        page === currentPage
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0.75)",
                      borderBottom:
                        page === currentPage
                          ? "2px solid rgba(255,255,255,0.9)"
                          : "2px solid transparent",
                      borderRadius: 0,
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.9)",
                        color: "#FFFFFF",
                        bgcolor: "transparent",
                      },
                      transition: "all 0.25s ease",
                    }}
                  >
                    {page}
                  </Button>
                </motion.div>
              </Link>
            ))}
          </Box>

          {/* --- User Avatar --- */}
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar
              sx={{
                bgcolor: "rgba(255,255,255,0.3)",
                color: "primary.contrastText",
                backdropFilter: "blur(2px)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <AccountCircleRoundedIcon />
            </Avatar>
          </IconButton>

          {/* --- User Menu --- */}
          <Menu
            anchorEl={anchorElUserMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUserMenu)}
            onClose={handleCloseUserMenu}
            sx={{
              "& .MuiPaper-root": {
                bgcolor: "background.paper",
                borderRadius: 2,
                mt: 1,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
            }}
          >
            {userSettings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    color: "text.primary",
                  }}
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
