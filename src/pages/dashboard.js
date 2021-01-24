import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Grid, Button, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Appbar } from '../components/appbar';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.55),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Dashboard(props) {

  const classes = useStyles();

  function handleClick() {
    console.log("HAHA")
    props.changePage("/panci")
  }
  return (
    <>
      <div className={classes.root}>
        <Appbar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ backgroundColor: '#3D7DCA', minHeight: '30vh', marginTop: '60px' }}
        >
          <Grid item xs={12} >
            <h1 style={{ color: 'white' }}>
              Halo 'name', mau belajar apa hari ini ?
                      </h1>
          </Grid>
          <Grid item xs={3} >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={3} >
            <h1 color="primary">
              Halo 'name', mau belajar apa hari ini ?
            </h1>
          </Grid>
          <Grid item xs={9} >
            <h1 color="primary">
              Halo 'name', mau belajar apa hari ini ?
            </h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { Dashboard };