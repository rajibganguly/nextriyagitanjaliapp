import react, { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/blog`);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
  
    fetchData();
    
  }, [blogs]);

  return (
    <>
      <div className="row">
      {blogs ?       
        blogs.map((bl): any => (
          <div className="col-md-6 col-xs-12" key={bl.id}> 
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
              {bl.tag}
            </strong>
            <h3 className="mb-0">{bl.title}</h3>
            <div className="mb-1 text-body-secondary">{bl.date}</div>
            <p className="card-text mb-auto" style={{height: "72px",overflow: "hidden", textOverflow: "ellipsis"}}>
              {bl.brief}
            </p>
            {bl.internallink !== "" ? (
            <a
              href={bl.internallink}
              className="icon-link gap-1 icon-link-hover stretched-link"
            >
              Continue reading
            </a>
            ) : (
              <a
              href={bl.externallink}
              className="icon-link gap-1 icon-link-hover stretched-link"
            >
              Continue reading
            </a>
            )}
            </div>
            <div className="col-auto d-none d-lg-block">          
            <img src={bl.navImage} width={200} height={250} />            
          </div>
          </div>
          </div>
        ))      
        : 
        <span>No blogs available...</span>
      }
      </div>
    </>
  );
}

export default Blogs;
