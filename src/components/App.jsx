import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Header';
import { Form } from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
};
