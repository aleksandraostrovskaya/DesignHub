import VacancyCard from '../сomponents/vacancyCard/VacancyCard'

import './vacanciesList.css';

const VacanciesList = ({ vacancies }) => {
  return (
    <div className="vacancies-list">
        {vacancies.map(vacancy => (
          <VacancyCard
            key={vacancy.id}
            company={vacancy.company}
            title={vacancy.title}
            description={vacancy.description}
            type={vacancy.type}
            date={vacancy.date}
            logo={vacancy.logo}
          />
        ))}
      </div>
  );
};

export default VacanciesList;
