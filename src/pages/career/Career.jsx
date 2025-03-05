import { useState, useEffect } from "react";

import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";
import { useLocation } from "react-router";

const Career = () => {
  const { pathname } = useLocation();
  const [jobs, setJobs] = useState([
    // { id: 1, title: "Frontend Developer", description: "React, JavaScript, and UI/UX experience required.", apply_link: "#" },
    // { id: 2, title: "Backend Developer", description: "Django/FastAPI, PostgreSQL, and REST API experience required.", apply_link: "#" },
  ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <PageRouteBanner PageName="Career" />
      <div className="container py-5">
        <h2 className="text-center mb-4">Join Our Team</h2>
        <p className="text-center mb-5">
          Explore exciting career opportunities with us. Apply now and be a part
          of our growing team!
        </p>

        <div className="row">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="col-md-6 mb-4">
                <div className="card shadow-lg rounded">
                  <div className="card-body">
                    <h4 className="card-title">{job.title}</h4>
                    <p className="card-text">{job.description}</p>
                    <a
                      href={job.apply_link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">
                No job openings available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Career;
