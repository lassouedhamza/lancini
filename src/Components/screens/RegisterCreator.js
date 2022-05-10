import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from 'react-select'


const RegisterCreator = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  

  const [Type,setType]=useState("");

  const [Position,setPosition]=useState("");
  const [Company,setCompany]=useState("");
 
  const [Rib,setRib]=useState("");
  const[picture,setPicture]=useState("");
  const[phone,setPhone]=useState("");
  const[NumCin,setNumCin]=useState("");
  const[ScanCin,setScanCin]=useState("");
  const [SectorInterest,setSectorInterest]=useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPicture(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

 const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "auth/registerCreator",
        {
            username, email, password, lastname,Rib,Type,Position,SectorInterest,Company,picture,phone,NumCin,ScanCin
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/HomeCreator");
      window.location = '/loginCreator';
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    
  };


  
  return (



    <section class="contact-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <div class="contact_one_left">
              <div class="block-title text-left">


                <h3>Register</h3>
              </div>

            </div>
          </div>
          <div class="col-xl-7">
            <div class="contact-one__form__wrap">
              <form onSubmit={registerHandler} class="contact-one__form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="name">Username:</label>
                      <input
                        type="text"
                        required
                        id="name"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="name">Lastname:</label>
                      <input
                        type="text"
                        required
                        id="lastname"
                        placeholder="Enter lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        required
                        id="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        required
                        id="password"
                        autoComplete="true"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="confirmpassword">Confirm Password:</label>
                      <input
                        type="password"
                        required
                        id="confirmpassword"
                        autoComplete="true"
                        placeholder="Confirm password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                  <div class="input-group">
                    <label htmlFor="Picture">Picture:</label>
                    <input
                      
                  onChange={(e) => postDetails(e.target.files[0])}
                      id="custom-file"
                      type="file"
                      label="Upload Profile Picture"
                      custom
                    />
                  </div>
                </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Type">Type </label>
                      <input
                      type="type"
                      required
                      id="typeinvestor"
                      autoComplete="true"
                      placeholder="Type investor"
                      value={Type}   onChange={(e) =>   setType(e.target.value)}
                    />
                      
                      
                    </div>
                  </div>
                
               
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Minrange"> Rib</label>
                      <input
                        type="Rib"
                        required
                        id="Rib"
                        autoComplete="true"
                        placeholder="Enter Rib"
                        value={Rib}
                        onChange={(e) => setRib(e.target.value)}
                      />
                    </div>
                  </div>
                 
                  
                  
                <div class="col-md-6">
                  <div class="input-group">
                    <label htmlFor="Position"> Position</label>
                    <input
                      type="Position"
                      required
                      id="Position"
                      autoComplete="true"
                      placeholder="Enter Position"
                      value={Position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                <div class="input-group">
                  <label htmlFor="Company"> Company</label>
                  <input
                    type="Company"
                    required
                    id="Company"
                    autoComplete="true"
                    placeholder="Enter Company"
                    value={Company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-md-6">
              <div class="input-group">
                <label htmlFor="phone"> Phone</label>
                <input
                  type="phone"
                  required
                  id="phone"
                  autoComplete="true"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div class="col-md-6">
            <div class="input-group">
              <label htmlFor="NumCin"> NumCin</label>
              <input
                type="NumCin"
                required
                id="NumCin"
                autoComplete="true"
                placeholder="Enter NumCin"
                value={NumCin}
                onChange={(e) => setNumCin(e.target.value)}
              />
            </div>
          </div>
          <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="ScanCin">Scan CIN:</label>
                      <input
                        
                    onChange={(e) => postDetails(e.target.files[0])}
                        id="custom-file"
                        type="file"
                        label="Upload ScanCin"
                        custom
                      />
                    </div>
                  </div>
           
          <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="SectorInterest">SectorInterest:</label>
                      <input
                type="sector"
                required
                id="sector"
                autoComplete="true"
                placeholder="Enter Sector interest"
                value={SectorInterest}   onChange={(e) =>  setSectorInterest(e.target.value)}
              />
                     
                     
               
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="input-group contact__btn">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>

                      <span className="register-screen__subtext">
                        Already have an account? <Link to="/login">Login</Link>
                      </span>
                    </div>
                  </div>
                </div>
                
              
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default RegisterCreator;