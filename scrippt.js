 // Hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

    // Fade-in observer
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 70);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));

    // Skill bars
    let barsAnimated = false;
    const skillsSection = document.getElementById('skills');
    const skillObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !barsAnimated) {
        barsAnimated = true;
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-pct') + '%';
        });
      }
    }, { threshold: 0.2 });
    skillObserver.observe(skillsSection);

    // Send button
    document.getElementById('btnSend').addEventListener('click', function() {
      this.textContent = '✓ Pesan Terkirim!';
      this.style.background = '#22c55e';
      setTimeout(() => {
        this.textContent = 'Send Message';
        this.style.background = '';
      }, 2500);
    });
  