import React, { useEffect, useRef } from 'react';
import styles from './projectModal.module.css';

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
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer} ref={modalRef}>
        <button className={styles.modalCloseButton} onClick={onClose}>
          <img src={closeButtonIcon} alt="close-button" />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalPublished}>
            Published {project.daysAgo} days ago
          </p>
        </div>

        <div className={styles.modalContent}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.modalImage}
          />

          <div className={styles.modalDetails}>
            <div className={styles.modalAuthor}>
              <img
                src={project.authorAvatar}
                alt={project.author}
                className={styles.authorAvatar}
              />
              <div>
                <h3 className={styles.authorName}>{project.author}</h3>
                <div className={styles.projectStats}>
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
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>

            <div className={styles.modalActions}>
              <div>
                <button className={styles.rateButton}>Rate the work</button>
                <button className={styles.shareButton}>Share</button>
              </div>
              <button className={styles.messageButton}>
                Send a message to the author
              </button>
            </div>

            <div className={styles.tags}>
              {project.tags.map(tag => (
                <button key={tag} className={styles.tag}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProjectModal;

