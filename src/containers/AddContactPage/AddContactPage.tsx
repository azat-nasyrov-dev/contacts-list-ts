import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Loader from '../../components/UI/Loader/Loader';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    root: {
      maxWidth: 250,
      padding: '2rem',
      marginTop: '2rem',
      position: 'relative',
    },
    avatar: {
      width: 150,
      height: 150,
    },
    media: {
      height: 0,
      paddingTop: '56,25%',
    },
    btn: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

const AddContactPage: FC = (props: any) => {
  const classes = useStyles();

  const { postContact } = useAppDispatch();
  const loading = useAppSelector(state => state.contacts.loading);

  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postContact(contact);

    setContact({
      name: '',
      phone: '',
      email: '',
      photo: '',
    });

    props.history.push('/');
  };

  if (loading) return <Loader />;

  return (
    <>
      <Paper className={classes.paper}>
        <form onSubmit={submitFormHandler}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                label="Name"
                name="name"
                onChange={changeHandler}
                value={contact.name}
                required
              />
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                fullWidth
                type="number"
                label="Phone"
                name="phone"
                onChange={changeHandler}
                value={contact.phone}
                required
              />
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                fullWidth
                type="email"
                label="Email"
                name="email"
                onChange={changeHandler}
                value={contact.email}
                required
              />
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                label="Photo"
                name="photo"
                onChange={changeHandler}
                value={contact.photo}
              />
            </Grid>
            <Grid item>
              <Typography component="p">Photo preview:</Typography>
              {contact.photo !== '' ? (
                <Card className={classes.root}>
                  <Avatar
                    src={contact.photo}
                    alt="Contact"
                    className={classes.avatar}
                  />
                </Card>
              ) : null}
            </Grid>
            <Grid item className={classes.btn}>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                component={NavLink}
                to="/"
              >
                Back to contacts
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default AddContactPage;
