import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  grow: {
    flexGrow: 1,
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px'
  }
};

const Header = () => {
  return (
    <AppBar position="static" gutterBottom>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <a href="/" color="inherit" style={styles.grow}>
          Evoluir - Intercâmbio
        </a>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
