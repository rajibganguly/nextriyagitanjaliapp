import Link from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from 'next/router';

export interface IRecords {
  id: number,
  image: string,
  txt: string,
  tag: string,
  route: string
}

function RiyaGit({props}) {
  const router = useRouter();

  const handleClick = (source: IRecords) => {
    router.push(source.route);
  }

  return (
    <>
      <div className="row">
        { props ? (
          props.map((records: IRecords) => (
            <div className="col-xs-12 col-md-3 card" key={records?.id}>
              <div className="text-center m-3">
              <h5 className="card-title">
              {records.tag}
              </h5>
              <p className="card-text text-muted fw-lighter fs-6">
              {records.txt}
              </p>
              <img src={records.image} className="img-thumbnail" alt="..." />
              <div className="card-footer">
                <button onClick={() => handleClick(records)} className="btn btn-light">
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

