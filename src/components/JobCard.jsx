import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ titulo, descricao }) => {
  return (
    <div className="job-card">
      <h3 className="job-card-title">{titulo}</h3>
      <p className="job-card-description">{descricao}</p>
    </div>
  );
};

export default JobCard;
