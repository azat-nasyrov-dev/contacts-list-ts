import React from 'react';
import './AppBackdrop.css';

interface BackdropProps {
  show: boolean;
  onClick: any;
}

const AppBackdrop = ({ show, onClick }: BackdropProps) =>
  show ? <div className="AppBackdrop" onClick={onClick} /> : null;

export default AppBackdrop;
