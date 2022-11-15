import { makeStyles, TextField } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))


export default function FlightFilterHeader(){
    const classes = useStyles();

    return (
        <Container>
            <TextField id="outlined-basic" label="To:" variant="outlined"></TextField>
        </Container>
    );
}