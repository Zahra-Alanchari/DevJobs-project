import React, { useState } from "react";

const Item = ({ data, setId }) => {
    
  function handleClick(e) {
    const target = e.target;
    console.log(target, "target");
    setId(target.id);
  }

  return (
    <div onClick={handleClick}>
      {data.map((item) => (
        <li  id={item.id} className="item">
          <img className="scoot" src={item.logo} alt="scoot" />
          <div className="mohtava">
            <div>
              {item.postedAt} . {item.contract}
            </div>
            <div>{item.position}</div>
            <div>{item.company}</div>
            <div>{item.location}</div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Item;
