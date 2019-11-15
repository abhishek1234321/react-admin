import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const Dashboard = () => {
  return (
    <Card>
      <CardHeader title="Welcome to the admin dashboard"></CardHeader>
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  );
}

export default Dashboard;