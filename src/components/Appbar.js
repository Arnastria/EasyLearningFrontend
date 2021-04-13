import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Grid, Button, Menu, MenuItem, Avatar } from '@material-ui/core';
import { userService } from '../utils/UserService';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    separator: {
        flexGrow: 1,
    },
}));

function Appbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLogin, setIsLogin] = useState(userService.getLocalData() != null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleClickBeranda() {
        props.changePage("/");
    }

    function handleClickLogout() {
        setAnchorEl(null);
        props.changePage("/logout")
    }

    const handleClickLogin = () => {
        window.location.replace("http://localhost:8000/login/");
    }

    const classes = useStyles();
    //TODO : https://medium.com/better-programming/making-a-basic-header-responsive-with-materialui-and-react-2198fac923c8


    return (
        <>
            <AppBar >
                <Toolbar>
                    <Typography variant="h5" style={{ flexGrow: 0.1 }}>
                        Easy-Learning
                    </Typography>
                    <Button color="inherit" onClick={handleClickBeranda}>Beranda</Button>
                    <Button color="inherit" onClick={handleClickBeranda}>Tentang</Button>
                    <Button color="inherit" onClick={handleClickBeranda}>Panduan</Button>
                    <div className={classes.separator} />
                    <div>
                        {!isLogin ?
                            <Button color="inherit" onClick={handleClickLogin}>Login</Button>
                            :
                            <>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "white" }}
                                    disableElevation
                                    startIcon={<Avatar>{userService.getName().split(" ")[0][0]}</Avatar>}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    onClick={handleClick}
                                >
                                    <b style={{ color: '#3D7DCA' }} >{userService.getName()}</b>
                                </Button>
                                <Menu
                                    id="appbar-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    getContentAnchorEl={null}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profil</MenuItem>
                                    <MenuItem onClick={handleClose}>Pengaturan</MenuItem>
                                    <MenuItem onClick={handleClickLogout}>Keluar</MenuItem>
                                </Menu>
                            </>
                        }

                    </div>

                    <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <NotificationsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

export { Appbar };
