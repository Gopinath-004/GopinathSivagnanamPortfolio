# Implementation Plan: Gopinath Sivagnanam's Portfolio

## Phase 1: Setup & Configuration
- [ ] Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`.
- [ ] Initialize Tailwind CSS.
- [ ] Configure `tailwind.config.js` with 'Dark Industrial' theme (Slate/Zinc palette, custom glow effects).
- [ ] Establish global styles in `index.css` (reset, typography, dark mode base).
- [ ] Create folder structure: `/src/components`, `/src/hooks`, `/src/assets`.

## Phase 2: Core Data & Assets
- [ ] Create `ai-me.json` in root with career summary.
- [ ] Prepare asset references (placeholders or generated).

## Phase 3: Component Development
- [ ] **Hero Component**: 
    - Layout with large typography.
    - Framer Motion animations for name and tagline ("3 Years of Full Stack & IoT Experience").
- [ ] **Work History Component**:
    - Timeline or Card layout.
    - Content: ProcessDrive India (AIM2C, SYFOL).
    - Highlight: On-site industry visits.
- [ ] **Skills Cloud Component**:
    - Interactive grid or floating cloud of skills (HTML, CSS, JS, Vue.js, React, .NET, C#, MongoDB, SQL, N8n).
    - 3D or physics-based feel using Framer Motion layout animations.
- [ ] **Hardware/IoT Special Section**:
    - "Dark Industrial" aesthetics (metallic gradients, neon accents).
    - Content: Industrial IoT integration, TDD approach.
- [ ] **Education Component**:
    - Simple, clean card for BCA & MCA from VIT, Vellore.

## Phase 4: Assembly & Polishing
- [ ] Compose `App.tsx` with all sections.
- [ ] Add smooth scrolling and scroll-triggered animations (fadeIn, slideUp).
- [ ] Ensure responsive design (mobile-first).

## Phase 5: Verification
- [ ] Browser Agent verify:
    - Layout responsiveness.
    - Animation triggers.
    - Content accuracy.
