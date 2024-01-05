import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contactPage">
      <h2>Contact Me</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <div className="contactButtons">
        <a href="mailto:zkreutzjans+biz@gmail.com" className="button email">
          <i className="fas fa-envelope"></i> Email Me
        </a>
        <a href="https://github.com/zkreutzjanz" target="_blank" rel="noopener noreferrer" className="button github">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/zach-kreutzjans/" target="_blank" rel="noopener noreferrer" className="button linkedin">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="https://twitter.com/zkreutzjans" target="_blank" rel="noopener noreferrer" className="button twitter">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
