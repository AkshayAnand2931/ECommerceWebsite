import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router';


export default function MediaCard(props) {

  const navigate = useNavigate();

  return (

    <Card sx={{ width: 240,margin:10}}>
      <a onClick={()=>navigate(`/product/${props.slug}`)}>
        <CardMedia
          component="img"
          height="240"
          image = {props.image}
        />
      </a>
      <h4 style={{textAlign:"left",paddingLeft:"0.2em"}}>{props.name}</h4>
      <p style={{textAlign:"left",paddingLeft:"0.5em"}}>{props.brand}</p>
      <p style={{textAlign:"left",paddingLeft:"0.5em"}}><b>Rs. {props.price}</b></p>
    </Card>
  );
}