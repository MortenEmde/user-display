import React from 'react';
import EditForm from '../components/EditForm';
import Header from '../components/Header';

const Edit = (props: any) => {
  return (
    <div>
      <Header title={`Edit details for user number-${props.location.state.id}`}/>
      <EditForm userInfo={props.location.state}/>
    </div>
  );
};

export default Edit;
