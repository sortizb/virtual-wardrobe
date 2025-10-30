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
      color="transparent"
      elevation={1}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
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
          {/* Mobile Menu Button */}
          <Box sx={{ width: 48, display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: "text.primary" }}
            >
              <MenuRoundedIcon fontSize="inherit" />
            </IconButton>
          </Box>

          {/* Mobile Menu Items */}
          <Menu
            anchorEl={anchorElNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNavMenu)}
            onClose={handleCloseNavMenu}
            disableScrollLock
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link to={`/user/${page}`} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      color: page === currentPage ? "primary.main" : "text.secondary",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {page}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          {/* Logo with subtle animation */}
          <Link to="/user/closet" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <CheckroomRoundedIcon sx={{ color: "primary.main", fontSize: 34 }} />
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.main",
                    fontFamily: "var(--font-logo)",
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

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Link key={page} to={`/user/${page}`} style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Button
                    disableRipple
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontFamily: "var(--font-body)",
                      color: page === currentPage ? "primary.main" : "text.secondary",
                      borderBottom:
                        page === currentPage ? "2px solid" : "2px solid transparent",
                      borderColor: "primary.main",
                      borderRadius: 0,
                      "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </motion.div>
              </Link>
            ))}
          </Box>

          {/* User Avatar */}
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar sx={{ bgcolor: "primary.light", color: "primary.contrastText" }}>
              <AccountCircleRoundedIcon />
            </Avatar>
          </IconButton>

          {/* User Menu */}
          <Menu
            anchorEl={anchorElUserMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUserMenu)}
            onClose={handleCloseUserMenu}
          >
            {userSettings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ fontFamily: "var(--font-body)", color: "text.primary" }}>
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