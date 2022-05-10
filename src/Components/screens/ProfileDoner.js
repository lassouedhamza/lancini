import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import HeaderDoner from "../Frontend/Header/HeaderDoner";
import jwt_decode from 'jwt-decode';


const ProfileDoner = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [Amount, setAmount] = useState("");
  const [picture, setPicture] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [mounted, setMounted] = useState("");
  const [Userid, setUserId] = useState("");


  function  componentWillMount() {
    console.log(jwt_decode(sessionStorage.getItem('authToken')).id)
    let decode=jwt_decode(sessionStorage.getItem('authToken')).id;
    //console.log(localStorage.getItem('authToken'))
    setUserId(decode)
    console.log(Userid)
    axios.get('https://codeveloperslancini.herokuapp.com/auth/findDonerById/'+decode,{mode:'cors'}).then(
      (response) => {
        let data=response.data
         console.log(response.data)
         setUsername(data.username)
         setLastname(data.lastname)
         setEmail(data.email)
         setAmount(data.Amount)
         setPhone(data.phone)
         setPicture(data.picture)
  
      }
  );
  
    }
    if(!Userid){
      componentWillMount()
    
    }





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
      const { data } = await axios.put(
        "https://codeveloperslancini.herokuapp.com/auth/updateDoner/"+Userid,
        {
          username, email, password,lastname,Amount,picture,phone

        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/HomeDoner");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };


  return (
    <div>

    <HeaderDoner/>

    <section class="contact-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <div class="contact_one_left">
              <div class="block-title text-left">

              
                <h3>Update your profile</h3>
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
                      <label htmlFor="Amount">Amount:</label>
                      <input
                        type="amount"
                        required
                        id="amount"
                        autoComplete="true"
                        placeholder="Enter amount"
                        value={Amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="  Phone">Phone:</label>
                      <input
                        type="phone"
                        required
                        id="phone"
                        autoComplete="true"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="input-group">
                      <label htmlFor="Amount">Picture:</label>
                      <input
                        
                    onChange={(e) => postDetails(e.target.files[0])}
                        id="custom-file"
                        type="file"
                        label="Upload Profile Picture"
                        custom
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-group contact__btn">
                      <button type="submit" className="btn btn-primary">
                       Update
                      </button>

                    
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProfileDoner;