import { useEffect, useState } from "react";
import Banner from "../../сomponents/banner/Banner";
import Filter from "../../сomponents/filter/Filter";
import Header from "../../сomponents/header/Header";
import ProjectList from "../../сomponents/projectList/ProjectsList";
import Sort from "../../сomponents/sort/Sort";
import Footer from "../../сomponents/footer/Footer";
import ProjectModal from "../../сomponents/projectModal/ProjectModal";

import './homePage.css';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState({
    "By content type": [],
    "Orientation": [],
    "By size": [],
    "By color scheme": [],
    "By popularity": [],
  });
  const [sortOption, setSortOption] = useState({
    date: '',
    alphabet: '',
    popularity: '',
  });

  const fetchProjects = async () => {
    try {
      const response = await fetch('/projects.json');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects()
  }, []);


  const filterData = [
    {
      title: "By content type",
      items: ["Photographs", "Video", "Vector", "Drawings", "3D"],
    },
    {
      title: "Orientation",
      items: ["Horizontal", "Vertical"],
    },
    {
      title: "By size",
      items: ["Small", "Medium", "Large"],
    },
    {
      title: "By color scheme",
      items: ["Specific color", "Color"],
    },
    {
      title: "By popularity",
      items: ["Most viewed", "Most commented", "Most liked"],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentFilter = prevFilters[filterType];
      const newFilter = currentFilter.includes(value)
        ? currentFilter.filter(item => item !== value)
        : [...currentFilter, value];

      return {
        ...prevFilters,
        [filterType]: newFilter,
      };
    });
  };

  const handleClearFilters = () => {
    setFilters({
      "By content type": [],
      "Orientation": [],
      "By size": [],
      "By color scheme": [],
      "By popularity": [],
    });
  };

  const filteredProjects = projects.filter((project) => {
    return (
      (filters["By content type"].length === 0 || filters["By content type"].includes(project.contenttype)) &&
      (filters["Orientation"].length === 0 || filters["Orientation"].includes(project.orientation)) &&
      (filters["By size"].length === 0 || filters["By size"].includes(project.size)) &&
      (filters["By color scheme"].length === 0 || filters["By color scheme"].includes(project.colorscheme)) &&
      (filters["By popularity"].length === 0 || filters["By popularity"].includes(project.popularity))
    );
  });

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption.date) {
      const dateA = new Date(a.posteddate);
      const dateB = new Date(b.posteddate);
      return sortOption.date === 'asc' ? dateA - dateB : dateB - dateA;
    }

    if (sortOption.alphabet) {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortOption.alphabet === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    }

    if (sortOption.popularity) {
      if (sortOption.popularity === 'likes') {
        return b.likes - a.likes;
      } else if (sortOption.popularity === 'views') {
        return b.views - a.views;
      }
    }

    return 0;
  });

  const newProjects = sortedProjects.filter(project => project.category === 'new');
  const topProjects = sortedProjects.filter(project => project.category === 'top');


  return (
    <>
      <Header/>
      <Banner text="You are capable of amazing things"/>

      <main className="main">
        <div className="container container--flex">
          <aside className="aside">
            <Filter 
              sections={filterData} 
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              filters={filters}
            />
          </aside>

          <section className="section">
            <div className="section-top">
              <div className="tags">
                <button className="tags__tag"># Landscapes</button>
                <button className="tags__tag"># Foto</button>
                <button className="tags__tag"># Landscapes</button>
                <button className="tags__tag"># Architecture</button>
              </div>
              <Sort name="Sort Images" onSortChange={handleSortChange}/>
            </div>

            <h2 className="title">New projects</h2>
            <ProjectList
              projects={newProjects}
              onProjectClick={handleProjectClick}
            />
            <h2 className="title" style={{ marginTop: "56px" }}>
              Top projects
            </h2>
            <ProjectList
              projects={topProjects}
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
  );
};

export default HomePage;
