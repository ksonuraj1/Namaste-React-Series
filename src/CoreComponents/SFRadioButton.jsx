import React from "react";
import { Radio } from "@mui/material";

import React from "react";

function SFRadioButton(props) {
  return (
    <Radio
      sx={{
        color: "orange",
        "&.Mui-checked": {
          color: "orange",
        },
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      {...props}
    />
  );
}

export default SFRadioButton;
