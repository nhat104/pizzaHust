import * as React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    component: {
        height: '24px',
        width: '24px',
    },
});

export default function NavIcon({ icon, link }) {
    const classes = useStyles();
  return (
    <a className={`${classes.component}`}
        href={link}
    > {icon}
    </a>
  );
}
