import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here are some of the projects I have worked on and built!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Music Rater</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <a href = "https://music-rater.herokuapp.com/" target = "https://music-rater.herokuapp.com/">
                            Deployable Link
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>       
              </div>
            </div>
            {/* Delete after this */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">User Directory</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <a href = "https://boiling-scrubland-99517.herokuapp.com/" target = "https://boiling-scrubland-99517.herokuapp.com/">
                            Deployable Link
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Progressive Budget</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <a href = "https://dry-badlands-46972.herokuapp.com/" target = "https://dry-badlands-46972.herokuapp.com/">
                            Deployable Link
                            </a>
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Burger House</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <a href = "https://fast-reef-57872.herokuapp.com/" target = "https://fast-reef-57872.herokuapp.com/">
                            Deployable Link
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Traveling Website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <a href = "https://obscure-springs-07118.herokuapp.com/" target = "https://obscure-springs-07118.herokuapp.com/">
                            Deployable Link
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                      <h2 className="w-title">Fitness Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <a href = "https://jcush-fitness-tracker.herokuapp.com/" target = "https://jcush-fitness-tracker.herokuapp.com/">
                            Deployable Link
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
