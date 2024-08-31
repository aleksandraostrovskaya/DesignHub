import Banner from '../../сomponents/banner/Banner'
import Filter from '../../сomponents/filter/Filter'
import Footer from '../../сomponents/footer/Footer'
import Header from '../../сomponents/header/Header'
import SearchBar from '../../сomponents/searchBar/SearchBar'
import VacanciesList from '../../vacanciesList/VacanciesList'

import './vacanciesPage.css';
import companyLogo from '../../img/authorPhoto.jpg'

const VacanciesPage = () => {

  const allVacancies = [
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
    {id: 1, company: "Company", title: "Art Director / 3D Designer", description: "Art Director / 3D Designer, at FRAME, remote or in-house.", type: "office", date: "3 days ago", logo: companyLogo},
  ]

	const filterData = [
    {
      title: "By employment type",
      items: ["Full-time", "Part-time", "Temporary", "Remote", ]
    },
    {
      title: "By industry",
      items: ["IT and Technology", "Finance", "Marketing", "Healthcare", "Education"]
    },
    {
      title: "By experience level",
      items: ["Entry level", "Mid level", "Senior level"]
    },
    {
      title: "By location",
      items: ["City", "Region", "Country"]
    },
    {
      title: "By salary range",
      items: ["300$", "700$", "1000$"]
    }
  ]
  // const [filteredVacancies, setFilteredVacancies] = useState(vacancies);
  // const [isSearching, setIsSearching] = useState(false);

  // const handleSearch = (searchTerm) => {
  //   const results = vacancies.filter(vacancy =>
  //     vacancy.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredVacancies(results);
  //   setIsSearching(true);
  // };

    // const handleFilter = (filterCriteria) => {
  //   // Логика фильтрации
  // };

    // const handleSort = (sortCriteria) => {
  //   // Логика сортировки
  // };

	return (
		<>
			<Header/>
			<Banner/>
			<SearchBar/>

			<main className='main'>
				<div className="container container--flex">
				<aside className="aside">
            <Filter sections={filterData}/>
          </aside>
          <section className="section">
            <VacanciesList vacancies={allVacancies} />
          </section>
				</div>
			</main>
			<Footer/> 
		</>
	)
}

export default VacanciesPage