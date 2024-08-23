import React, { useEffect, useRef } from 'react';
import './projectModal.css';

import likeIcon from '../../img/icon/like_card.svg'
import viewIcon from '../../img/icon/view_card.svg'
import closeButtonIcon from '../../img/icon/close-btn.svg'

const ProjectModal = ({ project, onClose }) => {

  const modalRef = useRef(null)

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    
  }, [onClose])


  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close-button" onClick={onClose}>
          <img src={closeButtonIcon} alt="close-button" />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-published">
            Published {project.daysAgo} days ago
          </p>
        </div>

        <div className="modal-content">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />

          <div className="modal-details">
            <div className="modal-author">
              <img
                src={project.authorAvatar}
                alt={project.author}
                className="author-avatar"
              />
              <div>
                <h3 className="author-name">{project.author}</h3>
                <div className="project-stats">
                  <span>
                    <img src={likeIcon} alt="likes" />
                    {project.likes}
                  </span>
                  <span>
                    <img src={viewIcon} alt="views" />
                    {project.views}
                  </span>
                </div>
              </div>
              <button className="subscribe-button">Subscribe</button>
            </div>

            <div className="modal-actions">
              <div>
                <button className="rate-button">Rate the work</button>
                <button className="share-button">Share</button>
              </div>
              <button className="message-button">
                Send a message to the author
              </button>
            </div>

            <div className="tags">
              {project.tags.map(tag => (
                <button className="tags__tag">{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProjectModal;
