import React from 'react';
import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '10rem',
      position: 'relative',
    },
    loader: {
      textAlign: 'center',
      position: 'absolute',
      top: '40%',
      left: '45%',
    },
  })
);

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loader} />
    </div>
  );
};

export default Loader;
