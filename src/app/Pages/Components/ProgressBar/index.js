import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ value }) {
	const progressBarStyle = {
		width: `${value}%`,
	}
  return (
    <div className="progress-container">
      <div className="progress-bar" style={progressBarStyle}></div>
    </div>
  );
}
