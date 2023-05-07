import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@material-tailwind/react";
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourPage from './components/FourPage';
import FivePage from './components/FivePage';
import SixPage from './components/SixPage';
import SevenPage from './components/SevenPage';
import EightPage from './components/EightPage';
import NinePage from './components/NinePage';
import TenPage from './components/TenPage';
function App() {
  return (
    <div className="App">

    <ThemeProvider>
      <FirstPage />
      <SecondPage/>
      <ThirdPage/>
      <FourPage/>
      <FivePage/>
      <SixPage/>
      <SevenPage/>
      <EightPage/>
      <NinePage/>
      <TenPage/>
    </ThemeProvider>

    </div>
  );
}

export default App;
