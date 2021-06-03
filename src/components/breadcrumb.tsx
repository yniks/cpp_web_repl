import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }),
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Dashboard
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <PeopleIcon className={classes.icon} />
        Users
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <LocalBarIcon className={classes.icon} />
        On Leave
      </Typography>
    </Breadcrumbs>
  );
}