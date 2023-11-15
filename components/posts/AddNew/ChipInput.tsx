import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { IoClose } from "react-icons/io5";

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
      <div className={"flex my-1 flex-wrap"}>
        {chips.map((chip, index) => (
          <div key={index} className="chip flex items-center justify-between bg-accent/20 mr-2 rounded-xl p-1.5 pl-2.5 my-1">
            {chip}
            <button onClick={handleDelete(chip)} style={{color:"#fff"}}><IoClose/></button>
          </div>
        ))}
      </div>
      <input
        className={"input bg-accent/20 w-full"}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="insert tag..."
      />
    </div>
  );
};

export default InputChip;