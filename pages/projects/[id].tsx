

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [projectDetailsData, setProjectDetailsData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        console.log(id, response);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setProjectDetailsData(data[0]);
        } else {
          console.error('Failed to fetch project data');
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
        {projectDetailsData ? (
          <article className="blog-post">
          <h2 className="display-5 link-body-emphasis mb-1">{projectDetailsData.name}</h2>
          <span className="badge rounded-pill text-bg-primary mb-2">
          <small>Duration : {projectDetailsData.startdate} | {projectDetailsData.enddate}</small>
          </span>          
          <figure>
            <img src={projectDetailsData.client.clientlogo} className="img-thumbnail" alt={projectDetailsData.name} />
            <figcaption>{projectDetailsData.projectdomain}</figcaption>
          </figure>  
          <p>{projectDetailsData.client.description}</p>

          <section className=" p-4 border border-primary">            
          <h2>Name: {projectDetailsData.name}</h2>          
          <blockquote className="blockquote">
            <p><strong>Roles and Responsibilities:</strong> {projectDetailsData.softwaretools}</p>
          </blockquote>          
          <h3>Example lists</h3>
          <p><strong>Software/Tools:</strong> {projectDetailsData.softwaretools}</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>And this is an ordered list:</p>
          <ol>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ol>
          <p>And this is a definition list:</p>          
          </section>
          <div>
          {projectDetailsData.reference.map((ref, index) => (
              <section className=" p-4 border border-primary my-1" key={index}>
                <h2>{ref.title}</h2>
                <img src={ref.screenshot} className="img-thumbnail" alt={ref.altertext} />
                <p>Details: {ref.details}</p>
                <h3>Comments</h3>
                <pre><code>{ref.comments}</code></pre>
              </section>
            ))}
          </div>
        </article>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;




