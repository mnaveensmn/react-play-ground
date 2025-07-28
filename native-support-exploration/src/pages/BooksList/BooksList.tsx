import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Alert,
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';
import BookCard from '../../components/BookCard';
import { booksData } from '../../data/booksData';

const BooksList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('title');

  // Get unique genres
  const genres = useMemo(() => {
    const genreSet = new Set(booksData.map(book => book.genre));
    return Array.from(genreSet).sort();
  }, []);

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = booksData;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre) {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedGenre, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedGenre('');
    setSortBy('title');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Browse Books
      </Typography>

      {/* Filters Section */}
      <Box sx={{ mb: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FilterList sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Filters & Search
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            label="Search books..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
            sx={{ flex: 2 }}
          />
          
          <FormControl sx={{ flex: 1, minWidth: 120 }}>
            <InputLabel>Genre</InputLabel>
            <Select
              value={selectedGenre}
              label="Genre"
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <MenuItem value="">All Genres</MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControl sx={{ flex: 1, minWidth: 120 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="title">Title A-Z</MenuItem>
              <MenuItem value="author">Author A-Z</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
              <MenuItem value="rating">Highest Rated</MenuItem>
              <MenuItem value="newest">Newest First</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        {(searchQuery || selectedGenre) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Typography variant="body2" color="text.secondary">
              Active filters:
            </Typography>
            {searchQuery && (
              <Chip
                label={`Search: "${searchQuery}"`}
                onDelete={() => setSearchQuery('')}
                size="small"
                color="primary"
              />
            )}
            {selectedGenre && (
              <Chip
                label={`Genre: ${selectedGenre}`}
                onDelete={() => setSelectedGenre('')}
                size="small"
                color="primary"
              />
            )}
            <Chip
              label="Clear all"
              onClick={handleClearFilters}
              size="small"
              variant="outlined"
            />
          </Box>
        )}
      </Box>

      {/* Results */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" color="text.secondary">
          {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} found
        </Typography>
      </Box>

      {filteredBooks.length === 0 ? (
        <Alert severity="info" sx={{ mt: 4 }}>
          No books found matching your criteria. Try adjusting your filters or search terms.
        </Alert>
      ) : (
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)' 
          }, 
          gap: 3 
        }}>
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default BooksList;
