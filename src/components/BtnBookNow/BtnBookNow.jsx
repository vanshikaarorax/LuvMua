import React from 'react';
import { Link } from 'react-router-dom';
import './BtnBookNow.scss';

function BtnBookNow({ customText, customLink }) {
  return (
    <Link
      className="BtnBookNow"
      to={{ pathname: customLink ?? '/contact' }}
      target={customLink ? '_blank' : undefined}
    >
<<<<<<< HEAD
      <button className="btn">{customText ?? 'BOOK NOW'}</button>
=======
      <button className="btn" type="button">
        {customText ?? 'BOOK NOW'}
      </button>
>>>>>>> d1bd911 (Initial commit)
    </Link>
  );
}

export default BtnBookNow;
