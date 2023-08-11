import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

const Toggle = (props) => {

  const setter = () => {
    if (props.mode === 'light') { props.setMode('dark') }
    else if (props.mode === 'dark') { props.setMode('light') }
  }

  return (
    <div>
      {props.mode === 'light' ?
        <Typography>Change Mode: <NightsStayIcon onClick={setter} /></Typography>
        :
        <Typography>Change Mode: <LightModeIcon onClick={setter} /></Typography>
      }
    </div>
  )
}

export default Toggle;