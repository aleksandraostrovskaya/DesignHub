import React, { useState } from 'react';
import Header from '../../сomponents/header/Header';
import Banner from '../../сomponents/banner/Banner';
import Footer from '../../сomponents/footer/Footer';
import Filter from '../../сomponents/filter/Filter';
import MoreVert from '../../img/icon/more_vert.svg';
import Eye from '../../img/icon/Eye.svg';
import bellIcon from '../../img/icon/bell.svg';
import WebDisgn from '../../img/Web Design.jpg';
import AIDevelop from '../../img/AI Deleloment.jpg';
import VideoTutoria from '../../img/Video Tutoria.jpg';
import Webinar from '../../img/Webinar.jpg';
import Finances from '../../img/How to Improve.jpg';
import Fundamentals from '../../img/Fundamentals.jpg';
import Introduction from '../../img/Introduction.jpg';
import DigitalMarketing from '../../img/Digital Marketing.jpg';
import Overview from '../../img/Overview.jpg';

import './educationPage.css';

const filterData = [
  {
    title: 'By Category',
    items: ['Technologies', 'Design', 'Marketing', 'Finance & Business', 'Lifestyle & Travel', 'Sports & Fitness', 'Real Estate & Housing'],
  },
  {
    title: 'By Content Type',
    items: ['Text Articles', 'Videos', 'Podcasts', 'Case Studies', 'Slideshows', 'White Papers', 'Webinars'],
  },
];

const articles = [
  {
    img: WebDisgn,
    title: 'Web Design Basics for Beginners',
    description: 'Articles/ Design',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
  {
    img: AIDevelop,
    title: 'AI Development Predictions for 2025',
    description: 'Articles/ Design',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
  {
    img: Finances,
    title: 'How to Improve Personal Finances with Technology',
    description: 'Videos/ Finances',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
];

const videos = [
  {
    img: VideoTutoria,
    title: 'Video Tutorial on UX/UI Design Fundamentals',
    description: 'Videos/ Design',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
  {
    img: Webinar,
    title: 'Webinar: Strategies for a Successful Start in Marketing',
    description: 'Videos/ Design',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
  {
    img: Overview,
    title: 'Overview of New Health & Fitness Technologies',
    description: 'Videos/ Finances',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
];

const courses = [
  {
    img: Fundamentals,
    title: 'Fundamentals of UX/UI Design for Beginners',
    description: 'Learn the principles of user experience and\n interface design, and how to create user-\nfriendly and visually appealing interfaces.',
    courses: 'Courses',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
  {
    img: Introduction,
    title: 'Introduction to Artificial Intelligence and Machine Learning',
    description: 'Gain basic knowledge of AI and machine learning, including practical examples and\n applications.',
    courses: 'Courses',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
  {
    img: DigitalMarketing,
    title: 'Digital Marketing Strategies for Small Businesses',
    description: 'Discover how to effectively promote your\n business online using modern tools and digital\n marketing techniques.',
    courses: 'Courses',
    icon: Eye,
    amount: '660',
    days: '1 day ago',
    ancillary: MoreVert,
  },
];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

function EducationPage() {
  const [activeSection, setActiveSection] = useState('articles'); 

  const getResultsCount = () => {
    switch (activeSection) {
      case 'articles':
        return articles.length;
      case 'videos':
        return videos.length;
      case 'courses':
        return courses.length;
      default:
        return 0;
    }
  };

const getSectionContent = () => {
    const sectionData = {
      articles,
      videos,
      courses,
    }[activeSection];

    if (!sectionData) return <p>Please select a section to see content</p>;

    return sectionData.map((item, index) => (
      <div key={index} className="article-item">
        <img className="logo" src={item.img} alt={item.title} />
        <div className="title-and-icon">
          <h3>{truncateText(item.title, 38)}</h3> 
          <img className="ancillary-icon" src={item.ancillary} alt="More options" />
        </div>
        <p className="description">
          {item.description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        {item.courses && <p className="courses">{item.courses}</p>}
        <div className="article-info">
          <img src={item.icon} alt="views" />
          <span>{item.amount}</span>
          <span className="days">{item.days}</span>
        </div>
      </div>
    ));
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const postSearchContent = (
    <>
      <img src={bellIcon} alt="bell" />
      <button className="header__login">Login</button>
      <button className="header__register">Registration</button>
    </>
  );

  return (
    <div>
      <Header/>
      <div className="parent-container">
        <Banner text="You are capable of amazing things"/>
        <div className="filter-education">
          <button onClick={() => handleSectionClick('articles')}>Articles</button>
          <button onClick={() => handleSectionClick('videos')}>Videos</button>
          <button onClick={() => handleSectionClick('courses')}>Courses</button>
        </div>
      </div>

      <div className="search-education">
        <input type="search" placeholder="Search" />
        <button className="blue-search">Search</button>
        <button className="sort-search">Sort materials</button>
      </div>

      <div className="content-wrapper">
        <aside className="aside">
          <Filter sections={filterData} />
        </aside>
        <div className="results-count">
          <p>{getResultsCount()} results</p>
          <div className="articles-section">
            {getSectionContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EducationPage;