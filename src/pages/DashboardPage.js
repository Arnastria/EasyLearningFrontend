import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Grid, Button, Box, Paper, Avatar, Card, CardActionArea, CardActions } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Appbar } from '../components/Appbar';
import { blue } from "@material-ui/core/colors";
import { userService } from '../utils/UserService';
import AnnouncementCard from '../components/AnnouncementCard';

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
    props.changePage("/sister")
  }

  return (
    <>
      <div className={classes.root}>
        <Appbar changePage={props.changePage} />

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
              Halo {userService.getLocalData() != null ? userService.getName().split(' ')[0] : ''}, mau belajar apa hari ini ?
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
          justify="center"
          style={{ margin: '30px 0px' }}
        >
          <Grid item xs={2} style={{ margin: '0px 8px' }}>
            <Paper>
              <Grid container
                spacing={2}
                direction="column"
                justify="center"
                style={{ padding: '12px' }}
              >
                <Grid item>
                  <h3 style={{ margin: 0 }}>Mata Kuliah Saya</h3>
                </Grid>
                <Grid item>
                  <Card style={{ backgroundColor: '#3D7DCA' }}>
                    <CardActionArea onClick={handleClick}>
                      <Grid container direction="row" spacing={0} alignItems="center" justify="space-around" >
                        <Grid item>
                          <Avatar>SI</Avatar>
                        </Grid>
                        <Grid item>
                          <h4 style={{ color: 'white' }}>Sistem Interaksi</h4>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item>
                  <Card style={{ backgroundColor: '#3D7DCA' }}>
                    <CardActionArea>
                      <Grid container direction="row" spacing={0} alignItems="center" justify="space-around" >
                        <Grid item>
                          <Avatar>SI</Avatar>
                        </Grid>
                        <Grid item>
                          <h4 style={{ color: 'white' }}>Sistem Interaksi</h4>
                        </Grid>
                      </Grid>
                    </CardActionArea>

                  </Card>
                </Grid>

                <Grid item>
                  <Card style={{ backgroundColor: '#3D7DCA' }}>
                    <CardActionArea>
                      <Grid container direction="row" spacing={0} alignItems="center" justify="space-around" >
                        <Grid item>
                          <Avatar>SI</Avatar>
                        </Grid>
                        <Grid item>
                          <h4 style={{ color: 'white' }}>Sistem Interaksi</h4>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>

              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={6} style={{ margin: '0px 8px' }}>
            <Paper>
              <Grid container
                spacing={2}
                direction="column"
                justify="center"
                style={{ padding: '12px' }}
              >
                <Grid item>
                  <h3 style={{ margin: 0 }}>Pengumuman</h3>
                </Grid>
                <Grid item style={{ margin: '6px 0px' }}>
                  <AnnouncementCard
                    Title={'Kuis I Bab 1 Metodologi Penelitian dan Penulisan Ilmiah  sudah dibuka ! '}
                    Author={'Ariq Naufal Satria'}
                    Text={"Lick the other cats love but rub against owner because nose is wet so adventure always. Sleep try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard steal mom's crouton while she is in the bathroom flex claws on the human's belly and purr like a lawnmower. Freak human out make funny noise mow mow mow mow mow mow success now attack human purr like an angel."}
                  />
                </Grid>
                <Grid item style={{ margin: '6px 0px' }}>
                  <AnnouncementCard
                    Title={'Pengumuman 1'}
                    Author={'Budi Budiman'}
                    Text={"Lick the other cats love but rub against owner because nose is wet so adventure always. Sleep try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard steal mom's crouton while she is in the bathroom flex claws on the human's belly and purr like a lawnmower. Freak human out make funny noise mow mow mow mow mow mow success now attack human purr like an angel."}
                  />
                </Grid>
                <Grid item style={{ margin: '6px 0px' }}>
                  <AnnouncementCard
                    Title={'Pengumuman 1'}
                    Author={'Ariq Naufal Satria'}
                    Text={"Lick the other cats love but rub against owner because nose is wet so adventure always. Sleep try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard steal mom's crouton while she is in the bathroom flex claws on the human's belly and purr like a lawnmower. Freak human out make funny noise mow mow mow mow mow mow success now attack human purr like an angel."}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </>
  );
}

export { Dashboard };