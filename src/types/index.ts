import { Dispatch, SetStateAction } from "react";

export interface OptionType {
  label: string;
  value:string;
  text: string;
  image: string;
}

export interface AutocompleteProps {
    value: string[];
    onChange: Dispatch<SetStateAction<string[]>>;
    onTextChange: Dispatch<SetStateAction<string>>
    placeholder: string;
    inputOptions: OptionType[]
}
