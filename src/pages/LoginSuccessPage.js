import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button } from '@material-ui/core';
import { userService } from '../utils/UserService';
import APIUtility from '../utils/APIUtility';

function LoginSuccess(props) {
    const [isVerified, setIsVerified] = useState(false);
    const handleClick = () => {
        APIUtility.get('/sample-restricted').then((response) => {
            console.log(response)
        });
    }
    const handleClick3 = () => {
        console.log(userService.getProfile());
    }
    const handleClick2 = () => {
        userService.logout();
    }
    const { token } = useParams();

    useEffect(() => {
        if (isVerified) {
            return;
        }
        console.log("verifying..");
        userService.login(token).then(value => {
            if (value) {
                setIsVerified(true)
                props.changePage("/")
            }
        })


    }, []);
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3} >
                    {/* <h1 style={{ color: 'black' }}>
                        {token}
                    </h1> */}
                    {isVerified ?
                        <h1>Selamat Datang {userService.getName()}!</h1>
                        :
                        <p>Verifying...</p>
                    }
                    <Button variant="contained" onClick={handleClick}>
                        Verify
                    </Button>
                    <Button variant="contained" onClick={handleClick3}>
                        Profile
                    </Button>

                    <Button variant="contained" onClick={handleClick2}>
                        clear
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export { LoginSuccess };