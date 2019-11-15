import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

import PostFilter from './PostFilter';

const PostsList = (props) => {
  return (
    <List filters={<PostFilter />} {...props}>
      <Responsive
        small={
          <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date().toLocaleDateString()}
          />
        }
        medium={
          <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
          </Datagrid>
        }
      />
    </List>
  );
}

export default PostsList;
