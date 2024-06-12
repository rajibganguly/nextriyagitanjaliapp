import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState<{name:string,email:string,phone:string,comments:string}>({
    name: "",
    email: "",
    phone: "",
    comments: ""
  });

  async function postData(url = "", data = "") {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = () => {
    postData(`${process.env.BACKEND_URL}/sendEmail`, JSON.stringify(formData)).then((d) => {
      console.log(formData, d);
    })
  };

  
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 rounded-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1039681926836!2d88.41625772508361!3d22.761522579357525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89998d6c75e85%3A0x111e9e8fb3461f50!2sRIYA%20GITANJALI%2C%20Ruiya%2C%20West%20Bengal%20700121!5e0!3m2!1sen!2sin!4v1718197982583!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 } as React.CSSProperties}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Contact us</h2>
                <div className="addressForm">
                  <form>
                    <div className="form-group py-2">
                    <TextField
                      label="Name"
                      variant="outlined"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth={true}
                    />
                    </div>
                    <div className="form-group py-2">
                    <TextField
                      label="Email"
                      variant="outlined"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-readonly
                      fullWidth={true}
                    />                      
                    </div>
                    <div className="form-group py-2">
                    <TextField
                      label="Phone"
                      variant="outlined"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-readonly
                      fullWidth={true}
                    />                      
                    </div>
                    <div className="form-group py-2">
                    <TextField
                      label="comments"
                      variant="outlined"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      fullWidth={true}
                    />                      
                    </div>
                    <div className="form-group">
                    <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>
                      Submit
                    </Button>                      
                    </div>
                  </form>
                </div>
                <hr/>
                <div className="address2 mt-4">
                  <p>Address: RiyaGitanjali. Modibari, Kolkata - 700121</p>
                  <div>
                    <a href="https://wa.me/8217528181">
                      Connect to <strong>what`sApp</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <Footer />
      </div>
      </div>
    </>
  );
}

export default ContactPage;
