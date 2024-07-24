import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { jobFetcher } from "../fetcher";

const Item = ({ setSelectedData, selectedData, setId, id }) => {
  function handleClick(e) {
    const target = e.target;
    setId(target.id);
  }
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: jobFetcher,
  });

  if (isLoading) return <div>Loading...</div>;
  const filteredData = data.filter((job) => {
    if (selectedData === "") {
      return job;
    } else {
      return job.position.toLowerCase().includes(selectedData);
    }
  });
  return (
    <div onClick={handleClick}>
      {filteredData.map((item) => (
        <li key={item.id} id={item.id} className="item">
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
