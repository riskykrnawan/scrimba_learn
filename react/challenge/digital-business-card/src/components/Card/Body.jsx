import React from 'react';

function Body() {
  return (
    <div className="card-body text-center">
      <h5 className="fs-header-1 fw-bold">Laura Smith</h5>
      <h6 className="fs-body-2 text-color-1 fw-normal">Frontend Developer</h6>
      <h6 className="fs-body-3 fs-normal">laurasmith.website</h6>
      <button className="btn-email fw-medium">
        <img src="./email.svg" /> <span className="ms-1">Email</span>
      </button>
      <div class="text-start">
        <h6 className="fs-body-1 fw-bold">About</h6>
        <p className="fs-body-3">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h6 className="fs-body-1 fw-bold">Interests</h6>
        <p className="fs-body-3">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>
  );
}

export default Body;