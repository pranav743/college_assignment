import React, { useContext, useState } from "react";
import { LabelContext } from "../../labelDataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import "../styles.css";

const GetWeight = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo.weight;
  const [error, setError] = useState(false);

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    if (!newWeight || newWeight.trim() === "") {
      setError(true);
    } else {
      setError(false);
      value.handleChange("weight")(e);
    }
  };

  const handleSubmit = () => {
    if (weight && weight.trim() !== "") {
      value.nextPage();
    } else {
      setError(true);
    }
  };

  return (
    <form>
      {/* <Typography variant="h4"></Typography> */}
      <h4 className="text-center text-lg font-semibold mb-3 text-blue-800">ENTER PACKAGE WEIGHT</h4>

      <TextField
        id="standard-full-width"
        label="Enter Weight (Numbers Only)"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        type="number"
        required
        error={error}
        onChange={handleWeightChange}
        value={weight}
        InputProps={{
          startAdornment: <InputAdornment position="start">lbs:</InputAdornment>,
        }}
        helperText={error ? "This field cannot be empty" : ""}
      />

      <div
        className="w-full flex justify-between"
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }} variant="contained">
          Previous
        </Button>
        <Button
          disabled={error || (!weight || weight.trim() === "")}
          onClick={handleSubmit}
          style={{ margin: 25 }}
          variant="contained"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default GetWeight;
