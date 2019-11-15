import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Components/Dashboard';
import UsersList from './Components/UsersList';
import PostsList from './Components/PostsList';
import PostCreate from './Components/PostCreate';
import PostEdit from './Components/PostEdit';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostsList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UsersList} icon={UserIcon} />
  </Admin>
);

export default App;
