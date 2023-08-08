// jsx.d.ts
import React from 'react';

declare module 'react' {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    // Add more elements as needed
  }
}