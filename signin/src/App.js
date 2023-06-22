import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
 
import { Breadcrumbs, ThemeProvider } from "@material-tailwind/react";

import SignIn from './Authentication/Signin';
function App() {
  return (
    <div className="App">
        <ThemeProvider>
        <BrowserRouter>
        <SignIn/>
        </BrowserRouter>
        </ThemeProvider>
       

    </div>
  );
}

export default App;
