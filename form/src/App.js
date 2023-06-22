import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import FormModal from './components/FormModal';

function App() {
  return (
    <div className="App">
       {/* <Header/> */}
   {/* <RegistrationForm/> */}
   <MainComponent/>
   <FormModal/>
    </div>
  );
}

export default App;
