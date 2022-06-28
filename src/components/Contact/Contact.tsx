import React, { useState } from 'react';
import AppModal from '../UI/AppModal/AppModal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: '1rem',
      maxWidth: '50%',
      padding: '10px',
    },
    root: {
      display: 'inline-flex',
      cursor: 'pointer',
    },
    avatar: {
      marginLeft: '1rem',
      width: 150,
      height: 150,
    },
    txt: {
      fontSize: '25px',
      fontWeight: 'bold',
      marginTop: '3rem',
      marginLeft: '3rem',
    },
  })
);

interface UserProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo?: string;
}

const Contact = (props: UserProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <AppModal
        id={props.id}
        show={open}
        closed={handleCloseModal}
        name={props.name}
        phone={props.name}
        email={props.email}
        photo={props.photo}
      />
      <Paper className={classes.paper}>
        <Grid container onClick={handleOpenModal} className={classes.root}>
          <Grid item>
            <Avatar src={props.photo} alt="User" className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography component="p" className={classes.txt}>
              {props.name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Contact;
