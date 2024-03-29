import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import react, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState<any>(null);
  const projectId = 1; // Replace with the desired project ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/projects`);
        if (response.ok) {
          const data = await response.json();
          setProjectData(data);
          console.log(projectData);
        } else {
          console.error("Failed to fetch project data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  const projectDetails = async(e) => {
    window.location.href =`/projects/${e.projectid}`
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            {projectData ? (
              projectData.map((project: any) => (
                <div key={project.projectid} className="col-md-6 col-xs-12">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary-emphasis">
                        {project.type}
                      </strong>
                      <h3 className="mb-0">{project.name}</h3>
                      <div className="mb-1 text-body-secondary">
                      {project.startDate} - {project.endDate}
                      </div>
                      <p className="card-text mb-auto">{project.projectdomain}</p>
                      <Button variant="outlined" onClick={() => projectDetails(project)}>Continue...</Button>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                      <img
                        style={{ width: "200px", height: "auto" }}
                        src={project.companylogo}
                        alt="bar"
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <span>No project data available</span>
            )}
          </div>
        </div>
        <div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default ProjectPage;
