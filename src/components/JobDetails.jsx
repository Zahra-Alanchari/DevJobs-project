import React from "react";

const JobDetails = ({item}) => {
  return (
    <div>
      <li className="item">
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

      <button>Apply now </button>

      <div>
        <p>{item.description}</p>
        <h1>Requirements</h1>
        <p>{item.requirements?.content}</p>
        <ul className="list">
            {item.requirements?.items.map((item)=> (<li className="list">{item}</li>))}
        </ul>
        <h1>what you will do</h1>
      </div>
    </div>
  );
};

export default JobDetails;
