import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    margin: {
        marginBottom: theme.spacing(2),
    },
}));

export default function Breadcrumb(props) {
    const classes = useStyles();
    const { list } = props;
    const listBreadcrumbs = list.map((list) =>
        list.color === "primary" ? (
            <Link href={list.link} style={{ textDecoration: "none" }}>
                <div style={{ color: "#3D7DCA" }}>
                    <b>{list.name}</b>
                </div>
            </Link>
        ) : (
                <Link href={list.link} style={{ textDecoration: "none" }}>
                    <div style={{ color: "#828282" }}>
                        {list.name}
                    </div>
                </Link>
            )
    );

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.margin}>
            {listBreadcrumbs}
        </Breadcrumbs>
    );
}