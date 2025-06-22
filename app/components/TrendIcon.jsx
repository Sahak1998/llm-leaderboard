import React from 'react';

const TrendIcon = ({ trend }) => {
    switch (trend) {
      case 'up':
        return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L4 8H12L8 4Z" fill="#22C55E"/></svg>;
      case 'down':
        return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L12 8H4L8 12Z" fill="#EF4444"/></svg>;
      default:
        return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="7" width="8" height="2" fill="#9CA3AF"/></svg>;
    }
};

export default TrendIcon; 