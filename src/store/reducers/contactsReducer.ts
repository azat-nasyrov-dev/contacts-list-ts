import {
  ContactActions,
  ContactActionTypes,
  ContactState,
} from '../types/contacts';

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsReducer = (
  state = initialState,
  action: ContactActions
): ContactState => {
  switch (action.type) {
    case ContactActionTypes.POST_CONTACT_REQUEST:
      return { ...state, loading: true };
    case ContactActionTypes.POST_CONTACT_SUCCESS:
      return { ...state, loading: false };
    case ContactActionTypes.POST_CONTACT_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ContactActionTypes.FETCH_CONTACTS_REQUEST:
      return { ...state, loading: true };
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...state, loading: false, contacts: action.contacts };
    case ContactActionTypes.FETCH_CONTACTS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ContactActionTypes.PUT_CONTACT_REQUEST:
      return { ...state, loading: true };
    case ContactActionTypes.PUT_CONTACT_SUCCESS:
      return { ...state, loading: false };
    case ContactActionTypes.PUT_CONTACT_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ContactActionTypes.DELETE_CONTACT_REQUEST:
      return { ...state, loading: true };
    case ContactActionTypes.DELETE_CONTACT_SUCCESS:
      return { ...state, loading: false };
    case ContactActionTypes.DELETE_CONTACT_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default contactsReducer;
