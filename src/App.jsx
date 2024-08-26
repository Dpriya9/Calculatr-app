import { TextField, Stack, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);

  const [isPrincipleValid, setIsPrincipleValid] = useState(false);
  const [isRateValid, setIsRateValid] = useState(false);
  const [isYearValid, setIsYearValid] = useState(false);

  // input validation function
  const validateInput = (inputTag) => {
    // object destructuring : const{(key1,key2...)}=obejct-name
    const { name, value } = inputTag;
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));

    if (name == "principle") {
      setPrinciple(value);
      !!value.match(/^\d*\.?\d+$/)
        ? setIsPrincipleValid(false)
        : setIsPrincipleValid(true);
    } else if (name == "rate") {
      setRate(value);
      !!value.match(/^\d*\.?\d+$/)
        ? setIsRateValid(false)
        : setIsRateValid(true);
    } else if (name == "year") {
      setYear(value);
      !!value.match(/^\d*\.?\d+$/)
        ? setIsYearValid(false)
        : setIsYearValid(true);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("Inside handleCalculate function");
    if(principle&& rate&& year){
      // calculate

      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form Completely!!!")
    }
  };

  const handleReset=()=>{
setPrinciple(0)
setRate(0)
setYear(0)
setInterest(0)
setIsPrincipleValid(false)
setIsRateValid(false)
setIsYearValid(false)


  }

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <div className="bg-light rounded p-5" style={{ width: "600px" }}>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className="d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3 rounded">
          <h1>₹ {interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>
        </div>
        <form className="mt-5">
          <div className="mb-3">
            <TextField
            value={principle || ""}
              onChange={(e) => validateInput(e.target)}
              id="outlined-basic"
              label="₹ Principle Amount"
              className="w-100"
              name="principle"
              variant="outlined"
            />
          </div>
          {isPrincipleValid && (
            <div className="mb-3 text-danger fw-bolder">
              Invalid Principle Amount
            </div>
          )}
          <div className="mb-3">
            <TextField
             value={rate || ""}
              onChange={(e) => validateInput(e.target)}
              id="outlined-basic1"
              label="Rate of Interest (p.a) %"
              className="w-100"
              variant="outlined"
              name="rate"
            />
          </div>
          {isRateValid && (
            <div className="mb-3 text-danger fw-bolder">Invalid Rate</div>
          )}
          <div className="mb-3">
            <TextField
             value={year || ""}
              onChange={(e) => validateInput(e.target)}
              id="outlined-basic2"
              label="Time Period (yr)"
              className="w-100"
              variant="outlined"
              name="year"
            />
          </div>
          {isYearValid && (
            <div className="mb-3 text-danger fw-bolder">Invalid Year</div>
          )}

          <Stack direction="row" spacing={2}>
            <Button
            disabled={isPrincipleValid || isRateValid || isYearValid}
              onClick={handleCalculate}
              type="
          submit"
              variant="contained"
              className="bg-dark"
              style={{ width: "50%", height: "70px" }}
            >
              Calculate
            </Button>
            <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: "70px" }}>
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
