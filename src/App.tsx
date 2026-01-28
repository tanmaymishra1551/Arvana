// ====================================
// MAIN APP
// ====================================

// App.jsx
import Layout from './wrappers/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Team from './components/Team';
import CTA from './components/CTA';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <TechStack />
      <Team />
      <CTA />
    </Layout>
  );
}