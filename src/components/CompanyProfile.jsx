import React from "react";
export default function CompanyProfile({ data }) {
  return (
    <>
      <img src="" alt="" />
      <div>
        <span>{data.company}</span>
        <span>{data.company}.com</span>
        <span>{data.website}</span>
      </div>
    </>
  );
}
