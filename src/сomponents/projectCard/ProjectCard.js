import React, { useEffect, useRef, useState } from 'react';
import './projectCard.css';
import { daysAgo } from '../vacancyCard/VacancyCard';

import moreOptionsIcon from '../../img/icon/more_options.svg';
import likeIcon from '../../img/icon/like_card.svg'
import ViewIcon from '../../img/icon/view_card.svg'

const ProjectCard = ({ title, author, views, likes, posteddate, image, authoravatar, tags, onProjectClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null)
  const buttonRef = useRef(null);

  const formattedDate = daysAgo(posteddate);

  const toggleMenu = (event) => {
    event.stopPropagation()
    setIsMenuOpen(prevState => !prevState);
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false)
    } 
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  const IMAGE_BASE_PATH = '/images/';

  return (
    <div className="project-card" onClick={() => onProjectClick?.({ title, author, views, likes, formattedDate, image, tags, authoravatar })}>
      <div className="project-image-container">
      {image.length > 0 ? (
          image.map((imgSrc, index) => (
            <img key={index} src={process.env.PUBLIC_URL + IMAGE_BASE_PATH + imgSrc} alt={`${title} image ${index + 1}`} loading="lazy" className="project-image" />
          ))
        ) : (
          <p>No images available</p>
        )}
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
          <span className="project-date">{formattedDate}</span>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;
