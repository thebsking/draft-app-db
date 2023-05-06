import React from "react";

const BasicDropdown = (props) => {

  const optionList = [...props.options];

  return (
    <select onChange={props.onChange}>
      <option>{props.default}</option>
      {optionList.map((x, i) => {
        return <option key={i} value={x}>{x}</option>
      })}
    </select>
  )
}

export default BasicDropdown;