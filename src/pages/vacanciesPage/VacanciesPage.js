import { useState } from 'react'
import Banner from '../../сomponents/banner/Banner'
import Filter from '../../сomponents/filter/Filter'
import Footer from '../../сomponents/footer/Footer'
import Header from '../../сomponents/header/Header'
import SearchBar from '../../сomponents/searchBar/SearchBar'
import VacanciesList from '../../vacanciesList/VacanciesList'

import './vacanciesPage.css';
import companyLogo from '../../img/authorPhoto.jpg'
import VacancyModal from '../../сomponents/vacancyModal/VacancyModal'

const VacanciesPage = () => {

  const allVacancies = [
    {
      id: 1,
      company: "Company",
      jobTitle: "Illustrator",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 2,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 3,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 4,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 5,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 6,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 7,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 8,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 9,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
    {
      id: 10,
      company: "Company",
      jobTitle: "Art Director / 3D Designer",
      previewDescription: "Art Director / 3D Designer, at FRAME, remote or in-house.",
      department: "Office",
      jobPostedDate: "August 8, 2023",
      image: companyLogo,
      jobType: 'Fulltime',
      jobLocation: 'Anywhere',
      jobOverview: 'We are seeking a visionary Art Director / 3D Designer to join our innovative team and lead the creative direction of our immersive projects. This role combines artistic leadership with hands-on 3D design work, requiring a deep understanding of visual storytelling, cutting-edge design trends, and the ability to transform abstract concepts into stunning visual experiences. As the Art Director, you will guide a talented team of designers, animators, and artists, ensuring that every project meets our high standards of creativity and technical excellence. In this role, you will be responsible for conceptualizing and executing a wide range of visual assets, including 3D models, environments, and animations, that will be used in both digital and physical spaces. You will collaborate closely with our development, marketing, and product teams to ensure that our visual content is not only aesthetically captivating but also aligns with the overall strategic goals of the company. The ideal candidate is someone who thrives in a fast-paced, collaborative environment, has a passion for pushing the boundaries of 3D design, and is excited about the future of immersive media.'
    },
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

  const [filteredVacancies, setFilteredVacancies] = useState(allVacancies);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState(null);


  const handleVacancyClick = (vacancy) => {
    setSelectedVacancy(vacancy);
  };

  const handleCloseModal = () => {
    setSelectedVacancy(null);
  };

  const handleSearch = (searchTerm) => {
    const results = allVacancies.filter(vacancy =>
      vacancy.jobTitle.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setFilteredVacancies(results);
    setIsSearching(true);
  };

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
			<SearchBar nameSort="Sort vacancies" onSearchChange={handleSearch}/>

			<main className='main'>
				<div className="container container--flex">
				<aside className="aside">
            <Filter sections={filterData}/>
          </aside>
          <section className="section">
            <p className="results-count">{`${isSearching ? filteredVacancies.length : allVacancies.length} results`}</p>
          {isSearching && filteredVacancies.length === 0 ? (
              <p>No vacancies found for your search.</p>
            ) : (
              <VacanciesList vacancies={isSearching ? filteredVacancies : allVacancies} onVacancyClick={handleVacancyClick}/>
            )}
          </section>
				</div>
			</main>
			<Footer/> 

      {selectedVacancy && (
        <VacancyModal vacancy={selectedVacancy} onClose={handleCloseModal}/>
      )}
		</>
	)
}

export default VacanciesPage