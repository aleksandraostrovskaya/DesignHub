import { useState } from "react"
import Banner from "../../сomponents/banner/Banner"
import Filter from "../../сomponents/filter/Filter"
import Header from "../../сomponents/header/Header"
import ProjectList from "../../сomponents/projectList/ProjectsList"
import Sort from "../../сomponents/sort/Sort"
import Footer from "../../сomponents/footer/Footer"
import ProjectModal from "../../сomponents/projectModal/ProjectModal"

import projectImgOne from '../../img/project_one.jpg'
import projectImgTwo from '../../img/project_two.jpg'
import authorAvatar from '../../img/authorPhoto.jpg'
import './homePage.css'


const HomePage = () => {

	const [isSortVisible, setIsSortVisible] = useState(false)
	const [selectedProject, setSelectedProject] = useState(null)

	const toggleSortVisibility = () => {
		setIsSortVisible((prevIsSortVisible) => !prevIsSortVisible);
	}
	
	const projects = [
		{
			id: 1,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			authorAvatar: authorAvatar,
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne,
			tags: ['# Landscapes', '# Foto', '# Landscapes', '# Architecture']
		},
		{
			id: 2,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			authorAvatar: authorAvatar,
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgTwo,
			tags: ['# Landscapes', '# Foto', '# Landscapes', '# Architecture']
		},
		{
			id: 3,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			authorAvatar: authorAvatar,
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne,
			tags: ['# Landscapes', '# Foto', '# Landscapes', '# Architecture']
		},
		{
			id: 4,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			authorAvatar: authorAvatar,
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne,
			tags: ['# Landscapes', '# Foto', '# Landscapes', '# Architecture']
		},
		{
			id: 5,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			authorAvatar: authorAvatar,
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne,
			tags: ['# Landscapes', '# Foto', '# Landscapes', '# Architecture']
		},
		{
			id: 6,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			authorAvatar: authorAvatar,
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgTwo,
			tags: ['# Landscapes', '# Foto', '# Landscapes', '# Architecture']
		},
		
	]

	const handleProjectClick = (project) => {
		setSelectedProject(project);
	}

	const handleCloseModal = () => {
		setSelectedProject(null);
	}
		
	return (
    <>
      <Header />
      <Banner />

      <main className="main">
        <div className="container container--flex">
          <aside className="aside">
            <Filter />
          </aside>

          <section className="section">
            <div className="section-top">
              <div className="tags">
                <button className="tags__tag"># Landscapes</button>
                <button className="tags__tag"># Foto</button>
                <button className="tags__tag"># Landscapes</button>
                <button className="tags__tag"># Architecture</button>
              </div>
              <div className="sort-controls">
                <button
                  className="sort-controls__button"
                  onClick={toggleSortVisibility}
                  id="sortButton"
                >
                  Sort Images
                </button>
                <Sort
                  isVisible={isSortVisible}
                  onClose={toggleSortVisibility}
                />
              </div>
            </div>

            <h2 className="title">New projects</h2>
            <ProjectList
              projects={projects}
              onProjectClick={handleProjectClick}
            />
            <h2 className="title" style={{ marginTop: "56px" }}>
              Top projects
            </h2>
            <ProjectList
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </section>
        </div>
      </main>
      <Footer />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default HomePage