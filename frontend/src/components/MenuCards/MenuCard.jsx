import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../../contexts/AuthContext';

export const MenuCard = ({ id, name, description, category, price, images }) => {
  const { user, basket, addBasket, deleteBasket } = useAuth();
  const isInBasket = () => {
    return basket.some(item => item.id === id);
  };
  const handleBasket = async () => {
    if (user) {
      if(!isInBasket()){
        addBasket({
          id: id,
          name: name,
          description: description,
          category: category,
          price: price,
          images: images
        });
      }else{
        deleteBasket({
          id: id,
          name: name,
          description: description,
          category: category,
          price: price,
          images: images
        })
      }
      
    }
  };

  

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image={images}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          Category: {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          component={Link}
          to={`/product-detail/${id}`}
        >
          View Details
        </Button>
        <Button
          size="small"
          style={{ backgroundColor: isInBasket() ? 'red' : '' }}
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={handleBasket}
        >
          Sepete Ekle
        </Button>
        <div style={{ marginLeft: 'auto' }}>
          <Button size="small" color="primary" startIcon={<RemoveIcon />}></Button>
          <Button size="small" color="primary">1</Button>
          <Button size="small" color="primary" startIcon={<AddIcon />}></Button>
        </div>
      </CardActions>
    </Card>
  );
};