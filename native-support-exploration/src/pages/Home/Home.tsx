import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
} from '@mui/material';
import { ShoppingCart, ArrowForward, Book, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { booksData } from '../../data/booksData';

const Home: React.FC = () => {
  // Get featured books (highest rated books)
  const featuredBooks = booksData
    .filter(book => book.rating >= 4.5)
    .slice(0, 4);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Welcome to BookStore
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Discover your next favorite book from our carefully curated collection
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/books"
              startIcon={<Book />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              Browse All Books
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Star />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Featured Collection
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Why Choose Our BookStore?
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8 }}>
          <Card sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <Book sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Curated Collection
            </Typography>
            <Typography color="text.secondary">
              Hand-picked books from various genres to satisfy every reader's taste
            </Typography>
          </Card>
          
          <Card sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <ShoppingCart sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Easy Shopping
            </Typography>
            <Typography color="text.secondary">
              Simple and intuitive shopping experience with secure checkout
            </Typography>
          </Card>
          
          <Card sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <Star sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quality Guarantee
            </Typography>
            <Typography color="text.secondary">
              All books are carefully reviewed and rated by our community
            </Typography>
          </Card>
        </Box>

        {/* Featured Books Section */}
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Featured Books
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3, mb: 6 }}>
          {featuredBooks.map((book) => (
            <Card
              key={book.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={book.coverImage}
                alt={book.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  by {book.author}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={book.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="caption" sx={{ ml: 1 }}>
                    ({book.rating})
                  </Typography>
                </Box>
                <Chip label={book.genre} size="small" color="primary" variant="outlined" />
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ mt: 2, fontWeight: 'bold' }}
                >
                  ${book.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        
        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/books"
            endIcon={<ArrowForward />}
          >
            View All Books
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
