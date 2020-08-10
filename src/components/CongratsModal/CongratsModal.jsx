import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setDone(true);
    props.clickedDone();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {done ? <Button disabled variant={props.variant} style={{
          background: 'green',
          color: 'white'
      }} size={props.size}>COMPLETED</Button> : <Button variant={props.variant} color={props.color} size={props.size} onClick={handleOpen}>
        {props.children}
      </Button>}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">You are Awesome !!!</h2>
            <p id="transition-modal-description">You achieved your goal within time.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
