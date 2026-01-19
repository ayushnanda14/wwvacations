import { Suspense } from 'react';
import GujaratClient from './GujaratClient';

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GujaratClient />
    </Suspense>
  );
} 
