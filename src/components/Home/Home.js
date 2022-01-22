import  React,{useState} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FilterList from '@mui/icons-material/FilterList';
import DateRange from '@mui/icons-material/DateRange';
import Typography from '@mui/material/Typography';
import Tables from "../Table/Tables";
import { Link } from "react-router-dom";
import Modal4 from "../Modal/Modal4";
import Modal5 from "../Modal/Modal5";
import {Tabledata1} from "../../data/Data";
import Modal6 from "../Modal/Modal6";
import Modal7 from "../Modal/Modal7";
import Modal8 from "../Modal/Modal8";
import "./Home.css";
export default function CustomizedInputBase() {
  const [datatable,setDatatable] = useState(Tabledata1);
  console.log(datatable);
  return (
    <div>
     <div className="top" >
        <div className="top-textarea" style={{display:`flex`,justifyContent:`space-around`}}>
          <TextField
          id="filled-search input-with-icon-textfield"
          label="Variant Table"
          type="search"
          defaultValue="AVC-BASECMB-VXX"
          InputProps={{
            endAdornment: (
             <InputAdornment position="end">
               <SearchIcon style={{color:`black`}} />
             </InputAdornment>
            ),
          }}
          sx={{mx:"2rem"}}
          helperText="FORKLIFTER MODEL REST.XX"
          variant="filled"
        />
        <TextField
         id="filled-read-only-input input-with-icon-textfield"
         label="Date"
         defaultValue="12.10.2021"
         InputProps={{
           endAdornment: (
             <InputAdornment position="end">
               <DateRange style={{color:`black`}}/>
             </InputAdornment>
           ),
         }}
         sx={{mx:"2rem"}}
         helperText="Enter Date"
         variant="filled"
        />
        <TextField
         id="filled input-with-icon-textfield"
         label="Variant Table"
         defaultValue="Change Number"
         InputProps={{
           endAdornment: (
             <InputAdornment position="end">
               <SearchIcon style={{color:`black`}}/>
             </InputAdornment>
           ),
         }}
         sx={{mx:"2rem"}}
         helperText="Enter Change Record"
         variant="filled"
        />
      </div>
      <div  style={{display: `flex`,flexDirection: `row-reverse`}}>
        <Button variant="contained" size="small" color="primary"  sx={{ marginRight:'3rem',marginTop:'4rem',bgcolor:'chartreuse'}}>
          <Link to="/change" style={{textDecoration:`none`,color:`white`}}>
            CHANGE
          </Link>
        </Button>
        <Button variant="contained" size="small" color="primary"  sx={{ mx:'1rem',marginTop:'4rem',bgcolor:'chartreuse'}}>
          <Link to="/display" style={{textDecoration:`none`,color:`white`}}>
            DISPLAY
          </Link>
        </Button>
      </div>
     </div>
     <hr/>
     <div className="buttom">
     <Typography variant="h5" component="div" gutterBottom align="center">Recently Used</Typography>
      <div className="button-control" style={{display:`flex`, flexDirection: `row-reverse`,marginRight:`25px`}}>
        <Modal6 />
        <Modal5 data={datatable} />
        <Modal7 data4={datatable}/>
        <Modal8 data5={datatable}/>
        <Modal4 data2={datatable}/>
      </div>
      <Tables data3={datatable} />
     </div>
    </div>
  );
}