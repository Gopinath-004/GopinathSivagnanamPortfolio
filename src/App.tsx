import Hero from './components/Hero';
import WorkHistory from './components/WorkHistory';
import SkillsCloud from './components/SkillsCloud';
import HardwareIoT from './components/HardwareIoT';
import Education from './components/Education';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-industrial-950 text-industrial-50 min-h-screen selection:bg-neon-blue selection:text-black">
      <Navbar />
      <Hero />
      <WorkHistory />
      <HardwareIoT />
      <SkillsCloud />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />

      {/* Global overlay grid for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] z-50"></div>
    </div>
  );
}

export default App;
