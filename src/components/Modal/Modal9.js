import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import FilterList from '@mui/icons-material/FilterList';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Table4 from "../Table/Table4"; 



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};
export default function Modal7(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = props.data3.slice().sort((a, b) => (a.id < b.id) ? 1 : -1);
  return (
    <div>
      <Stack direction="row" spacing={1} onClick={handleOpen}>
            <Button >
            <FilterList style={{color:`black`}}/>
            </Button>
        </Stack>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                      <MenuIcon />
                   </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                    Sort
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
         </Box>
        <Typography variant="h6" component="div" gutterBottom sx={{marginLeft:'7%'}}>
        Descending Sort
        </Typography>
        <Table4 data={data} />
       
    <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
        <Button variant="contained" size="small" color="primary" onClick={handleClose}  sx={{mx:'1rem',height:'30px' ,bgcolor:'chartreuse'}}>
           CANCEL
         </Button>
      </div>
        </Box>
         
    </Modal>
  </div>
    );
}