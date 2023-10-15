import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SenderAddress from "./Courier/SenderAddress";
import RecevierAddress from "./Courier/RecevierAddress";
import Confirmation from "./Courier/Confirmation";
import GetWeight from "./Courier/GetWeight";
import ShippingOption from "./Courier/ShippingOption";
import { LabelContext } from "../labelDataContext";
import { LabelProvider} from "../labelDataContext";

import "../App.css";

const Courier = () => {
  const value = useContext(LabelContext);
  const stepstyle={
     "& .Mui-active":{
        "&.MuiStepIcon-root":{
           color:"#1976d2"
        }
     },

     "& .Mui-completed":{
      "&.MuiStepIcon-root":{
         color:"green"
      }
   }
  }

  return (
    // <div className="w-full mb-10 mt-10">

    <div className="w-[60%] mx-auto my-[10%] rounded-lg p-4 bg-white shadow">
      <Box sx={stepstyle} className="mb-5 mt-3 w-full" >
        <Stepper activeStep={value.page} alternativeLabel >
          {value.steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                classes={{
                  completed: "completed-step"
                }}
              >
                <span className="italic ">{step.title}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {value.page === 0 && <SenderAddress />}
      {value.page === 1 && <RecevierAddress />}
      {value.page === 2 && <GetWeight />}
      {value.page === 3 && <ShippingOption />}
      {value.page === 4 && <Confirmation />}
      
    </div>
    // </div>
  );
};

export default Courier;