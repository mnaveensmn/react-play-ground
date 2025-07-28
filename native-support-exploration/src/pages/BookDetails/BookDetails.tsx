import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Rating,
  Divider,
  Alert,
} from '@mui/material';
import {
  ShoppingCart,
  ArrowBack,
  CalendarToday,
  MenuBook,
  Person,
  Category,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../../data/booksData';
import { useCart } from '../../context/CartContext';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const book = booksData.find(b => b.id === id);

  if (!book) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">
          Book not found. Please check the URL or go back to the books list.
        </Alert>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/books')}
          sx={{ mt: 2 }}
        >
          Back to Books
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    if (book.inStock) {
      addToCart(book);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/books')}
        sx={{ mb: 3 }}
        variant="outlined"
      >
        Back to Books
      </Button>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Book Image */}
        <Box sx={{ flex: { xs: 1, md: 1 }, maxWidth: { md: 400 } }}>
          <Card sx={{ position: 'sticky', top: 20 }}>
            <CardMedia
              component="img"
              image={book.coverImage}
              alt={book.title}
              sx={{
                width: '100%',
                height: { xs: 400, md: 600 },
                objectFit: 'cover',
              }}
            />
          </Card>
        </Box>

        {/* Book Details */}
        <Box sx={{ flex: { xs: 1, md: 2 } }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {book.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Person sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="h5" color="text.secondary">
              by {book.author}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Rating value={book.rating} precision={0.1} readOnly />
            <Typography variant="body1" sx={{ ml: 1 }}>
              {book.rating} out of 5
            </Typography>
          </Box>

          <Chip
            label={book.genre}
            color="primary"
            variant="outlined"
            icon={<Category />}
            sx={{ mb: 3 }}
          />

          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>
            ${book.price.toFixed(2)}
          </Typography>

          {/* Stock Status */}
          {book.inStock ? (
            <Alert severity="success" sx={{ mb: 3 }}>
              ✅ In Stock - Ready to ship
            </Alert>
          ) : (
            <Alert severity="error" sx={{ mb: 3 }}>
              ❌ Out of Stock
            </Alert>
          )}

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingCart />}
            onClick={handleAddToCart}
            disabled={!book.inStock}
            sx={{ mb: 4, py: 1.5, px: 4 }}
          >
            Add to Cart
          </Button>

          <Divider sx={{ my: 3 }} />

          {/* Description */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            About This Book
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 4 }}>
            {book.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Book Details */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Book Details
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuBook sx={{ mr: 1, color: 'text.secondary' }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Pages
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {book.pages}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarToday sx={{ mr: 1, color: 'text.secondary' }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Published
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {formatDate(book.publishedDate)}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                ISBN
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {book.isbn}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Genre
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {book.genre}
              </Typography>
            </Box>
          </Box>

          {/* Similar Books Section */}
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            More from {book.author}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
            {booksData
              .filter(b => b.author === book.author && b.id !== book.id)
              .slice(0, 4)
              .map((similarBook) => (
                <Card
                  key={similarBook.id}
                  sx={{
                    minWidth: 150,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                  onClick={() => navigate(`/books/${similarBook.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={similarBook.coverImage}
                    alt={similarBook.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 'bold',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {similarBook.title}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                      ${similarBook.price.toFixed(2)}
                    </Typography>
                  </Box>
                </Card>
              ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BookDetails;
