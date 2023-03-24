import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
};
