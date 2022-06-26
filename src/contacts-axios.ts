import axios from 'axios';

const axiosContacts = axios.create({
  baseURL:
    'https://contacts-list-ts-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosContacts;
