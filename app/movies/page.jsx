'use client';
import React from "react";
import "./style.css";

function App() {
  return (
    <div id="top">
      {/* Header */}
      <header className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>

          <a href="/" className="logo">
            <img
              src="https://thinknepta.sirv.com/logo.svg"
              alt="Filmlane logo"
            />
          </a>

          <div className="header-actions">
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <div className="lang-wrapper">
              <label htmlFor="language">
                <ion-icon name="globe-outline"></ion-icon>
              </label>
              <select name="language" id="language">
                <option value="en">EN</option>
                <option value="au">AU</option>
                <option value="ar">AR</option>
                <option value="tu">TU</option>
              </select>
            </div>

            <button className="btn btn-primary">Sign in</button>
          </div>

          <button className="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="https://thinknepta.sirv.com/movie-8.png" className="logo">
                <img
                  src="https://thinknepta.sirv.com/movie-8.png"
                  alt="Filmlane logo"
                />
              </a>
              <button className="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              <li><a href="https://thinknepta.sirv.com/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg" className="navbar-link">Home</a></li>
              <li><a href="/" className="navbar-link">Movie</a></li>
              <li><a href="./error" className="navbar-link">Tv Show</a></li>
              <li><a href="./error" className="navbar-link">Web Series</a></li>
              <li><a href="./error" className="navbar-link">Pricing</a></li>
            </ul>

            <ul className="navbar-social-list">
              <li><a href="#" className="navbar-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="#" className="navbar-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#" className="navbar-social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
              <li><a href="#" className="navbar-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="#" className="navbar-social-link"><ion-icon name="logo-youtube"></ion-icon></a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <article>
          <section className="movie-detail">
            <div className="container">
              <figure className="movie-detail-banner">
                <img src="https://thinknepta.sirv.com/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg" alt="Free guy movie poster" />
                <button className="play-btn"><ion-icon name="play-circle-outline"></ion-icon></button>
              </figure>

              <div className="movie-detail-content">
                <p className="detail-subtitle">Season 1</p>
                <h1 className="h1 detail-title">How I Met Your <strong>Mother</strong></h1>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">TV-PG</div>
                    <div className="badge badge-outline">HD</div>
                  </div>
                  <div className="ganre-wrapper">
                    <a href="">Comedy,</a>
                    <a href="">Romance</a>
                  </div>
                  <div className="date-time">
                    <div>
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time dateTime="2021">2005</time>
                    </div>
                    <div>
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="PT115M">22 episodes, approx. 22 min each</time>
                    </div>
                  </div>
                </div>
                <p className="storyline">
                In this hilarious and heartfelt series, Ted Mosby recounts to his children the adventures and misadventures he experienced while searching for true love in New York City. Alongside his close-knit group of friends—Marshall, Lily, Barney, and Robin—Ted navigates the ups and downs of relationships, friendships, and life in the bustling city.
                </p>

                <div className="details-actions">
                  <button className="share" onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Check this out!',
                        text: 'I found this awesome content.',
                        url: 'https://bishalkhadka.info.np',
                      }).catch((error) => console.error('Error sharing:', error));
                    } else {
                      alert('Sharing is not supported in this browser.');
                    }
                  }}>
                    <ion-icon name="share-social"></ion-icon>
                    <span>Share</span>
                  </button>
                  <div className="title-wrapper">
                    <p className="title">Nepta Studio</p>
                    <p className="text">Streaming Channels</p>
                  </div>
                  <a href="./himym1" className="btn btn-primary">
                    <ion-icon name="play"></ion-icon>
                    <span>Watch Now</span>
                  </a>
                </div>
                <a href="./himym1" className="download-btn">
                  <span>Download</span>
                  <ion-icon name="download-outline"></ion-icon>
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand-wrapper">
              <a href="/" className="logo">
                <img src="https://thinknepta.sirv.com/Screenshot%202024-08-31%20014215.png" alt="Nepta Movie" />
              </a>
              <ul className="footer-list">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="./error" className="footer-link">Movie</a></li>
                <li><a href="./error" className="footer-link">TV Show</a></li>
                <li><a href="./error" className="footer-link">Web Series</a></li>
              </ul>
            </div>
            <div className="divider"></div>
            <p className="footer-text" style={{ color: 'white' }}>
        <span style={{ color: 'yellow' }}>Nepta Movies</span> &copy; 2024. All Rights Reserved.
      </p>
          </div>
        </div>
      </footer>
      {/* Go to Top Button */}
      <a href="#top" className="go-top" aria-label="Go to top">
        <ion-icon name="arrow-up-outline"></ion-icon>
      </a>
    </div>
  );
}

export default App;
