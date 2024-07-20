import React, { useState } from "react";

const Item = ({ data, setId,setSelectedData, selectedData  }) => {
    
  function handleClick(e) {
    const target = e.target;
    console.log(target, "target");
    setId(target.id);
  }
  const filteredData = data.filter((item) => {
    //if no input the return the original
    if (selectedData === '') {
        return item;
    }
    //return the item which contains the user input
    else {
        return item.position.toLowerCase().includes(selectedData)
    }
})

  return (
    <div onClick={handleClick}>
      {filteredData.map((item) => (
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
