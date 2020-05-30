import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {useMutation} from '@apollo/react-hooks';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import gql from 'graphql-tag';

const PICK_WINNER = gql`
    mutation pickWinner($dropId: Int!, $channel: String!) {
        pickWinner(dropId: $dropId, channel: $channel)
    }
`;

const Drop = (props) => {

  const [dropId, setDropId] = React.useState('')
  const [channel, setChannel] = React.useState('')
  const [open, setOpen] = React.useState(false)



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [pickWinner, {data}] = useMutation(PICK_WINNER);


  return (<div className='container'>
    <div className='row'>
      <TextField type="number"
                 label="Drop id" value={dropId} onChange={(e) => setDropId(e.target.value)}/>
    </div>
    <div className='row'>
      <TextField
        label="Channel" value={channel} onChange={(e) => setChannel(e.target.value)}/>
    </div>
    <div className='row'><Button variant="contained" color="primary" className='col-3 mt-5'
                                 onClick={async (e) => {
                                   try {
                                     e.preventDefault();
                                     await pickWinner({variables: {dropId: +dropId, channel}});
                                     setOpen(true);
                                   } catch (e) {
                                     console.error(e);
                                   }
                                 }}>Drop
      item
    </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="success">
          Dropped
        </Alert>
      </Snackbar>
    </div>
  </div>)
}


export default Drop
