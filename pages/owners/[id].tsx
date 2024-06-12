import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const OwnersPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ownersData, setOwnersData] = useState<any>(null);
  const [editStates, setEditStates] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/owners/${id}`);
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user)

        if (response.status === 200) {
          const data = await response.json();
          console.log(data, userObj)
          if(data && data[0]?.id == userObj?.id) {
            setEditStates(false)    
          } else {
            setEditStates(true)
          }
          
          setOwnersData(data);
        } else {
          console.error("Failed to fetch project data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    
    if (id) {
      fetchData();
    }

  }, [id]);

  const durationPeriod = (dates: string) => {
    const d = new Date();
    const year = d.getFullYear();
    const ownerPurchasedYear = dates.split("-")[2]
      ? dates.split("-")[2]
      : "2017";
    const duration = year - parseInt(ownerPurchasedYear) + " years";
    return duration;
  };

  const editProfile = (ref) => {
    alert(ref.id);
  };


  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          {ownersData ? (
            ownersData.map((ref, index) => (
              <section className="p-4 border border-warning my-1" key={index}>
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <h2>The Owner is</h2>
                    <h2 className="display-5 link-body-emphasis mb-1">
                      {ref.name}
                    </h2>
                    <span className="badge rounded-pill text-bg-primary mb-2">
                      <small>
                        Duration :{" "}
                        {durationPeriod(ref.personal[0].registrationdate)}
                      </small>
                    </span>
                    <br />
                    <button
                      className="btn btn-outline-dark"
                      onClick={editProfile}
                      disabled={editStates}
                    >
                      Edit
                    </button>
                    <hr />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <img
                      src={ref.image}
                      className="img-thumbnail"
                      alt={ref.name}
                    />
                    <span>{ref.projectdomain}</span>
                  </div>
                </div>
                <article className="blog-post">
                  <p>{ref?.client?.description}</p>

                  <section className="p-4">
                    <h2>Name: {ref.name}</h2>
                    <blockquote className="blockquote">
                      <p>
                        <strong>
                          Flat {ref.block} - {ref.floor}
                          {ref.flat}
                        </strong>
                      </p>
                    </blockquote>
                    <hr />
                    <h3 className="text-success">Details:</h3>
                    <hr />
                    <h5>Flat Details:</h5>
                    <ul>
                      {ref.personal.map((person) => (
                        <li key={person.totalsbua}>
                          <dl>
                            <dt>Date of registration:</dt>
                            <dd> {person.registrationdate}</dd>
                            <dt>Flat area:</dt>
                            <dd> {person.totalsbua} sq. feet</dd>
                            <dt>Parking:</dt>
                            <dd>
                              {" "}
                              {ref.parking.available ? (
                                <>
                                  <span>
                                    {ref.parking.status} | {ref.parking.aloted}
                                  </span>
                                </>
                              ) : (
                                <em>No</em>
                              )}
                            </dd>
                            <dt>Sell:</dt>
                            <dd> {person.wanttosell ? "Yes" : "No"}</dd>
                          </dl>
                        </li>
                      ))}
                    </ul>
                    <h5>About me:</h5>
                    <ol>
                      <li>Business of cloths and socks</li>
                      <li>Social worker since 2021</li>
                    </ol>
                    <p className="text-danger">
                      <small>
                        This zone is for public so all data you shared or plan
                        to share, please keep in mind.
                      </small>
                    </p>
                  </section>
                  <section
                    className="p-4 border border-primary my-1"
                    key={index}
                  >
                    <h5>General remarks</h5>
                    <p>{ref.remarks}</p>
                  </section>
                </article>
              </section>
            ))
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

export default OwnersPage;
