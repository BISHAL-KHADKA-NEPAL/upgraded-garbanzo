import React from "react";

function FreeFireEsports() {
  return (
    <div style={{ paddingTop: "72px", paddingBottom: "0px" }}>
      {/* Head Metadata */}
      <meta charSet="UTF-8" />
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge, chrome=1" />
      <title>eFootball TiharChampionship</title>
      <meta name="keywords" content="eFootball" />
      <meta name="description" content="eFootball" />
      <link rel="canonical" href="" />
      <meta name="apple-mobile-web-app-title" content="eSports for eFootball" />
      <meta httpEquiv="Cache-Control" content="no-transform" />
      <meta httpEquiv="Cache-Control" content="no-siteapp" />
      <link
        rel="dns-prefetch"
        href="https://dl.dir.freefiremobile.com"
      />
     
     
      <link
        rel="stylesheet"
        href="https://dl.dir.freefiremobile.com/common/web_event/ff_esport_official/css/swiper.min.css"
      />
      <link
        rel="stylesheet"
        href="https://dl.dir.freefiremobile.com/common/web_event/esports_brand/css/common_23_1.css"
      />
      <link
        rel="stylesheet"
        href="https://dl.dir.freefiremobile.com/common/web_event/esports_brand/css/home.css"
      />

      {/* Content */}
      <section className="home">
        <article className="home-inner">
          <img
            className="home-one-banner"
            src="https://thinknepta.sirv.com/pixelcut-export.png"
            title="eFootball"
          />
          <section className="home-esports">
            <section className="home-intro">
              <div className="home-intro-content">
                <div className="ff-title">
                <h2 className="ff-main-title" style={{ textTransform: "none" }}>About eFootball Tihar Championship</h2>
                </div>
                <div className="ff-card home-intro-card">
                  <div className="home-intro-card-inner">
                    <img
                      className="home-intro-bg"
                      src="https://thinknepta.sirv.com/pixelcut-export.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="ff-mask home-intro-mask">
                    <div className="home-intro-inner">
                    <h2 className="home-intro-title font-bold" style={{ textTransform: "none" }}>
  eFootball Tihar Championship 2024
</h2>
<p className="home-intro-desc" style={{ textAlign: "justify", hyphens: "auto", wordSpacing: "0.1em" }}>
    We are thrilled to unveil the first edition of our flagship eFootball Tihar Championship, set to take place this November. The tournament will feature a unique format with Ribbonson stages, culminating in an exciting Grand Final. Stay tuned for more details and get ready for an unforgettable eFootball experience this Tihar!
</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* News Section */}
            <section className="home-news" style={{ paddingBottom: "0px", marginBottom: "0px" }}>
              <div className="home-filter home-news-bg"></div>
              <div className="home-news-module">
                <div className="ff-title">
                  <h2 className="ff-main-title">NEWS</h2>
                  <a className="ff-sub-title" href="./error">
                    MORE +
                  </a>
                </div>
                <ul className="home-news-list">
                  {/* Sample news item */}
                  <li className="news-item">
                    <div className="news-cover">
                      <a
                        href="./payment"
                        title="eFootball Tihar Championship"
                        rel="nofollow"
                      >
                        <img
                          className="news-cover-img"
                          src="https://thinknepta.sirv.com/pixelcut-export%20(1).png"
                          loading="lazy"
                          alt="eFootball Tihar Championship"
                        />
                      </a>
                    </div>
                    <div className="news-info">
                    <h2 className="news-title">
  <a href="./payment">
    Click To Register for Championship
  </a>
</h2>
<section className="news-desc">
  With an exciting tournament format featuring Ribbonson stages, teams from across the region will compete for glory and the ultimate title in this highly anticipated event.
</section>

                    </div>
                    <div className="news-time publish-time">
                      10/29/2024
                    </div>
                  </li>
                  {/* Add other news items here */}
                </ul>
              </div>
            </section>
          </section>
        </article>
      </section>
    </div>
  );
}

export default FreeFireEsports;
