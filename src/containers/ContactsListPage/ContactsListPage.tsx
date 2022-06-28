import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Grid from '@material-ui/core/Grid';
import Contact from '../../components/Contact/Contact';
import Loader from '../../components/UI/Loader/Loader';

const ContactsListPage = () => {
  const { fetchContacts } = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts.contacts);
  const loading = useAppSelector(state => state.contacts.loading);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  if (loading) return <Loader />;

  console.log(contacts);

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          {contacts.map((contact, index) => {
            return (
              <Contact
                key={contact.id + index}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                photo={contact.photo}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default ContactsListPage;
