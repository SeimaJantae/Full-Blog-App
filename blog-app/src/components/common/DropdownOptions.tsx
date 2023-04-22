import React, { FC, ReactNode, useState } from "react";

type Props = {
  head: ReactNode;
  options: { label: string; onClick(): void }[];
};

const DropdownOptions: FC<Props> = ({ head, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <button
      onBlur={() => setShowOptions(false)}
      onMouseDown={() => setShowOptions(!showOptions)}
      className="relative"
    >
      {head}
      {showOptions && (
        <div className="min-w-max absolute mt-2 left-2 text-secondary-light border-secondary-light border-2 border-opacity-50">
          <ul className="p-2 space-y-2">
            {options.map(({ label, onClick }, index) => {
              return (
                <li
                  key={label + index}
                  onMouseDown={onClick}
                  className=" hover:text-action"
                >
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOptions;
