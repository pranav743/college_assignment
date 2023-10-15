import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Courier from './Pages/Courier';
import { LabelProvider } from "./labelDataContext";
import AccountStepper from './Pages/AccountCreation/AccountStepper';

function App() {

  const [view, setView] = useState(true);

  const changeView = () => {
    setView((prev) => !prev)
  }




  return (
    <>

      <p className='view-btn' onClick={changeView}>Change View</p>
      <LabelProvider>

        {
          (view == true) &&
          <AccountStepper />
        }

        { (view == false) &&
          <div className='background2'>
            <Courier />
          </div>
        }

        



      </LabelProvider>
    </>
  );
}

export default App;
