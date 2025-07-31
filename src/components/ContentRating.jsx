import { useState } from 'react';
import './ContentRating.css';

const ContentRating = ({
  maxRating = 5,
  initialRating = 0,
  size = 'medium',
  readonly = false,
  onRatingChange = null,
  showLabels = true
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);

  // Rating labels for user experience
  const ratingLabels = {
    1: 'Poor',
    2: 'Fair',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent'
  };

  // Handle star click
  const handleStarClick = (starValue) => {
    if (readonly) return;

    setRating(starValue);
    if (onRatingChange) {
      onRatingChange(starValue);
    }
  };

  // Handle mouse enter on star
  const handleStarHover = (starValue) => {
    if (readonly) return;
    setHoveredRating(starValue);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (readonly) return;
    setHoveredRating(0);
  };

  // Determine which rating to display (hovered or actual)
  const displayRating = hoveredRating || rating;

  // Generate stars array
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= displayRating;
    const isHovered = hoveredRating > 0 && starValue <= hoveredRating;

    return (
      <button
        key={starValue}
        type="button"
        className={`star ${isFilled ? 'filled' : ''} ${isHovered ? 'hovered' : ''} ${size} ${readonly ? 'readonly' : ''}`}
        onClick={() => handleStarClick(starValue)}
        onMouseEnter={() => handleStarHover(starValue)}
        disabled={readonly}
        aria-label={`Rate ${starValue} out of ${maxRating} stars`}
      >
        <svg
          viewBox="0 0 24 24"
          fill={isFilled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      </button>
    );
  });

  return (
    <div className="content-rating" onMouseLeave={handleMouseLeave}>
      <div className="stars-container">
        {stars}
      </div>

      {showLabels && (
        <div className="rating-info">
          <span className="rating-value">
            {rating > 0 ? `${rating}/${maxRating}` : 'Not rated'}
          </span>
          {rating > 0 && ratingLabels[rating] && (
            <span className="rating-label">
              {ratingLabels[rating]}
            </span>
          )}
          {hoveredRating > 0 && ratingLabels[hoveredRating] && (
            <span className="rating-preview">
              Preview: {ratingLabels[hoveredRating]}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentRating;