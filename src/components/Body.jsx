import React from "react";

export default function Body({ data }) {
  return (
    <div className="content">
      <div className="body">
        {data.map((item) => (
          <div className="item">
            <img className="scoot" src={item.logo} alt="scoot" />
            <div className="mohtava">
              <div>
                {item.postedAt} . {item.contract}
              </div>
              <div>{item.position}</div>
              <div>{item.company}</div>
              <div>{item.location}</div>
            </div>
          </div>
        ))}

        {/* <div className="item">
          <div className="mohtava">
            <div>{data.postedAt} . {data.contract}</div>
            <div>{data.position}</div>
            <div>{data.company}</div>
            <div>{data.location}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
