import './App.css';
import ContactForm from './Components/ContactForm';
import DataDisplay from './Components/DataDisplay';

function App() {
  return (
    <div>
      <h1 className="App">Contact Form</h1>
      <ContactForm />
      <DataDisplay />
    </div>
  );
}

export default App;
