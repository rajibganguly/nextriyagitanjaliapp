import Link from "next/link";
import React, { ReactNode } from "react";
import react, { useEffect, useState } from "react";

export interface records {
  id: number,
  image: string,
  txt: string,
  tag: string,
  route: string
}

function RiyaGit({props}) {
  // const [flatOwner, setFlatOwner] = useState([]);
  // const [asec, setAsec] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`/api/owners`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setFlatOwner(data);
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching project data:", error);
  //   }
  // };

  // const sortingNow = () => {
  //   let sortedOwner: any[];
  //   if(asec === true) {
  //     sortedOwner = [...flatOwner].sort((a, b) => a.name.localeCompare(b.name));
  //     setAsec(false)
  //   } else {
  //     sortedOwner = [...flatOwner].sort((a, b) => b.name.localeCompare(a.name));
  //     setAsec(true)
  //   }
    
  //   setFlatOwner(sortedOwner);
  // };

  // useEffect(() => {
  //   fetchData();
  //   console.log('+++', flatOwner)
  // }, []);

  // const idOwners = (bl) => {
  //   return `/owners/${bl.id}`;
  // };

  // const styleActionBox = {
  //   paddingBottom: "20px",
  // };

  // const addProfile = () => {
  //   alert('Add page')
  // }

  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="row">
        { props ? (
          props.map((records: records) => (
            <div className="col-xs-12 col-md-3 card" key={records?.id}>
              <div className="text-center m-3">
              <h5 className="card-title">
              {records.tag}
              </h5>
              <p className="card-text">
              {records.txt}
              </p>
              <img src={records.image} className="img-thumbnail" alt="..." />
              <div className="card-footer">
                <button onClick={handleClick} className="btn btn-light">
                  see more
                </button>
              </div>
              </div>
            </div>
          ))
        ) : (
          <span>No contents...</span>
        )}
      </div>
    </>
  );
}

export default RiyaGit;


//Backup
/**
 * <div className="row">
        <div style={styleActionBox}>
          <div className="d-flex justify-content-between align-content-center">
            <div>
            <span>
            There is total {flatOwner.length ? flatOwner.length : 0} owners.
          </span>
            </div>
            <div>
            <button className="btn btn-outline-success btn-sm ml-2" onClick={sortingNow}>          
            Sort
          </button>
            </div>
            <div>
            <button className="btn btn-outline-dark btn-sm ml-2" onClick={addProfile}>
            Add
          </button>
            </div>
          </div>
          
          
          
        </div>
        {flatOwner ? (
          flatOwner.map((bl): any => (
            <div className="col-md-12 col-xs-12" key={bl.id}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-2 d-flex flex-column position-static">
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-0">{bl.name}</h3>
                    <Link
                      href={idOwners(bl.id)}
                      as={`/owners/${bl.id}`}
                      className="icon-link gap-1 icon-link-hover stretched-link"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span>No Flat owners available...</span>
        )}
      </div>
 */
