import React from 'react';
import { SimpleForm, LongTextInput, ReferenceInput, TextInput, SelectInput, Create } from 'react-admin';

const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

export default PostCreate;