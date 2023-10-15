import React, { useContext, useState } from "react";
import { LabelContext } from "../../labelDataContext";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../styles.css";

const GetShippingOption = (props) => {
  const value = useContext(LabelContext);
  const [shipping, setShipping] = useState("");
  const [error, setError] = useState("");
  const handleChange = (event) => {
    setShipping(event.target.value);
    setError(""); // Clear any previous error message
  };

  const handleNext = () => {
    if (shipping) {
      value.setShippingOption(shipping);
      value.nextPage();
    } else {
      setError("Please select a shipping option.");
    }
  };

  const handleBack = () => {
    value.prevPage();
  };

  return (
    <form className="ml-5">
      <h4 className="text-center text-lg font-semibold mb-3 text-blue-800">SELECT SHIPPING OPTION</h4>

      <RadioGroup
        aria-label="shippingOption"
        name="shippingOption"
        value={shipping}
        onChange={handleChange}
      >
      <div className="flex justify-center mx-auto">
      <FormControlLabel
          value="1"
          control={<Radio />}
          label="Ground"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Priority"
        />

      </div>

      </RadioGroup>


      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <div
        className="flex justify-between w-full"
      >
        <Button onClick={handleBack} style={{ margin: 25 }} variant="contained">
          Previous
        </Button>
        <Button onClick={handleNext} style={{ margin: 25 }} variant="contained">
          Next
        </Button>
      </div>
    </form>
  );
};

export default GetShippingOption;
