import React from 'react';
import { SimpleForm, DisabledInput, LongTextInput, Edit, ReferenceInput, TextInput, SelectInput } from 'react-admin';

const PostTitle = ({record}) => {
  return (
    <span>Post {record ? `"${record.title}"` : ''}</span>
  );
}

const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;