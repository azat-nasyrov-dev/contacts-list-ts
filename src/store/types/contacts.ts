// interface Contact {
//   name: string;
//   phone: number;
//   email: string;
//   image?: string;
// }

export interface ContactState {
  contacts: any[];
  loading: boolean;
  error: null | string;
}

export enum ContactActionTypes {
  POST_CONTACT_REQUEST = 'POST_CONTACT_REQUEST',
  POST_CONTACT_SUCCESS = 'POST_CONTACT_SUCCESS',
  POST_CONTACT_FAILURE = 'POST_CONTACT_FAILURE',
  FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE',
  PUT_CONTACT_REQUEST = 'PUT_CONTACT_REQUEST',
  PUT_CONTACT_SUCCESS = 'PUT_CONTACT_SUCCESS',
  PUT_CONTACT_FAILURE = 'PUT_CONTACT_FAILURE',
  DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST',
  DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE',
}

interface PostContactRequest {
  type: ContactActionTypes.POST_CONTACT_REQUEST;
}

interface PostContactSuccess {
  type: ContactActionTypes.POST_CONTACT_SUCCESS;
}

interface PostContactFailure {
  type: ContactActionTypes.POST_CONTACT_FAILURE;
  error: string;
}

interface FetchContactsRequest {
  type: ContactActionTypes.FETCH_CONTACTS_REQUEST;
}

interface FetchContactsSuccess {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS;
  contacts: unknown[];
}

interface FetchContactsFailure {
  type: ContactActionTypes.FETCH_CONTACTS_FAILURE;
  error: string;
}

interface PutContactRequest {
  type: ContactActionTypes.PUT_CONTACT_REQUEST;
}

interface PutContactSuccess {
  type: ContactActionTypes.PUT_CONTACT_SUCCESS;
}

interface PutContactFailure {
  type: ContactActionTypes.PUT_CONTACT_FAILURE;
  error: string;
}

interface DeleteContactRequest {
  type: ContactActionTypes.DELETE_CONTACT_REQUEST;
}

interface DeleteContactSuccess {
  type: ContactActionTypes.DELETE_CONTACT_SUCCESS;
}

interface DeleteContactFailure {
  type: ContactActionTypes.DELETE_CONTACT_FAILURE;
  error: string;
}

export type ContactActions =
  | PostContactRequest
  | PostContactSuccess
  | PostContactFailure
  | FetchContactsRequest
  | FetchContactsSuccess
  | FetchContactsFailure
  | PutContactRequest
  | PutContactSuccess
  | PutContactFailure
  | DeleteContactRequest
  | DeleteContactSuccess
  | DeleteContactFailure;
