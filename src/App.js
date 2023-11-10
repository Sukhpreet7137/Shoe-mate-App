import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <div className='flex flex-col max-w-screen'>
      <Header/>
      <div className='flex flex-row mt-32 max-w-screen'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
