import React, { useState, useEffect } from 'react';

const SingleKidVid = (props) => {
  console.log('skv', props)

  return (
    <div >
    {props.title}
    {props.description}
    <img src={props.thumbnails.medium.url}></img>
  </div>
  )
}

export default SingleKidVid;