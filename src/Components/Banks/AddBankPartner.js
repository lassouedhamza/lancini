import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";
import Header from '../BackOffice/Header/Header';
import LeftSide from '../BackOffice/LeftSide/LeftSide';
const AddBankPartner = () => {

    const [bank_name , setBankName] = useState("");
    const [description , setDescriptiin] = useState("");
    const [offer , setOffer] = useState("");
    const [email , setEmail] = useState("");
    const [bankImage, setbankImage] = useState('')
    const bankingpartners = useSelector((state)=> state.bankingpartners);
    const [uploading, setUploading] = useState(false)
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('bankImage', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/banks/upload', formData, config)
    
          setbankImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { data } =  axios.post(
            "bankingpartners",
            {
                bank_name,description,offer,email,bankImage
            }
        );
        window.location = '/bankslist';
      }
  return (
    <div>

            <Header></Header>
            <LeftSide></LeftSide>
            <div>
     <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="card-header">
                      <h4>New Bank Partner</h4>
                    </div>
                    <div className="card-body">
                    <div className="form-group">
                        <label>Bank Name</label>
                        <input
                  className="my-2"
                  name="bank_name"
                  type="text"
                  placeholder="Bank Name"
                  value={bank_name}
                  onChange={e => setBankName(e.target.value)}
                />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                  className="my-2"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={e => setDescriptiin(e.target.value)}
                />
                      </div>
                      <div className="form-group">
                        <label>Offer</label>
                        <input
                  className="my-2"
                  name="offer"
                  type="text"
                  placeholder="Bank Name"
                  value={offer}
                  onChange={e => setOffer(e.target.value)}
                />
                      </div>
                     
                      <div className="form-group">
                        <label>Email</label>
                        <input
                  className="my-2"
                  name="email"
                  type="text"
                  placeholder="Bank Name"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                      </div>
                      <div>
                      <input type='text'
                placeholder='Enter image url'
                value={bankImage}
                onChange={(e) => setbankImage(e.target.value)}/>
                 <input type="file" id='image-file'
                label='Choose File'
                custom
                
                onChange={uploadFileHandler}/> 
                      </div>
                      </div>
                    <div className="card-footer text-right">
                      <input type="submit" value="Add New Partner" className="btn btn-primary"/>
                    </div>
                  </form>
                </div>
                
              </div>
        
            </div>
          </div>
        </section>
        
      </div>
      </div>
      </div>
  )
}

export default AddBankPartner