// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
