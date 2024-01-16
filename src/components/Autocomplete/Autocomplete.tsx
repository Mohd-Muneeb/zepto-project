import React, { type ReactElement, useRef, useState } from "react";
import CrossIcon from "~/icons/CrossIcon";
import { type AutocompleteProps, type OptionType } from "~/types";

const Autocomplete = ({
  value,
  onChange,
  onTextChange,
  placeholder,
  inputOptions,
}: AutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<number | undefined>();
  const [isMyInputFocused, setIsMyInputFocused] = useState(false);

  const renderOptions = (options: OptionType[]): ReactElement | null => {
    const handleAddingOption = (val: string | undefined) => {
      onChange((prev) => {
        if (!val) return prev;

        if (prev.includes(val)) return prev;

        return [...prev, val];
      });

      setSelectedTag(undefined);
    };

    if (options.length === 0) return null;

    return (
      <div
        className="mt-2 h-full w-full rounded-md border-[1px] border-solid border-gray-300"
        id="autocomplete-paper"
      >
        {options.map((option) => {
          return (
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                handleAddingOption(option.value);
              }}
              className="flex w-full items-center gap-4 px-4 py-2"
              key={option.value}
            >
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={option.image}
              />
              <div className="text-left">
                <h1>{option.label}</h1>
                <p className="text-sm text-gray-600">{option.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderSelectedChips = () => {
    const handleOptionDelete = (val: string | undefined) => {
      onChange((prev) => prev.filter((elem) => elem !== val));
    };

    const chips = value.map((option) => {
      const result = inputOptions.filter((elem) => elem.value === option)[0];

      return result;
    });

    return (
      <>
        {chips.map((chip, index) => {
          return (
            <div
              key={chip?.value}
              style={{
                border: selectedTag === index ? "solid 1px blue" : "none",
              }}
              className="m-1 flex w-fit items-center gap-1 rounded-full bg-sky-100 px-2 py-1"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="h-6 w-6 rounded-full object-cover"
                src={chip?.image}
              />
              <span>{chip?.label}</span>
              <button onClick={() => handleOptionDelete(chip?.value)}>
                <CrossIcon />
              </button>
            </div>
          );
        })}
      </>
    );
  };

  const handleInputKeyDown = (e: unknown) => {
    if (e?.key.toLowerCase() === "backspace" && e?.target?.value === "") {
      if (selectedTag === undefined) {
        setSelectedTag(value.length - 1);
      } else {
        onChange((prev) => {
          if (prev.length === 0) {
            return [];
          } else {
            return prev.slice(0, prev.length - 1);
          }
        });
        setSelectedTag(undefined);
      }
    }

    setTextValue(e.target.value);
    onTextChange(e.target.value);

    return null;
  };

  const generateFilteredOptions = (text: string, options: OptionType[]) => {
    return options.filter((option) => option.label.includes(text));
  };

  return (
    <div
      className="grid w-96 place-items-center"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex w-full flex-wrap items-center border-2 border-solid ">
        {renderSelectedChips()}
        <input
          onKeyUp={(e) => handleInputKeyDown(e)}
          autoFocus
          id="autocomplete-input"
          className="ml-2 rounded-lg border-0 py-2 outline-none"
          placeholder={placeholder}
          ref={inputRef}
          onBlur={() => setIsMyInputFocused(false)}
          onFocus={() => setIsMyInputFocused(true)}
        />
      </div>
      {isMyInputFocused
        ? renderOptions(generateFilteredOptions(textValue, inputOptions))
        : null}
    </div>
  );
};

export default Autocomplete;
