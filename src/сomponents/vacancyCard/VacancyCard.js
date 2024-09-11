import React from 'react';
import './vacancyCard.css';

import moreOptionsIcon from '../../img/icon/more_options-gray.svg';
import starIcon from '../../img/icon/favorite_star.svg';

  // Функция для расчета количества дней назад
  const daysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInMillis = now - date;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMillis / millisecondsPerDay);

    return `${differenceInDays} days ago`;
  };

const VacancyCard = ({ vacancy, onVacancyClick }) => {
  const { company, jobTitle, previewDescription, department, jobPostedDate, image } = vacancy;
  
  const formattedDate = daysAgo(jobPostedDate);


  return (
    <div 
      className="vacancy-card" 
      onClick={() => onVacancyClick?.(vacancy)}
    >
      <div className="vacancy-card__header">
        <div className="vacancy-card__header-left">
        <img src={image} alt="company logo" className="vacancy-card__logo" />
          <div className="vacancy-card__company-info">
            <p className="vacancy-card__company">{company}</p>
            <p className="vacancy-card__department">{department.toLowerCase()}</p>
          </div>
        </div>

        <div className="vacancy-card__icons">
          <button className="vacancy-card__options-btn"><img src={moreOptionsIcon} alt="more options" /></button>
          <button className="vacancy-card__favorite-btn"><img src={starIcon} alt="favorite" /></button>
        </div>

      </div>
      <h2 className="vacancy-card__title">{jobTitle}</h2>
      <p className="vacancy-card__description">{previewDescription}</p>
      <p className="vacancy-card__date">{formattedDate}</p>
    </div>
  );
};

export {VacancyCard, daysAgo};

