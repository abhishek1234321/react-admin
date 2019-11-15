import React from 'react';
import { withStyles } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch'

const styles = {
  link: {
    textDecoration: 'none'
  },
  icon: {
    width: '.5em',
    paddingLeft: 2
  }
};

const CustomUrlField = ({record = {}, source, classes}) => {
  return (
    <a href={record[source]} target="_blank" className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
}

export default withStyles(styles)(CustomUrlField);