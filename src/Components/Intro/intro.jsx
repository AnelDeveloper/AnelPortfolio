import React from 'react'

import "../Intro/intro.css";

import prf from "../../img/prf.png"


const Intro = () => {
  return (
    <div className='i'>

      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello , My name is </h2>
          <h2 className='i-name'>Anel Kujovic </h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Video Editor</div>
              <div className="i-title-item">Content Creator</div>
            </div>

          </div>
          <p className="i-desc">

            I had various experiences working as a frontend developer, 6 months of intensive work in React.js and Redux toolkit. I have used more React.js without redux but I have experience in redux as well.
            I have worked on projects such as e-commerce. I also have experience in vue.js, material-ui, node.js, npm, git and in a lot of different things related to frontend.
            I have completed the React.js Course in 2021 and Web Development course with pure JavaScript(CSS and mySQL)
            When we talk about my position in the backend. I had experience in php with the CodeIgniter4 framework and mySQL,
            also filezilla as a server.. I did web applications such as web shops,
            also private applications for buying tickets through web applications for matches,
            the project was designed so that all fans can buy tickets online, pay and reserve their chair in advance via the web application,
            I also did a web shop , where the customer can buy the item and receive a voucher, qr codes could be used on this application for an additional discount on items.

          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              className='i-scroll'
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className='i-right'>
        <div className="i-bg"></div>
        <img src={prf} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;
