import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

import PostFilter from './PostFilter';

const PostsList = (props) => {
  return (
    <List filters={<PostFilter />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <TextField source="body" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export default PostsList;
