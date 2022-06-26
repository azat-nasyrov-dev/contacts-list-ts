import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsListPage from './containers/ContactsListPage/ContactsListPage';
import AddContactPage from './containers/AddContactPage/AddContactPage';
import EditContactPage from './containers/EditContactPage/EditContactPage';
import Layout from './components/UI/Layout/Layout';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<ContactsListPage />} />
      <Route path="/add-contact" element={<AddContactPage />} />
      <Route path="/edit-contact/:id" element={<EditContactPage />} />
    </Routes>
  </Layout>
);

export default App;
