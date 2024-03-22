/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RyanImage from '../../assets/judoImages/ryanjudo.jpg';
import { CardStyles } from './CardStyles';

export default function MediaCard() {
  return (
    <Card sx={CardStyles.root}>
      <CardMedia sx={CardStyles.media} image={RyanImage} title="Jamie Hopson" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sensei Jamie Hopson
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Head Coach
        </Typography>
      </CardContent>
    </Card>
  );
}
