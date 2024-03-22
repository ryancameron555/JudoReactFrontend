/** @format */

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import judoThrow from '../../assets/judoImages/judoThrow.jpg';
import { CardStyles } from './CardStyles';
import JudoExp from '../Text/JudoExp';
import JudoDialog from '../Dialog/JudoDialog';

export default function JudoCard() {
  return (
    <Card style={CardStyles.root}>
      <CardMedia
        style={CardStyles.media}
        image={judoThrow}
        title="Judo Throw"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          What is Judo?
        </Typography>
        <Typography variant="body2" color="text.primary">
          The word "judo" translates to "the gentle way," reflecting its
          principle of using an opponent's force and movements against them.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Read More</Button> */}
        <JudoDialog dialogText={<JudoExp />} />
      </CardActions>
    </Card>
  );
}
