import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (url) => {
        return () => {
            setAnchorEl(null);
            if (url) {
                props.history.push(url);
            }
        }
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#0E0063',
        color: 'white',
        gap: '15px',
    };

    const navLinkStyle = {
        paddingRight: '20px',
        paddingLeft: '20px',
        display: 'flex',
    }


    return (
        <>
            {isMobile ?
                <AppBar position='fixed'>
                    <Toolbar sx={navStyle}>
                        <Link href="/" sx={{ flexGrow: 1 }} underline='none' color='white'>
                            <Typography variant="h4" >
                                Cherry
                            </Typography>
                        </Link>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose(null)}
                        >
                            <MenuItem onClick={handleClose('/about')}>About</MenuItem>
                            <MenuItem onClick={handleClose('/analytics')}>Analytics</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                :
                <AppBar position="fixed">
                    <Toolbar sx={navStyle}>
                        <Link href="/" sx={{ flexGrow: 1 }} underline='none' color='white'>
                            <Typography variant="h4" >
                                Cherry
                            </Typography>
                        </Link>
                        <Button href="/analytics" underline="none" color='inherit' sx={navLinkStyle}>Analytics</Button>
                        <Button href="/about" underline="none" color='inherit' sx={navLinkStyle}>About</Button>
                    </Toolbar>
                </AppBar>
            }
        </>
    )
}

export default withRouter(NavBar);