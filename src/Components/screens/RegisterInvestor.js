import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from 'react-select'


const RegisterInvestor = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  

  const [Typeinvestor,setTypeinvestor]=useState("");
  const [AmountcanInvest,setAmountcanInvest]=useState("");
  const [Minrange,setMinrange]=useState("");
  const [Maxrange,setMaxrange]=useState("");
  const [SweetSpot,setSweetSpot]=useState("");
  const [currentinvesting,setCurrentinvesting]=useState("");
  const [Position,setPosition]=useState("");
  const [Company,setCompany]=useState("");
  const [InvestmentOnRecord,setInvestmentOnRecord]=useState("");
  const [CurrentFundSize,setCurrentFundSize]=useState("");
  const [SectorInterest,setSectorInterest]=useState("");
  const [Legalname,setLegalname]=useState("");
  const [ScanCin,setScanCin]=useState("");
  const [NumCin,setNumCin]=useState("");
  const [picture,setPicture]=useState("");
  const [category,setCategory]=useState("");
  const [round,setRound]=useState("");
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
        "https://codeveloperslancini.herokuapp.com/auth/registerInvestor",
        {
          username, email, password, lastname,AmountcanInvest,category,round,picture,NumCin,ScanCin,Legalname,Typeinvestor,Minrange,Maxrange,SweetSpot,currentinvesting,Position,Company,InvestmentOnRecord,CurrentFundSize,SectorInterest
        },
        config
      );
  
      
        const res = await fetch("http://localhost:5002/MLPROJECT/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category,SweetSpot,InvestmentOnRecord,currentinvesting,round,Minrange,Maxrange
          }),
        });
      


      localStorage.setItem("authToken", data.token);
     
      history.push("/Home");
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
                      <label htmlFor="Typeinvestor">Type investor:</label>
                      <input
                        type="type"
                        required
                        id="typeinvestor"
                        autoComplete="true"
                        placeholder="Type investor"
                        value={Typeinvestor}   onChange={(e) =>   setTypeinvestor(e.target.value)}
                      />
                     
                      
                      
                    </div>
                  </div>
                
                    <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Amount">  Amount can invest:</label>
                      <input
                        type="AmountcanInvest"
                        required
                        id="AmountcanInvest"
                        autoComplete="true"
                        placeholder="Enter AmountcanInvest"
                        value={AmountcanInvest}
                        onChange={(e) => setAmountcanInvest(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Amount">    Category:</label>
                      <input
                        type="Category"
                        required
                        id="Category"
                        autoComplete="true"
                        placeholder="Enter category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                  <div class="input-group">
                    <label htmlFor="Amount">    Round:</label>
                    <input
                      type="Round"
                      required
                      id="Round"
                      autoComplete="true"
                      placeholder="Enter Round"
                      value={round}
                      onChange={(e) => setRound(e.target.value)}
                    />
                  </div>
                </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Minrange"> Minrange</label>
                      <input
                        type="Minrange"
                        required
                        id="Minrange"
                        autoComplete="true"
                        placeholder="Enter Minrange"
                        value={Minrange}
                        onChange={(e) => setMinrange(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Minrange"> Maxrange</label>
                      <input
                        type="Maxrange"
                        required
                        id="Maxrange"
                        autoComplete="true"
                        placeholder="Enter Maxrange"
                        value={Maxrange}
                        onChange={(e) => setMaxrange(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Minrange"> SweetSpot</label>
                      <input
                        type="SweetSpot"
                        required
                        id="SweetSpot"
                        autoComplete="true"
                        placeholder="Enter SweetSpot"
                        value={SweetSpot}
                        onChange={(e) => setSweetSpot(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                  <div class="input-group">
                    <label htmlFor="currentinvesting"> currentinvesting</label>
                    <input
                      type="currentinvesting"
                      required
                      id="currentinvesting"
                     
                      placeholder="Enter currentinvesting"
                      value={currentinvesting}
                      onChange={(e) => setCurrentinvesting(e.target.value)}
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
                <label htmlFor="InvestmentOnRecord"> InvestmentOnRecord</label>
                <input
                  type="InvestmentOnRecord"
                  required
                  id="InvestmentOnRecord"
                  autoComplete="true"
                  placeholder="Enter InvestmentOnRecord"
                  value={InvestmentOnRecord}
                  onChange={(e) => setInvestmentOnRecord(e.target.value)}
                />
              </div>
            </div>
            <div class="col-md-6">
            <div class="input-group">
              <label htmlFor="CurrentFundSize"> CurrentFundSize</label>
              <input
                type="CurrentFundSize"
                required
                id="CurrentFundSize"
                autoComplete="true"
                placeholder="Enter CurrentFundSize"
                value={CurrentFundSize}
                onChange={(e) => setCurrentFundSize(e.target.value)}
              />
            </div>
          </div>
          <div class="col-md-6">
          <div class="input-group">
          <label htmlFor="SectorInterest">Sector interest:</label>
          <input
                type="sector"
                required
                id="sector"
                autoComplete="true"
                placeholder="Enter sector"
                value={SectorInterest}   onChange={(e) =>   setSectorInterest(e.target.value)}
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
            <label htmlFor="LegalName"> LegalName</label>
            <input
              type="LegalName"
              required
              id="LegalName"
              autoComplete="true"
              placeholder="Enter LegalName"
              value={Legalname}
              onChange={(e) => setLegalname(e.target.value)}
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
                  <div class="col-md-12">
                    <div class="input-group contact__btn">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>

                      <span className="register-screen__subtext">
                        Already have an account? <Link to="/loginInvestor">Login</Link>
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

export default RegisterInvestor;