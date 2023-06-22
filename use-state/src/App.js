
//https://www.bmw.com/en-au/home.html
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from "@material-tailwind/react";

import Example from './components/Example';
import Head from './components/Head';
import Page from './components/Page';

import ShoppingTool from './components/ShoppingTool'
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FooterPage from './components/FooterPage';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
      {/* <Example/>
      <Head/> */}
      <Page/>
      <ShoppingTool/>
      <ThirdPage/>
      <FourthPage/>
      <FooterPage/>
  
      </ThemeProvider>
     
      
    </div>
  );
}

export default App;
