import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';




const drawerWidth = 240;
const navItems = ["ABOUT", "PORTFOLIO", "PRICING", "REVIEW","CONTACT"];


function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const theme = useTheme();
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
          <a href={"#"+item}>  <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton> </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" style={{boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: "center" }}>
          <Grid
            container
            style={{
              justifyContent: "space-between",
              display: "flex",
              width: "90%",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
                  <MenuIcon />
                </IconButton>
              <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
              </Box>
            </Grid>
            <Grid
              item
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" ,justifyContent:"flex-end"} }} 
              >
                {navItems.map((page) => (
                 <a href={"#"+page}> <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                     
                    sx={{ my: 2,color:theme.palette.primary.contrastText, display: "block",mx: 3 }}
                  >
                    {page}
                  </Button></a>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
ResponsiveAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
export default ResponsiveAppBar;