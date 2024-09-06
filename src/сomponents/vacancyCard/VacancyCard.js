import React from 'react';
import './vacancyCard.css';

const VacancyCard = ({ vacancy, onVacancyClick }) => {
  const { company, jobTitle, previewDescription, department, jobPostedDate, image } = vacancy;

  return (
    <div 
      className="vacancy-card" 
      onClick={() => onVacancyClick?.(vacancy)}
    >
      <div className="vacancy-card__header">
        <img src={image} alt="company logo" className="vacancy-card__logo" />
        <div className="vacancy-card__company-info">
          <p className="vacancy-card__company">{company}</p>
          <p className="vacancy-card__department">{department.toLowerCase()}</p>
        </div>
      </div>
      <h2 className="vacancy-card__title">{jobTitle}</h2>
      <p className="vacancy-card__description">{previewDescription}</p>
      <p className="vacancy-card__date">{jobPostedDate}</p>
    </div>
  );
};

export default VacancyCard;

