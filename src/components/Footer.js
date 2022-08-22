import React from 'react';

const Footer = () => {
  return (
    <footer className='center'>
            <span>Come Hang out with me! </span>  
            <span>
            <div className="social">
                <a href="https://twitter.com/riya_saxena__" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                {/* <a href="https://www.instagram.com/riya.saxena02/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a> */}
                <a href="https://www.linkedin.com/in/riya-saxena-11074917b/" target="_blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/riyasaxena02" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
            </div>
        </span>
        <span>Created By <a>Riya Saxena</a></span><br/>
        {/* <h4><span>Switch to <a href="https://riyaportfolio.herokuapp.com/">Single page version</a></span></h4> */}
    </footer>
  )
}

export default Footer
