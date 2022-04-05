import React from 'react';

export const handleEnterDown = (
  e: React.KeyboardEvent,
  handleCallback: () => void
) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    e.stopPropagation();
    handleCallback()
  }
};

