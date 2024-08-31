import React from 'react';
import './vacancyCard.css';

const VacancyCard = ({ company, title, description, type, date, logo }) => {
  return (
    <div className="vacancy-card">
      <div className="vacancy-card__header">
        <img src={logo} alt="company logo" className="vacancy-card__logo" />
        <div className="vacancy-card__company-info">
          <p className="vacancy-card__company">{company}</p>
					<p className="vacancy-card__type">{type}</p>
        </div>
      </div>
      <h2 className="vacancy-card__title">{title}</h2>
			<p className="vacancy-card__description">{description}</p>
      <p className="vacancy-card__date">{date}</p>
    </div>
  );
};

export default VacancyCard;
