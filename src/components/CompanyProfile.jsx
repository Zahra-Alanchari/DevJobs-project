import React from "react";
export default function CompanyProfile({item}) {
  console.log(item,"item chi shod")
  return (
    <>
      <img src="" alt="" />
      <div>
        <span>{item.company}</span>
        <span>{item.company}.com</span>
        <span>{item.website}</span>
      </div>
    </>
  );
}
