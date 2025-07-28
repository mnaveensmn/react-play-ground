import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
  Container,
  Chip,
  Alert,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box textAlign="center" py={8}>
          <Typography variant="h4" gutterBottom color="text.secondary">
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Start shopping to add books to your cart!
          </Typography>
          <Button variant="contained" href="/books">
            Browse Books
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Shopping Cart
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ flex: { xs: 1, md: 2 } }}>
          {state.items.map((item) => (
            <Card key={item.book.id} sx={{ mb: 2, p: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center' }}>
                <Box sx={{ flexShrink: 0, width: { xs: '100%', sm: 150 } }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={item.book.coverImage}
                    alt={item.book.title}
                    sx={{ objectFit: 'cover', borderRadius: 1, width: '100%' }}
                  />
                </Box>
                
                <Box sx={{ flex: 1 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {item.book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      by {item.book.author}
                    </Typography>
                    <Chip label={item.book.genre} size="small" color="primary" variant="outlined" />
                    <Typography variant="h6" color="primary" sx={{ mt: 1, fontWeight: 'bold' }}>
                      ${item.book.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, minWidth: 120 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="h6" sx={{ minWidth: '30px', textAlign: 'center' }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Subtotal: ${(item.book.price * item.quantity).toFixed(2)}
                  </Typography>
                  
                  <IconButton
                    color="error"
                    onClick={() => removeFromCart(item.book.id)}
                    size="small"
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          ))}
          
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" color="error" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button variant="outlined" href="/books">
              Continue Shopping
            </Button>
          </Box>
        </Box>
        
        <Box sx={{ flex: { xs: 1, md: 1 }, maxWidth: { md: 400 } }}>
          <Card sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Order Summary
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Items ({state.totalItems})</Typography>
                <Typography>${state.totalPrice.toFixed(2)}</Typography>
              </Box>
              
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Shipping</Typography>
                <Typography>Free</Typography>
              </Box>
              
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Tax</Typography>
                <Typography>${(state.totalPrice * 0.08).toFixed(2)}</Typography>
              </Box>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box display="flex" justifyContent="space-between" mb={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Total
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="primary">
                ${(state.totalPrice + state.totalPrice * 0.08).toFixed(2)}
              </Typography>
            </Box>
            
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Proceed to Checkout
            </Button>
            
            <Alert severity="info" sx={{ mt: 2 }}>
              Free shipping on orders over $25!
            </Alert>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
