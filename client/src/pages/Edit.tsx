import React, { ReactElement } from 'react';
import EditForm from '../components/editForm/EditForm';
import Header from '../components/header/Header';
import { EditProps } from '../types';

const Edit = (props: EditProps): ReactElement => {
  const { location } = props;
  return (
    <div>
      <Header title={`Edit details for ${location.state.name.first} ${location.state.name.last}`} />
      <EditForm userInfo={location.state} />
    </div>
  );
};

export default Edit;
