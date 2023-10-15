import React, { useContext, useState } from "react";
import { LabelContext } from "../../labelDataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import "../../App.css";


const RecevierAddress = (props) => {

  const value = useContext(LabelContext);
  const recevier = value.labelInfo.recevier;

  const [errors, setErrors] = useState({
    name: false,
    street: false,
    city: false,
    state: false,
    zipCode: false,
  });

  const validateForm = () => {
    const errorFields = {};

    // Check each field for empty values
    if (recevier.name.trim() === "") {
      errorFields.name = true;
    }
    if (recevier.street.trim() === "") {
      errorFields.street = true;
    }
    if (recevier.city.trim() === "") {
      errorFields.city = true;
    }
    if (recevier.state.trim() === "") {
      errorFields.state = true;
    }
    if (recevier.zipCode.trim() === "") {
      errorFields.zipCode = true;
    }

    setErrors(errorFields);

    // Check if there are any errors
    return Object.values(errorFields).every((field) => !field);

  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(validateForm());
      // console.log(value);
      value.nextPage();  
      console.log("value1",value.page);
    }
  };

  const handleBack = () => {
    value.prevPage();
  };


  return (
    <form className="">
      <h4 className="text-center text-lg font-semibold mb-3 text-blue-800">ENTER RECEIVER DETAILS</h4>

   

    <div className="flex flex-col">
      <TextField
        className=""
        label="Enter Full Name"
        style={{ marginTop: "10px", width: "100%"}}
        fullWidth
        margin="normal"
        required
        error={errors.name}
        onChange={(e) => {
          value.setRecevierInfo("name")(e);
          setErrors({ ...errors, name: false });
        }}
        value={recevier.name}
        helperText={errors.name ? "This field cannot be empty" : ""}
      />

      <TextField
        label="Enter Street Address"
        style={{ margin: "auto", width: "100%" }}
        fullWidth
        margin="normal"
        required
        error={errors.street}
        onChange={(e) => {
          value.setRecevierInfo("street")(e);
          setErrors({ ...errors, street: false });
        }}
        value={recevier.street}
        helperText={errors.street ? "This field cannot be empty" : ""}
      />
      
      <div className="flex py-2 mt-4">
      <TextField
        required
        style={{ width: "50%" ,marginRight:'10px'}}
        label="Enter City"
        error={errors.city}
        onChange={(e) => {
          value.setRecevierInfo("city")(e);
          setErrors({ ...errors, city: false });
        }}
        value={recevier.city}
        helperText={errors.city ? "This field cannot be empty" : ""}
      />

      <TextField
        required
        style={{ width: "50%" ,marginRight:'10px'}}
        label="Enter State"
        error={errors.state}
        onChange={(e) => {
          value.setRecevierInfo("state")(e);
          setErrors({ ...errors, state: false });
        }}
        value={recevier.state}
        helperText={errors.state ? "This field cannot be empty" : ""}
      />

      <TextField
        required
        style={{ width: "48%" }}
        label="Enter ZipCode"
        type="number"
        error={errors.zipCode}
        onChange={(e) => {
          value.setRecevierInfo("zipCode")(e);
          setErrors({ ...errors, zipCode: false });
        }}
        value={recevier.zipCode}
        helperText={errors.zipCode ? "This field cannot be empty" : ""}
      />

      </div>




 </div>


      <div
        className="flex flex-row justify-between  w-full"
      >
        <Button onClick={handleBack} style={{ margin: 25 }} className="" variant="contained">
          Previous
        </Button>
        <Button onClick={handleSubmit} style={{ margin: 25 }} variant="contained">
          Next
        </Button>
      </div>
    </form>
  );
};

export default RecevierAddress;
