import { Dispatch } from 'redux';
import axiosContacts from '../../contacts-axios';
import { ContactActions, ContactActionTypes } from '../types/contacts';

export const postContact = (contact: {}) => {
  return async (dispatch: Dispatch<ContactActions>) => {
    try {
      dispatch({ type: ContactActionTypes.POST_CONTACT_REQUEST });
      await axiosContacts.post('contact.json', contact);
      dispatch({ type: ContactActionTypes.POST_CONTACT_SUCCESS });
    } catch (error) {
      dispatch({
        type: ContactActionTypes.POST_CONTACT_FAILURE,
        error: 'Something went wrong during creation, please try again later',
      });
    }
  };
};

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactActions>) => {
    try {
      dispatch({ type: ContactActionTypes.FETCH_CONTACTS_REQUEST });
      const response = await axiosContacts.get('contacts.json');
      const contact = Object.keys(response.data).map(id => ({
        ...response.data[id],
        id,
      }));
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
        contacts: contact,
      });
    } catch (error) {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_FAILURE,
        error:
          'Something went wrong while requesting data, please try again later',
      });
    }
  };
};

export const putContact = (id: string, contact: {}) => {
  return async (dispatch: Dispatch<ContactActions>) => {
    try {
      dispatch({ type: ContactActionTypes.PUT_CONTACT_REQUEST });
      await axiosContacts.put('contacts/' + id + '.json', contact);
      dispatch({ type: ContactActionTypes.PUT_CONTACT_SUCCESS });
    } catch (error) {
      dispatch({
        type: ContactActionTypes.PUT_CONTACT_FAILURE,
        error: 'Something went wrong while editing, please try again later',
      });
    }
  };
};

export const deleteContact = (id: string) => {
  return async (dispatch: Dispatch<ContactActions>) => {
    try {
      dispatch({ type: ContactActionTypes.DELETE_CONTACT_REQUEST });
      await axiosContacts.delete('contacts/' + id + '.json');
      dispatch({ type: ContactActionTypes.DELETE_CONTACT_SUCCESS });
    } catch (error) {
      dispatch({
        type: ContactActionTypes.DELETE_CONTACT_FAILURE,
        error: 'Something went wrong during deletion, please try again later',
      });
    }
  };
};
