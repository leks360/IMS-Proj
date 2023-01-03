import { useState } from "react";
import "./formInput.css";
import styled from "styled-components";

const SPAN=styled.span`
  flex:1;
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
    `
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input className="Oneinput"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <SPAN>{errorMessage}</SPAN>
    </div>
  );
};

export default FormInput;