// src/components/InputChip.tsx
import React, {useState, ChangeEvent, KeyboardEvent} from 'react';

interface InputChipProps {
    onAddChip: (chip: string) => void;
}

const InputChip: React.FC<InputChipProps> = ({onAddChip}) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            onAddChip(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add Chip"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
            />
            <button onClick={() => onAddChip(inputValue)}>Add Chip</button>
        </div>
    );
};

export default InputChip;
