import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  Rating,
} from '@mui/material';
import { ShoppingCart, Visibility } from '@mui/icons-material';
import { Book } from '../../types/Book';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (book.inStock) {
      addToCart(book);
    }
  };

  const handleViewDetails = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={book.coverImage}
        alt={book.title}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 'bold',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.2,
            minHeight: '2.4em',
          }}
        >
          {book.title}
        </Typography>
        
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1, fontWeight: 500 }}
        >
          by {book.author}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={book.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({book.rating})
          </Typography>
        </Box>
        
        <Chip
          label={book.genre}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mb: 1 }}
        />
        
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.4,
            minHeight: '4.2em',
          }}
        >
          {book.description}
        </Typography>
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            ${book.price.toFixed(2)}
          </Typography>
          
          {!book.inStock && (
            <Chip
              label="Out of Stock"
              color="error"
              size="small"
            />
          )}
        </Box>
      </CardContent>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Visibility />}
          onClick={handleViewDetails}
          sx={{ mr: 1 }}
        >
          View Details
        </Button>
        
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleAddToCart}
          disabled={!book.inStock}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
