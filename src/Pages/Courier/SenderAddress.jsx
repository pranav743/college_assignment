import React, { useContext, useState } from "react";
import { LabelContext } from "../../labelDataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import "../../App.css";


const SenderAddress = (props) => {

  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;

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
    if (sender.name.trim() === "") {
      errorFields.name = true;
    }
    if (sender.street.trim() === "") {
      errorFields.street = true;
    }
    if (sender.city.trim() === "") {
      errorFields.city = true;
    }
    if (sender.state.trim() === "") {
      errorFields.state = true;
    }
    if (sender.zipCode.trim() === "") {
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

  return (
    <form className="">
      <h4 className="text-center text-lg font-semibold text-blue-800 mb-3">ENTER SENDER DETAILS</h4>

   

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
          value.setSenderInfo("name")(e);
          setErrors({ ...errors, name: false });
        }}
        value={sender.name}
        helperText={errors.name ? "This field cannot be empty" : ""}
      />

      <TextField
        label="Enter Street Address"
        style={{ marginTop: "15px", width: "100%" }}
        fullWidth
        margin="normal"
        required
        error={errors.street}
        onChange={(e) => {
          value.setSenderInfo("street")(e);
          setErrors({ ...errors, street: false });
        }}
        value={sender.street}
        helperText={errors.street ? "This field cannot be empty" : ""}
      />
      
      <div className="flex py-2 mt-4">
      <TextField
        style={{ width: "50%" ,marginRight:'10px'}}
        label="Enter City"
        error={errors.city}
        onChange={(e) => {
          value.setSenderInfo("city")(e);
          setErrors({ ...errors, city: false });
        }}
        value={sender.city}
        helperText={errors.city ? "This field cannot be empty" : ""}
      />

      <TextField
        required
        style={{ width: "50%" ,marginRight:'10px'}}
        label="Enter State"
        error={errors.state}
        onChange={(e) => {
          value.setSenderInfo("state")(e);
          setErrors({ ...errors, state: false });
        }}
        value={sender.state}
        helperText={errors.state ? "This field cannot be empty" : ""}
      />

      <TextField
        required
        style={{ width: "48%" }}
        label="Enter ZipCode"
        type="number"
        error={errors.zipCode}
        onChange={(e) => {
          value.setSenderInfo("zipCode")(e);
          setErrors({ ...errors, zipCode: false });
        }}
        value={sender.zipCode}
        helperText={errors.zipCode ? "This field cannot be empty" : ""}
      />

      </div>




 </div>


      <div className="ml-[88%]"
      >
        <Button onClick={handleSubmit} style={{ margin: 15 }} variant="contained">
          Next
        </Button>
      </div>
    </form>
  );
};

export default SenderAddress;
