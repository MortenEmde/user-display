import React, { ReactElement } from 'react';
import EditForm from '../components/EditForm';
import Header from '../components/Header';
import { EditProps } from '../types';

const Edit = (props: EditProps): ReactElement => {
  const { location } = props;
  return (
    <div>
      <Header title={`Edit details for User-${location.state.id}`} />
      <EditForm userInfo={location.state} />
    </div>
  );
};

export default Edit;
