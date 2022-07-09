import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '330px',
  },
  detailC: {
    width: '100%',
    height: '100%',
    background: '#0000005c',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imgC: {
    width: '130px',
    height: '130px'
  },
  textC: {
    color: 'white'
  },
  title: {
      marginTop: '15px',
      marginButtom: '10px',
      fontSize: '2rem',
  }
}));

const Header = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div className={classes.detailC}>
          <div className={classes.imgC}>
          </div>
          <div className={classes.textC}>
              <Typography  variant='h4' className={classes.title}>RAMANUJAN ACADEMY</Typography>
              <Typography variant='subtitle2'>GORESWAR ROAD, BAIHATA CHARIALI, KAMRUP (Assam)</Typography>
              <Typography variant='subtitle2'>Contact No: 9864044668, 7086630817</Typography>
              <Typography variant='subtitle2'>Email: ramanujanacademy@gmail.com</Typography>
              <Typography variant='subtitle2'>Website: ramanujanacademy.co.in</Typography>
          </div>
        </div>
      </div>
    );
}

export default Header