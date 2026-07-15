import React from 'react';
import { Cake } from 'lucide-react';

export default function Loader({ text = "Whisking up happiness..." }) {
  return (
    <div className="loader-wrapper animate-fade-in" id="loader">
      <div className="loader-spinner"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
}
