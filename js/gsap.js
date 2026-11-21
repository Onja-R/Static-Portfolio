// Projects: pinned panels with overscroll (GSAP ScrollTrigger).
// Each panel pins while the next one slides over it. A panel taller than the
// viewport scrolls to its end first ("overscroll"), then pins.
// Without GSAP (offline/blocked CDN) or with reduced motion, panels stay static.
(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const panels = gsap.utils.toArray('.work');
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    panels.forEach((panel, i) => {
      const inner = panel.querySelector('.work-inner');
      const next = panels[i + 1];

      // Content reveal as the panel comes into view
      gsap.from(inner.querySelectorAll('.work-head, .work-desc, .work-tags'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: panel, start: 'top 70%', toggleActions: 'play none none reverse' }
      });

      // Big number drifts slightly for depth
      gsap.fromTo(panel.querySelector('.work-bignum'),
        { yPercent: 15 },
        { yPercent: -15, ease: 'none',
          scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true } });

      if (!next) return; // last panel scrolls normally into the contact section

      ScrollTrigger.create({
        trigger: panel,
        start: () => (panel.offsetHeight <= window.innerHeight ? 'top top' : 'bottom bottom'),
        endTrigger: next,
        end: 'top top',
        pin: true,
        pinSpacing: false
      });

      // Covered panel recedes while the next one slides over it
      gsap.to(inner, {
        scale: 0.92,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top', scrub: true }
      });
    });
  });
})();
