import React from "react";

const JobDetails = ({data}) => {
  return (
    <div>
      <li className="item">
        <img className="scoot" src={data.logo} alt="scoot" />
        <div className="mohtava">
          <div>
            {data.postedAt} . {data.contract}
          </div>
          <div>{data.position}</div>
          <div>{data.company}</div>
          <div>{data.location}</div>
        </div>
      </li>

      <button>Apply now </button>

      <div>
        <p>{data.description}</p>
        <h1>Requirements</h1>
        <p>{data.requirements.content}</p>
        <ul className="list">
            {data.requirements.items.map((item)=> (<li className="list">{item}</li>))}
        </ul>
        <h1>what you will do</h1>
      </div>
    </div>
  );
};

export default JobDetails;
