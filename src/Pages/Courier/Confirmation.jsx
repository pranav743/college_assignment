import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../../labelDataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputAdornment from "@mui/material/InputAdornment";
import "../styles.css";
import { upper } from "../normalization";
import { grey } from "@mui/material/colors";

const Confirmation = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setshippingCoast] = useState(0);

  useEffect(() => {
    const weight = value.labelInfo.weight;
    const shippingOption = value.labelInfo.shippingOption;

    const shippingRate = 0.4,
      shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    setshippingCoast(shippingTotal);
  }, []);
  
  console.log(shippingCoast, "shippingCoast");
  console.log(value, "value");

  return (
    
    <div className="">

      <h6 className="font-bold mt-6 text-blue-800">SENDER DETAILS</h6>
      
      <div className="flex flex-col">
        
        <TextField
          style={{ marginTop: "10px", width: "100%" }}
          label='Name'
          value={upper(value.labelInfo.sender.name)}
          InputProps={{
            readOnly: true
          }}
        />

        <TextField
          label="Street Address"
          margin="normal"
          value={upper(value.labelInfo.sender.street)}
          style={{ marginTop: "20px", width: "100%" }}
          InputProps={{
          readOnly: true
          }}
        />

        <div className="flex py-2 ">
        
        <TextField
          style={{ width: "50%" ,marginRight:'10px'}}
          label="City"
          value={upper(value.labelInfo.sender.city)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          style={{ width: "50%" ,marginRight:'10px'}}
          label="State"
          value={upper(value.labelInfo.sender.state)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          style={{ width: "50%" ,marginRight:'10px'}}
          label="ZipCode"
          value={value.labelInfo.sender.zipCode}
          InputProps={{
            readOnly: true
          }}
        />

        </div>

      </div>



      <h6 className="font-bold mt-4 text-blue-800">RECEIVER DETAILS</h6>

      <div className="flex flex-col">
        <TextField
          style={{ marginTop: "10px", width: "100%" }}
          fullWidth
          label="Name"
          value={upper(value.labelInfo.recevier.name)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          style={{ marginTop: "20px", width: "100%" }}
          label="Street Address"
          fullWidth
          margin="normal"
          value={upper(value.labelInfo.recevier.street)}
          InputProps={{
            readOnly: true
          }}
        />

      <div className="flex py-2 ">
      <TextField
  
          style={{ width: "50%" ,marginRight:'10px'}}
          label="City"
          value={upper(value.labelInfo.recevier.city)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          style={{ width: "50%" ,marginRight:'10px'}}
          label="State"
          value={upper(value.labelInfo.recevier.state)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          style={{ width: "50%" ,marginRight:'10px'}}
          label="ZipCode"
          value={value.labelInfo.recevier.zipCode}
          InputProps={{
            readOnly: true
          }}
        />
      </div>

      </div>

      <h6 className="font-bold mt-6 text-blue-800">WEIGHT</h6>

      <div className="child">
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">lbs:</InputAdornment>
            ),
            readOnly: true
          }}
          value={value.labelInfo.weight}
        />
      </div>
      <h6 className="font-bold mt-6 text-blue-800">SELECTED SHIPPING OPTION</h6>

      <div className="child">
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={value.labelInfo.shippingOption === "1" ? "GROUND" : "PRIORITY"}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <h6 className="font-bold mt-6 text-blue-800">TOTAL SHIPPING COAST</h6>
      <div className="child">
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={shippingCoast}
          ed
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            readOnly: true
          }}
        />
      </div>
      <div className="flex justify-between w-full"

      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }} variant="contained">
          Previous
        </Button>
        <Button onClick={() => value.nextPage()} style={{ margin: 25 }} variant="contained">
          Confirm
        </Button>
      </div>
    </div>
  );
};
export default Confirmation;