import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="notfound-container animate-zoom-in" id="notfound-page">
      <div className="notfound-code">404</div>
      <h1 className="notfound-title">Cake Crumbs!</h1>
      <p className="notfound-desc">
        We searched all over the pantry, but we couldn't find the page you are looking for. It might have been devoured, or the recipe path changed.
      </p>
      <Link to="/" className="btn-primary" id="return-home-404">
        <RotateCcw size={16} style={{ marginRight: '8px' }} /> Return to the Kitchen
      </Link>
    </div>
  );
}
