import { lazy, Suspense } from 'react';
import Hero from './components/Hero';

const Timeline = lazy(() => import('./components/Timeline'));
const GlassDeck = lazy(() => import('./components/GlassDeck'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const GitHubPortfolioSection = lazy(() => import('./components/GitHubPortfolioSection'));
const ConnectMeSection = lazy(() => import('./components/ConnectMeSection'));

export default function App() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <Timeline />
        <GlassDeck />
        <PortfolioSection />
        <GitHubPortfolioSection />
        <ConnectMeSection />
      </Suspense>
    </>
  );
}
