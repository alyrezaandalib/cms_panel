// import * as React from "react";
// import Autocomplete from "@mui/material/Autocomplete";
// import { useState } from "react";
// import Chip from "@mui/material/Chip";
// import TextField from "@mui/material/TextField";
//
// export default function ChipInput() {
//   const [value, setValue]: any = useState([]);
//   console.log(value);
//
//   const handleDelete = (chipToDelete: any) => () => {
//     setValue((chips: any) =>
//       chips.filter((chip: any) => chip !== chipToDelete),
//     );
//   };
//
//   return (
//     <Autocomplete
//       multiple
//       freeSolo
//       value={value}
//       options={[]}
//       onChange={(event, newValue) => setValue(newValue)}
//       renderTags={(value, getTagProps) =>
//         value.map((option, index) => (
//           <Chip
//             key={index}
//             label={option}
//             variant="outlined"
//             onDelete={handleDelete(option)}
//           />
//         ))
//       }
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           variant="outlined"
//           label="Add Chip"
//           placeholder="Type and press enter"
//         />
//       )}
//     />
//   );
// }

import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface InputChipProps {}

const InputChip: React.FC<InputChipProps> = () => {
  const [value, setValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  const handleDelete = (chipToDelete: string) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.trim() !== "") {
      setChips((chips) => [...chips, value.trim()]);
      setValue("");
    }
  };

  return (
    <div>
      <div>
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <button onClick={handleDelete(chip)}>X</button>
          </div>
        ))}
      </div>
      <input
        className={"input bg-accent/20"}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type and press enter"
      />
    </div>
  );
};

export default InputChip;

// src / App.tsx;
// import React, { useState } from "react";
// import InputChip from "./jhh";
//
// const App: React.FC = () => {
//   const [chips, setChips] = useState<string[]>([]);
//
//   const handleAddChip = (chip: string) => {
//     setChips([...chips, chip]);
//   };
//
//   return (
//     <div>
//       <h1>React Input Chip Example</h1>
//       <InputChip onAddChip={handleAddChip} />
//       <div>
//         {chips.map((chip, index) => (
//           <div key={index} className="chip">
//             {chip}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default App;
