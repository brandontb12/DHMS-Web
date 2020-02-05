import PropTypes from 'prop-types'
import React from 'react'

const Tagline = props => (
  <header id="tagline">
    <div className="logo">
      <span className="iconspan fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1 data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">Dimension</h1>
        <p data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">
          A fully responsive site template designed by{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button>
            Intro
          </button>
        </li>
        <li>
          <button>
            Work
          </button>
        </li>
        <li>
          <button>
            About
          </button>
        </li>
        <li>
          <button>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Tagline