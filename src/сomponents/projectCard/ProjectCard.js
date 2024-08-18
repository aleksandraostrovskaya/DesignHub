import React, { useEffect, useRef, useState } from 'react';
import './projectCard.css';

import moreOptionsIcon from '../../img/icon/more_options.svg';
import likeIcon from '../../img/icon/like_card.svg'
import ViewIcon from '../../img/icon/view_card.svg'

const ProjectCard = ({ title, author, views, likes, daysAgo, image }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null)
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      } 
    }
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])


  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <button ref={buttonRef} className="more-options" onClick={toggleMenu}>
            <img src={moreOptionsIcon} alt="more options" />
          </button>
          {isMenuOpen && (
            <div ref={menuRef} className="context-menu">
              <ul>
                <li>Save</li>
                <li>Share</li>
                <li>Do not recommend work from this category</li>
                <li>Block the author</li>
                <li>Report</li>
              </ul>
            </div>
          )}
        </div>
        <p className="project-author">{author}</p>
        <div className="project-stats">
          <span>
            <img src={likeIcon} alt="likes" />
            {likes}
          </span>
          <span>
            <img src={ViewIcon} alt="views" />
            {views}
          </span>
          <span className="project-date">{daysAgo} days ago</span>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;
