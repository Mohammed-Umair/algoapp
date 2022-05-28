import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Add } from "./Add";

export const ContainerManager = () => {
  const [val, setVal] = useState("mult");
  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="add" label="Add" />
        <Tab value="mult" label="Multiply" />
        <Tab value="even" label="EvenOdd" />
      </Tabs>

      {val === "mult" && <h1>This is my PDAC Cource-Multiplication App</h1>}
      {val === "add" && <Add />}
      {val === "even" && <h1>This is my PDAC Cource- EvenOddApp</h1>}
    </div>
  );
};
