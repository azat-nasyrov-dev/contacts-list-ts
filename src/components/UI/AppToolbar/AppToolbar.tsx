import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    logoGrid: {
      flexGrow: 1,
    },
    logo: {
      textDecoration: 'none',
    },
    staticToolbar: {
      marginBottom: theme.spacing(2),
    },
  })
);

const AppToolbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid item className={classes.logoGrid}>
            <Typography
              variant="h6"
              color="inherit"
              component={NavLink}
              to="/"
              className={classes.logo}
            >
              ContactsList
            </Typography>
          </Grid>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/add-contact"
          >
            Add new contact
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar} />
    </>
  );
};

export default AppToolbar;
