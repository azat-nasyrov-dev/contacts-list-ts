import React from 'react';
import AppBackdrop from '../AppBackdrop/AppBackdrop';
// import { Avatar } from '@material-ui/core';

const AppModal = (props: any) => {
  return (
    <>
      <AppBackdrop show={props.show} onClick={props.closed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div>{/* <Avatar /> */}</div>
      </div>
    </>
  );
};

export default AppModal;
