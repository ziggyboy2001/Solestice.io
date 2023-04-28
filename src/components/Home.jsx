import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact, About } from "./";
function Home() {
  return (
    <div>
      <div className="contentWrapper">
        <div className="content">
          <h1 className="subtitle">Brent Purks</h1>
          <h3 className="title">Full-Stack Developer</h3>
          <p className="subtitle2">
            I am a talented and motivated Full-Stack Developer. Highly
            collaborative team member who values teaching and learning from
            peers. Consistently delivers exceptional and leading results.
          </p>
        </div>
      </div>

      <section>
        <div className="iconWrapper">
          <div className="icon">
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nextjs-original-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-express-original-wordmark"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-tailwindcss-original-wordmark colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-npm-original-wordmark colored"></i>
            <i className="devicon-git-plain colored"></i>
            <i className="devicon-github-original-wordmark"></i>
            <img
              className="stripe"
              src="/images/icons8-stripe-144.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <div className="portfolioCardWrapper">
          <div className="portfolioCard">
            <a href="https://glittering-faloodeh-58717e.netlify.app/itemsfeed/1"></a>
            <div>
              <h1>Nile Marketplace</h1>
              <p>A Full-Stack E-Commerce web app</p>
              <div className="cardScreenShotReactNile">
                <img
                  className="nileImage"
                  src="/images/landingPageNile.png"
                  alt=""
                  href="https://glittering-faloodeh-58717e.netlify.app/itemsfeed/1"
                />
              </div>
              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </div>
            </div>
          </div> */}
      {/* <div className="portfolioCard">
            <div>
              <h1>React Native Job Hunting App</h1>
              <p>An IOS/Android mobile app for developers to job hunt</p>
              <div className="cardScreenShot">
                <img
                  className="nativeImage"
                  src="/images/landingPage.png"
                  alt=""
                />
                <img
                  className="nativeImage"
                  src="/images/searchResult.png"
                  alt=""
                />
                <img
                  className="nativeImage"
                  src="/images/jobListing_About.png"
                  alt=""
                />
                <img
                  className="nativeImage"
                  src="/images/jobListing_Qualifications.png"
                  alt=""
                />
              </div>
              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
              </div>
            </div>
          </div> */}

      {/* <div className="portfolioCard">
            <div>
              <h1>React Fitness Tracker Web App</h1>
              <p>A Full-Stack Lifestyle web app</p>
              <div className="cardScreenShotReactNile">
                <img
                  className="nileImage"
                  src="/images/fitnessTrackerApp.png"
                  alt=""
                />
              </div>
              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </div>
            </div>
          </div> */}
      <div className="portfolioName">
        <h1>PORTFOLIO</h1>
        <p>
          Please hover a card to reveal a project, click on the Github icons to
          view code, and the screenshots to view deployed projects.
        </p>
      </div>
      <div className="cardsContainer">
        <div class="myCard">
          <div class="innerCard">
            <div class="backSide">
              <h1 class="title2">Nile Marketplace</h1>
              <p class="title2">A Full-Stack E-Commerce web app</p>
              <div className="cardScreenShotReactNile">
                <Link
                  to="https://glittering-faloodeh-58717e.netlify.app/"
                  target="_blank"
                >
                  <img
                    className="nileImage"
                    src="/images/landingPageNile.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gitWrapper">
                <div className="git">
                  <Link
                    to="https://github.com/Central-Mountain-Nile/Nile-frontend-app"
                    target="_blank"
                  >
                    <div className="gitHuB">
                      <i className="devicon-github-original-wordmark"></i>
                    </div>
                  </Link>
                  <p>FrontEnd</p>
                </div>
                <div className="git">
                  <div className="gitHuB">
                    <Link
                      to="https://github.com/Central-Mountain-Nile/Nile-Backend"
                      target="_blank"
                    >
                      <i className="devicon-github-original-wordmark"></i>
                    </Link>
                  </div>
                  <p>BackEnd</p>
                </div>
              </div>
              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <img
                  className="stripe2"
                  src="/images/icons8-stripe-144.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="myCard">
          <div class="innerCard">
            <div class="backSide">
              <h1 class="title2">React Native Job Hunting App</h1>
              <p class="title2">
                An IOS/Android mobile app for developers to job hunt
              </p>
              <div className="cardScreenShot">
                <Link
                  to="https://github.com/ziggyboy2001/job-hunter"
                  target="_blank"
                >
                  <img
                    className="nativeImage"
                    src="/images/landingPage.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://github.com/ziggyboy2001/job-hunter"
                  target="_blank"
                >
                  <img
                    className="nativeImage"
                    src="/images/searchResult.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://github.com/ziggyboy2001/job-hunter"
                  target="_blank"
                >
                  <img
                    className="nativeImage"
                    src="/images/jobListing_About.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://github.com/ziggyboy2001/job-hunter"
                  target="_blank"
                >
                  <img
                    className="nativeImage"
                    src="/images/jobListing_Qualifications.png"
                    alt=""
                  />
                </Link>
              </div>

              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="myCard">
          <div class="innerCard">
            <div class="backSide">
              <h1 class="title2">React Fitness Tracker Web App</h1>
              <p class="title2">A Full-Stack Lifestyle web app</p>
              <div className="cardScreenShotReactNile">
                <Link
                  to="https://fitnesstrac-kr2301.netlify.app"
                  target="_blank"
                >
                  <img
                    className="nileImage"
                    src="/images/fitnessTrackerApp.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gitWrapper">
                <div className="git">
                  <Link
                    to="https://github.com/TheHighnote/Fitness-Trac.kr-Client"
                    target="_blank"
                  >
                    <div className="gitHuB">
                      <i className="devicon-github-original-wordmark"></i>
                    </div>
                  </Link>
                  <p>FrontEnd</p>
                </div>
                <div className="git">
                  <div className="gitHuB">
                    {/* <Link to="" target="_blank"> */}
                    <i className="devicon-github-original-wordmark"></i>
                    {/* </Link> */}
                  </div>
                  <p>BackEnd</p>
                </div>
              </div>
              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="portfolioCard">
            <div>
              <h1>Nile Marketplace</h1>
              <p>A Full-Stack E-Commerce web app</p>
              <div className="cardScreenShot"></div>
              <div className="cardIcon">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </div>
            </div>
          </div> */}
      <About />
      <Contact />
    </div>
  );
}

export default Home;
