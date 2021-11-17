import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { AppBar, Toolbar } from "@mui/material";


const NavBar = (props) => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E0063',
        color: 'white',
    };

    const navLinkStyle = {
        paddingLeft: 15,
        display: 'flex',
        paddingRight: 15
    }

    const navVariant = "h6";

    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={navStyle}>
                    <Typography variant="h4" sx={navLinkStyle}>Cherry</Typography>
                    <Link href="/home" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>Home</Link>
                    <Link href="/analytics" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>Analytics</Link>
                    <Link href="/about" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>About</Link>
                    {/* <Link href="/login" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>Login</Link> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;

/** <Box sx={navStyle}>
        <Typography variant="h4" sx={navLinkStyle}>Cherry</Typography>
        <Link href="/home" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>Home</Link>
        <Link href="/analytics" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>Analytics</Link>
        <Link href="/about" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>About</Link>
        <Link href="/login" underline="none" color='inherit' sx={navLinkStyle} variant={navVariant}>Login</Link>
 */