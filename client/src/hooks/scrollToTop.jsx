import React from 'react';
import useScrollToTop from './useScrollToTop.jsx';

// Úsalo una sola vez bajo el <Router/>
export default function ScrollToTop({ targetSelector = null, smooth = false }) {
  useScrollToTop(targetSelector, { smooth });
  return null;
}
