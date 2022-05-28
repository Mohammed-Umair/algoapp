import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";

export const Add = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);
  return (
    <div className="sub">
      <TextField
        label="first number"
        variant="outlined"
        onChange={(e) => setFirst(e.target.value)}
      />
      <TextField
        label="second number"
        variant="outlined"
        onChange={(e) => setSecond(e.target.value)}
      />
      <TextField
        label="third number"
        variant="outlined"
        onChange={(e) => setThird(e.target.value)}
      />

      <TextField
        label="fourth number"
        variant="outlined"
        onChange={(e) => setFourth(e.target.value)}
      />
      <TextField
        label="fifth number"
        variant="outlined"
        onChange={(e) => setFifth(e.target.value)}
      />
      <Paper variant="outlined">
        {Number(first) +
          Number(second) +
          Number(third) +
          Number(fourth) +
          Number(fifth)}
      </Paper>
    </div>
  );
};
