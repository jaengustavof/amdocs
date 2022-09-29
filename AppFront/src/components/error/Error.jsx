import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Context from '../../context';
import { useContext, useEffect } from 'react';

const Error =() => {
  const app_context = useContext(Context);
  const { errorType} = app_context;
  return (
    <Alert key={'danger'} variant={'danger'} className="w-100">
      {errorType.message}
    </Alert>
  );
}

export default Error