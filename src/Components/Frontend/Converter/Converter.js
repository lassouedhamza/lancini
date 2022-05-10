import React, { useEffect, useState } from 'react'
import {Button, FormControl, Paper, Select, TextField} from "@material-ui/core";
import "./style.css";
import  Axios  from 'axios';
import HeaderCreator from '../Header/HeaderCreator'
import Footer from '../Footer/Footer';

const Converter = () => {
    const [text1,settext1] = useState();
    const [text2,settext2] = useState();
    const[country,setcountry]=useState([]);
    const[country2,setcountry2]=useState([]);
    const[value1,setvalue1]=useState(1);
    const[value2,setvalue2]=useState(1);


    //website : https://fixer.io/
    useEffect(()=>{
        getdate();
    },[])
    async function getdate(){
        const result = await Axios.get("http://data.fixer.io/api/latest?access_key=3f989a36d15db11f4c5d63f4b9aca3fa");
        console.log(result.data);
        setcountry(result.data.rates);
        setcountry2(result.data.rates);
    }

    function convert(e){
        e.preventDefault();
        let num = (value2/value1)*text1;
        settext2(num);

    }

  return (
      <>
      <HeaderCreator></HeaderCreator>
    
    <div>

        <Paper className='paper'>
            <h3>Currency Converter</h3>
            <form onSubmit={convert}>
            <div>
                <TextField variant='outlined' value={text1 || ""} onChange={(e)=>settext1(e.target.value)} autoComplete='off'></TextField>
                <FormControl  className='dropdown' variant='outlined' onChange={(e)=>setvalue1(e.target.value)}>
                    <Select native>
                            {Object.keys(country).map((value,index)=>
                            <option key={index} value={country[value]}>{value}</option>)}

                        </Select>
                </FormControl>
            </div>
            <div>
                <TextField variant='outlined' value={text2 || ""} ></TextField>
                <FormControl  className='dropdown'  variant='outlined' onChange={(e)=>setvalue2(e.target.value)}>
                    <Select native>
                        {Object.keys(country).map((value,index)=>
                        <option key={index} value={country[value]}>{value}</option>)}

                    </Select>
                </FormControl>
            </div>
            <Button type='submit' variant='contained' className='button'> Conver</Button>
            </form>
        </Paper>
        </div>
        
    
    
    
    </>
  )
}

export default Converter