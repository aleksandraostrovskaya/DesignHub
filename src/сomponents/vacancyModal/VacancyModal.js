import React, { useEffect, useRef } from 'react';
import closeButtonIcon from '../../img/icon/close-btn.svg';

import styles from './vacancyModal.module.css';

const VacancyModal = ({ vacancy, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer} ref={modalRef}>
        <button className={styles.close} onClick={onClose}>
          <img src={closeButtonIcon} alt="close-button" />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{vacancy.jobTitle}</h2>
          <p>{vacancy.department}</p>
          <div className={styles.actions}>
            <button className={styles.submitBtn}>Submit Application</button>
            <button className={styles.saveBtn}>Save Task</button>
          </div>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.overview}>
            <h3>Job Overview:</h3>
            <p>{vacancy.jobOverview}</p>
          </div>

          <div className={styles.modalDetails}>
            <ul>
              <li className={styles.items}>
                Job type
                <div>{vacancy.jobType}</div> 
              </li>
              <li className={styles.items}>
                Job Location
                <div>{vacancy.jobLocation}</div> 
              </li>
              <li className={styles.items}>
                Job posted
                <div>{vacancy.jobPostedDate}</div> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default VacancyModal;

