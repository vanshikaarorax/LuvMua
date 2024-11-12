import React from 'react';
<<<<<<< HEAD
import {useDispatch} from 'react-redux';
import './BtnLogout.scss';

function BtnLogout() {

  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch({ type:"UPDATE_TOKEN_DATA", newToken: "" })
  }

  return (
    <button className="BtnLogout btn" onClick={logOut}>Log out</button>
=======

import './BtnLogout.scss';

function BtnLogout() {
  return (
    <div>Logout</div>
>>>>>>> d1bd911 (Initial commit)
  );
}

export default BtnLogout;
