(() => {
  const header = document.getElementById('siteHeader');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primaryNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });

    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
      });
    });
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  document.body.classList.add('js-ready');

  // 카드/제품/ops 항목 스크롤 진입 시 fade-in
  if ('IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.card, .product, .ops-list > li'
    );
    const revealObs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealTargets.forEach((el) => revealObs.observe(el));
  }
})();
