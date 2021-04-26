import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { InputBase, Grid, Paper, Avatar, Card, CardActionArea, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Appbar } from '../components/Appbar';
import { userService } from '../utils/UserService';
import AnnouncementCard from '../components/AnnouncementCard';
import APIUtility from '../utils/APIUtility';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  media: {
    width: 130,
    paddingTop: '56.25%', // 16:9
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

function SearchPage(props) {

  const classes = useStyles();
  const { querySearch } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");


  function handleClick(pk, gayaBelajar) {
    props.changePage("/course/" + gayaBelajar + "/" + pk)
  }

  const changeSearch = (props) => (event) => {
    setSearch(event.target.value);
  }

  const enterSearch = (event) => {
    if (event.keyCode === 13) {
      console.log(search)
      props.changePage("/search/q/" + search)
    }
  }

  useEffect(() => {
    if (courses.length == 0 && userService.getLocalData() != null) {
      APIUtility.get('/api/course/get/', {}).then((response) => {
        let coursesJSON = JSON.parse(response.data.model)
        console.log(coursesJSON)
        setCourses(coursesJSON);
      });
      setIsLoading(false);
    }
  }, [])

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
          {userService.getLocalData() != null ?
            <Grid item xs={12} >
              <h2 style={{ color: 'white' }}>
                {userService.getLocalData() != null ? 'Halo ' + userService.getName().split(' ')[0] + ', mau belajar apa hari ini ?' : ''}
              </h2>
            </Grid>
            :
            <>
              <Grid item xs={12} >
                <h2 style={{ color: 'white', margin: 0 }} > EasyLearning</h2>
              </Grid>
              <Grid item xs={12} >
                <h4 style={{ color: 'white', marginTop: 0 }}> E-Learning yang sesuai dengan kebutuhanmu</h4>
              </Grid>
            </>
          }
          <Grid item xs={3} >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={search}
                onChange={changeSearch('')}
                onKeyDown={enterSearch}
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

          <Grid item style={{ margin: '0px 8px' }}>
            <Paper>
              <Grid container
                spacing={2}
                direction="column"
                justify="center"
                style={{ padding: '12px' }}
              >
                <Grid item>
                  <h3 style={{ margin: 0 }}>Hasil Pencarian '{querySearch}' </h3>
                </Grid>
                {isLoading ?
                  <Grid item>
                    <p style={{ color: 'gray' }}>Tidak ada Mata Kuliah yang dapat dilihat publik saat ini. </p><p style={{ color: 'gray' }}>Silahkan Login untuk mencari kelas.</p>
                  </Grid>
                  :
                  courses.length == 0 ?
                    <Grid item>
                      <p style={{ color: 'gray' }}>Tidak ada Mata Kuliah yang dapat dilihat publik saat ini. </p><p style={{ color: 'gray' }}>Silahkan Login untuk mencari kelas.</p>
                    </Grid>
                    :
                    <>
                      <Grid item>
                        <p style={{ color: 'gray' }}>Untuk sementara seluruh kelas ditampilkan pada halaman pencarian ini</p>
                      </Grid>
                      {courses.map((course, i) => {
                        return (
                          <>
                            <Grid item>
                              <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={() => { handleClick(course.pk, "A") }}>
                                  <Grid container direction="row" spacing={0} alignItems="center" justify="left" >
                                    <Grid item>
                                      <Typography component="div" style={{ width: '16px' }} />
                                    </Grid>
                                    <Grid item>
                                      <Avatar>{course.fields.name.split(" ")[0][0]}</Avatar>
                                    </Grid>
                                    <Grid item>
                                      <Typography component="div" style={{ width: '16px' }} />
                                    </Grid>
                                    <Grid item >
                                      <h4 style={{ color: 'white', marginBottom: 0 }}>{course.fields.name + " A"}</h4>
                                      <p style={{ color: 'white', marginTop: 0 }}>{course.fields.aliasName} - {course.fields.code}</p>
                                    </Grid>
                                  </Grid>
                                </CardActionArea>
                              </Card>
                            </Grid>

                            <Grid item>
                              <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={() => { handleClick(course.pk, "B") }}>
                                  <Grid container direction="row" spacing={0} alignItems="center" justify="left" >
                                    <Grid item>
                                      <Typography component="div" style={{ width: '16px' }} />
                                    </Grid>
                                    <Grid item>
                                      <Avatar>{course.fields.name.split(" ")[0][0]}</Avatar>
                                    </Grid>
                                    <Grid item>
                                      <Typography component="div" style={{ width: '16px' }} />
                                    </Grid>
                                    <Grid item >
                                      <h4 style={{ color: 'white', marginBottom: 0 }}>{course.fields.name + " B"}</h4>
                                      <p style={{ color: 'white', marginTop: 0 }}>{course.fields.aliasName} - {course.fields.code}</p>
                                    </Grid>
                                  </Grid>
                                </CardActionArea>
                              </Card>
                            </Grid>

                            <Grid item>
                              <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={() => { handleClick(course.pk, "C") }}>
                                  <Grid container direction="row" spacing={0} alignItems="center" justify="left" >
                                    <Grid item>
                                      <Typography component="div" style={{ width: '16px' }} />
                                    </Grid>
                                    <Grid item>
                                      <Avatar>{course.fields.name.split(" ")[0][0]}</Avatar>
                                    </Grid>
                                    <Grid item>
                                      <Typography component="div" style={{ width: '16px' }} />
                                    </Grid>
                                    <Grid item >
                                      <h4 style={{ color: 'white', marginBottom: 0 }}>{course.fields.name + " C"}</h4>
                                      <p style={{ color: 'white', marginTop: 0 }}>{course.fields.aliasName} - {course.fields.code}</p>
                                    </Grid>
                                  </Grid>
                                </CardActionArea>
                              </Card>
                            </Grid>
                          </>
                        );
                      })}
                    </>
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { SearchPage };