document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE NAVBAR TOGGLE ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Tutup menu saat link navigasi di-klik (untuk mobile view)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // --- 2. PERFORMANCE-FRIENDLY PARALLAX EFFECT ---
    // Menggunakan requestAnimationFrame agar animasi berjalan smooth (60fps) tanpa stuttering
    const heroBg = document.getElementById('hero-bg');
    let scrollPosition = 0;

    window.addEventListener('scroll', () => {
        scrollPosition = window.pageYOffset;
        
        // Cek jika elemen ada dan terlihat di layar kontrol performa
        if (heroBg && window.innerWidth > 768) { 
            window.requestAnimationFrame(() => {
                // Kalikan scrollPosition untuk mengatur kecepatan parallax (0.4 berarti bergerak 40% dari kecepatan scroll asli)
                heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            });
        }
    });


    // --- 3. ACTIVE LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset + 90; // offset tinggi navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    });
});