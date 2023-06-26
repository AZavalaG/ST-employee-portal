import React, { useState } from "react";
import { css } from "@emotion/react";

const dropdownStyles = css`
  position: relative;
  display: inline-block;
`;

const dropdownLabelStyles = css`
  font-weight: bold;
`;

const dropdownButtonStyles = css`
  width: 60px;
  height: 24px;
  background-color: #D0D0D0;
  color: black;
  margin-left: 10px;
  border: none;
  cursor: pointer;
`;

const dropdownContentStyles = css`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  display: none;
  flex-direction: column;
  background-color: #4049BF;
  color: white;
  width: 60px;
`;

const dropdownOptionStyles = css`
  padding: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-bottom: 1px solid white;
`;

const dropdownOptionHoverStyles = css`
  background-color: #32366e;
`;

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const [isOptionHovered, setIsOptionHovered] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleOptionMouseEnter = () => {
    setIsOptionHovered(true);
  };

  const handleOptionMouseLeave = () => {
    setIsOptionHovered(false);
  };

  return (
    <div css={dropdownStyles}>
      <div css={dropdownLabelStyles}>
        Skill Name 
        <button css={dropdownButtonStyles} onClick={toggleDropdown}>
          {selectedValue} ▼
        </button>
      </div>
      {isOpen && (
        <div css={dropdownContentStyles}>
          {[...Array(11).keys()].map((value) => (
            <div
              key={value}
              css={[
                dropdownOptionStyles,
                isOptionHovered && dropdownOptionHoverStyles,
              ]}
              onClick={() => handleSelect(value)}
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
