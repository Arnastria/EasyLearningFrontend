import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Grid, Paper, Avatar, Card, CardActionArea, CircularProgress } from '@material-ui/core';
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
      console.log("fetching courses")
      APIUtility.get('/api/course/get/', {}).then((response) => {
        let coursesJSON = JSON.parse(response.data.model)

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
                onChange={changeSearch('search')}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onKeyDown={enterSearch}
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
                  <h3 style={{ margin: 0 }}>Mata Kuliah Tersedia</h3>
                </Grid>
                {isLoading ?
                  <Grid item>
                    <p style={{ color: 'gray' }}>Tidak ada Mata Kuliah Tersedia untuk saat ini. </p><p style={{ color: 'gray' }}>Silahkan Login atau cari mata kuliah terkait dan bergabung di kelasnya.</p>
                  </Grid>
                  :
                  courses.length == 0 ?
                    <Grid item>
                      <p style={{ color: 'gray' }}>Tidak ada Mata Kuliah Tersedia untuk saat ini. </p><p style={{ color: 'gray' }}>Silahkan Login atau cari mata kuliah terkait dan bergabung di kelasnya.</p>
                    </Grid>
                    :
                    <>
                      {courses.map((course, i) => {
                        return (
                          <>
                            <Grid item>
                              <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={() => { handleClick(course.pk, "A") }}>
                                  <Grid container direction="row" spacing={0} alignItems="center" justify="space-around" >
                                    <Grid item>
                                      <Avatar>{course.fields.name.split(" ")[0][0]}</Avatar>
                                    </Grid>
                                    <Grid item>
                                      <h4 style={{ color: 'white' }}>{course.fields.name + " A"}</h4>
                                    </Grid>
                                  </Grid>
                                </CardActionArea>
                              </Card>
                            </Grid>

                            <Grid item>
                              <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={() => { handleClick(course.pk, "B") }}>
                                  <Grid container direction="row" spacing={0} alignItems="center" justify="space-around" >
                                    <Grid item>
                                      <Avatar>{course.fields.name.split(" ")[0][0]}</Avatar>
                                    </Grid>
                                    <Grid item>
                                      <h4 style={{ color: 'white' }}>{course.fields.name + " B"}</h4>
                                    </Grid>
                                  </Grid>
                                </CardActionArea>
                              </Card>
                            </Grid>

                            <Grid item>
                              <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={() => { handleClick(course.pk, "C") }}>
                                  <Grid container direction="row" spacing={0} alignItems="center" justify="space-around" >
                                    <Grid item>
                                      <Avatar>{course.fields.name.split(" ")[0][0]}</Avatar>
                                    </Grid>
                                    <Grid item>
                                      <h4 style={{ color: 'white' }}>{course.fields.name + " C"}</h4>
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
                    Title={'Selamat datang di EasyLearning !'}
                    Author={'Ariq Naufal Satria'}
                    Text={"Dear seluruh mahasiswa<br><br>Selamat datang di platform *e-Learning* EasyLearning! <br>Platform ini menawarkan pengalaman menggunakan *e-Learning* yang berbeda dan diharapkan lebih baik dari sebelumnya. Silahkan pelajari dan gunakan platform ini sebaik-baiknya.<br><br>Demikian informasi ini disampaikan,<br>**Tim pengembang EasyLearning**"} />
                </Grid>

                <Grid item style={{ margin: '6px 0px' }}>
                  <AnnouncementCard
                    Title={'Pembukaan kelas Sistem Interaksi'}
                    Author={'Andi Setiawan'}
                    Text={"Dear seluruh mahasiswa<br><br> Diberitahukan bahwa kelas Sistem Interaksi telah dibuka di platform EasyLearning. Silahkan lihat kelasnya pada daftar kelas yang tersedia. Selama masa pembukaan kelas Sistem Interaksi akan dibuka untuk seluruh mahasiswa. Seluruh mahasiswa juga dipersilahkan untuk membaca materi yang ada disana.<br><br>Demikian informasi ini disampaikan,<br> **Tim dosen dan Asdos Sister**"} />
                </Grid>
                <Grid item style={{ margin: '6px 0px' }}>
                  <AnnouncementCard
                    Title={'Kuis I Bab 1 Metodologi Penelitian dan Penulisan Ilmiah sudah dibuka ! '}
                    Author={'Zaki Marzuki'}
                    Text={"Dear seluruh mahasiswa kelas MPPI <br><br> Diberitahukan bahwa jadwal kuis perdana kita untuk semester ini sudah dipublikasikan. Silahkan persiapkan diri anda dan jangan lupa mempelajari materi Bab 1-5. Mahasiswa juga dipersilahkan untuk membuat catatan untuk digunakan saat mengerjakan kuis. Informasi selanjutnya dapat dilihat pada halaman kelas MPPI.<br><br>Demikian informasi ini disampaikan,<br>**Tim dosen dan Asdos MPPI**"} />
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