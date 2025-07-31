import { useState } from 'react';
import ContentRating from './components/ContentRating';
import './App.css';

function App() {
  const [movieRating, setMovieRating] = useState(0);
  const [bookRating, setBookRating] = useState(3);

  const handleMovieRating = (rating) => {
    setMovieRating(rating);
    console.log('Movie rated:', rating);
  };

  const handleBookRating = (rating) => {
    setBookRating(rating);
    console.log('Book rated:', rating);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌟 ContentRating Component Demo</h1>
        <p>Professional React Star Rating System</p>
      </header>

      <main className="demo-container">
        {/* Interactive Movie Rating */}
        <section className="demo-section">
          <h2>🎬 Rate this Movie</h2>
          <ContentRating
            maxRating={5}
            initialRating={movieRating}
            size="large"
            onRatingChange={handleMovieRating}
            showLabels={true}
          />
        </section>

        {/* Pre-rated Book (Readonly) */}
        <section className="demo-section">
          <h2>📚 Book Rating (Read-only)</h2>
          <ContentRating
            maxRating={5}
            initialRating={bookRating}
            size="medium"
            readonly={true}
            showLabels={true}
          />
        </section>

        {/* Custom 10-star Rating */}
        <section className="demo-section">
          <h2>⭐ Premium Rating (10 Stars)</h2>
          <ContentRating
            maxRating={10}
            initialRating={0}
            size="small"
            onRatingChange={(rating) => console.log('Premium rated:', rating)}
            showLabels={false}
          />
        </section>

        {/* Minimal Version */}
        <section className="demo-section">
          <h2>🎯 Minimal Rating</h2>
          <ContentRating
            maxRating={5}
            size="medium"
            showLabels={false}
          />
        </section>
      </main>

      <footer className="App-footer">
        <p>Built with ⚡ Vite + ⚛️ React</p>
        <p>Ready for production! 🚀</p>
      </footer>
    </div>
  );
}

export default App;
