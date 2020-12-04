import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
           "I am a 2020 graduate of DePauw University with a Bachelor of Arts degree in Economics.  While at DePauw I was a member of the Management Fellows Program, a prestigous business program at our small liberal arts school.  From January to August of 2019 I was the Business Development Intern at DoubleMap, a start-up located in Indianapolis, and worked directly under the owner and handled the due diligence process while the company was being acquired by Ford."
        },
        {
          id: "second-p-about",
          content:
            "After graduation I decided to enroll in the Northwestern Coding Bootcamp to pursue my passion of web development.  Since enrolling I have learned skills in: JavaScript, React, HTML, CSS, mySQL and MongoDB.  I look forward to continue growing those skills and learning more while pursuing a career as a Full Stack Developer."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
