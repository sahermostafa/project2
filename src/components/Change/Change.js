import  React,{useState} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Tables1 from "../Table/Tables1";
import Table3 from "../Table/Table3";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {Tabledata2} from "../../data/Data";
import Modal2 from "../Modal/Modal2";
import Modals from "../Modal/Modals";
import Modal3 from "../Modal/Modal3";
import Modal6 from "../Modal/Modal6";
import Modal9 from "../Modal/Modal9";
import Modal10 from "../Modal/Modal10";
import Modal11 from "../Modal/Modal11";
import Modal12 from "../Modal/Modal12";
import Modal13 from "../Modal/Modal13";
import Modal14 from "../Modal/Modal14";
import "./Change.css";

function Change() {
  const [datatable,setDatatable] = useState(Tabledata2);
  return (
    <div>
     <div className="top1" style={{marginLeft:`0px`}}>
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
          helperText="FORKLIFTER MODEL REST.XX"
          variant="filled"
          sx={{marginLeft:'50px'}}
        />
      </div>
     <div className="buttom">
      <div className="button-control" style={{display:`flex`, flexDirection: `row-reverse`,marginRight:`25px`}}>
      <Modal6 />
       <Modals />
       <Modal9 data3={datatable}/>
       <Modal10 data4={datatable}/>
         <Modal3 data={datatable}/>
         <Modal11 data5={datatable}/>
         <Modal12/>
         <Modal2/>
         <Modal13 />
         <Modal14 />
      </div>
      <Table3 data2={datatable}/>
      <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
        <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem', bgcolor:'chartreuse'}}>
           CANCEL
         </Button>
         <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem' ,bgcolor:'chartreuse'}}>
            SAVE
         </Button>
      </div>
     </div>
    </div>
    
  );
}
export default Change;