import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({value}) => {
    const history = useNavigate();
    const {id, name, price, discription} = value;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="image"
              height="300"
              image={value.imagePath}
              onClick={() => {history(`view-more/${id}`)}}
              sx={{cursor: 'pointer'}}
            />
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {price}
                </Typography>
              </div>
              <Typography variant="body2" color="text.secondary">
                {discription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" >View More</Button>
            </CardActions>
          </Card>
    );
}

export default SingleCard;