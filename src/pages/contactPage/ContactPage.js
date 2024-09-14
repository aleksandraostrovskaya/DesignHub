import React from 'react';
import Header from '../../сomponents/header/Header';
import Banner from '../../сomponents/banner/Banner';
import Footer from '../../сomponents/footer/Footer';
import SearchContact from '../../сomponents/searchContact/SearchContact';
import bellIcon from '../../img/icon/bell.svg';
import './contactPage.css';




function ContactPage() {
  const postSearchContent = (
      <>
        <img src={bellIcon} alt="bell" />
        <button className="header__login">Login</button>
        <button className="header__register">Registration</button>
    </>
    );

  return (
    <>
      <Header postSearchContent={postSearchContent} />
      <Banner text="Contact Us"/>
      <SearchContact link="/support" text="Back"/>
      
      <div className="support-container">
        <section className="support-main">
          <h1>Submit a Request</h1>
          
          <div className="email">
            <h3>Your Email Address</h3>
            <input type='email' placeholder='curtis.weaver@example.com'/>
          </div>

          <div className="subject">
            <h3>Subject</h3>
            <input type='text'/>
          </div>

          <div className="question-support">
            <h3>What best describes the reason you're contacting us today?</h3>
            <button>I think I found a bug on the website</button>
          </div>

          <div className="description">
            <h3>Description</h3>
            <input type='text'/>
          </div>

          <div className="add-file">
            <h3>Add File</h3>
            <button><span>Add file</span>  or drop files here</button>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
