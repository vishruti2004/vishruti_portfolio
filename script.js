// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM loaded, initializing portfolio...');

//     // Smooth scroll animation
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 const offsetTop = target.offsetTop - 80;
//                 window.scrollTo({
//                     top: offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Mobile menu toggle
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');

//     if (hamburger && navMenu) {
//         hamburger.addEventListener('click', () => {
//             navMenu.classList.toggle('active');
//             hamburger.classList.toggle('active');
//         });

//         // Close menu when clicking on a link
//         document.querySelectorAll('.nav-link').forEach(link => {
//             link.addEventListener('click', () => {
//                 navMenu.classList.remove('active');
//                 hamburger.classList.remove('active');
//             });
//         });
//     }

//     // Navbar scroll effect
//     let lastScroll = 0;
//     const navbar = document.querySelector('.navbar');

//     if (navbar) {
//         window.addEventListener('scroll', () => {
//             const currentScroll = window.pageYOffset;
            
//             if (currentScroll > 100) {
//                 navbar.style.background = 'rgba(10, 26, 63, 0.98)';
//                 navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
//             } else {
//                 navbar.style.background = 'rgba(10, 26, 63, 0.95)';
//                 navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//             }
            
//             lastScroll = currentScroll;
//         });
//     }

// // Intersection Observer for fade-in animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// // Observe sections and project cards (excluding About section and its children)
// document.querySelectorAll('.section:not(#about), .project-card, .skill-category, .contact-item').forEach(el => {
//     // Skip if element is inside About section
//     if (!el.closest('#about')) {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(30px)';
//         el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(el);
//     }
// });

// // About section and all its children - no animation, show immediately
// const aboutSection = document.querySelector('#about');
// if (aboutSection) {
//     aboutSection.style.opacity = '1';
//     aboutSection.style.transform = 'translateY(0)';
//     // Remove animations from all children
//     aboutSection.querySelectorAll('*').forEach(child => {
//         child.style.opacity = '1';
//         child.style.transform = 'none';
//         child.style.transition = 'none';
//     });
// }

// // Typing effect removed - text displays immediately

// // Add parallax effect to hero section
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero && scrolled < window.innerHeight) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// // Add hover effect to project cards
// document.querySelectorAll('.project-card').forEach(card => {
//     card.addEventListener('mouseenter', function() {
//         this.style.transform = 'translateY(-10px) scale(1.02)';
//     });
    
//     card.addEventListener('mouseleave', function() {
//         this.style.transform = 'translateY(0) scale(1)';
//     });
// });

// // Add click animation to buttons
// document.querySelectorAll('.btn, .project-btn').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         const ripple = document.createElement('span');
//         const rect = this.getBoundingClientRect();
//         const size = Math.max(rect.width, rect.height);
//         const x = e.clientX - rect.left - size / 2;
//         const y = e.clientY - rect.top - size / 2;
        
//         ripple.style.width = ripple.style.height = size + 'px';
//         ripple.style.left = x + 'px';
//         ripple.style.top = y + 'px';
//         ripple.classList.add('ripple');
        
//         this.appendChild(ripple);
        
//         setTimeout(() => {
//             ripple.remove();
//         }, 600);
//     });
// });

// // Add CSS for ripple effect
// const style = document.createElement('style');
// style.textContent = `
//     .btn, .project-btn {
//         position: relative;
//         overflow: hidden;
//     }
    
//     .ripple {
//         position: absolute;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.6);
//         transform: scale(0);
//         animation: ripple-animation 0.6s ease-out;
//         pointer-events: none;
//     }
    
//     @keyframes ripple-animation {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }
// `;
// document.head.appendChild(style);

// // Add active state to navigation links based on scroll position
// const sections = document.querySelectorAll('.section');
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (window.pageYOffset >= sectionTop - 200) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// });

// // Resume Section Functionality
// const showResumeBtn = document.getElementById('showResumeBtn');
// const closeResumeBtn = document.getElementById('closeResumeBtn');
// const resumeDisplay = document.getElementById('resumeDisplay');
// const resumeObject = document.getElementById('resumeObject');
// const resumeFrame = document.getElementById('resumeFrame');

// // Your resume file path
// const resumePath = './assets/resume.pdf';
// const resumeFileName = 'Sakshi_Resume.pdf';


// if (showResumeBtn && resumeDisplay) {
//     showResumeBtn.addEventListener('click', function() {
//         // Show the display container
//         resumeDisplay.style.display = 'block';
        
//         // Try object tag first (works better with file:// in some browsers)
//         if (resumeObject) {
//             resumeObject.data = resumePath;
//         }
        
//         // Also set embed as fallback
//         if (resumeFrame) {
//             resumeFrame.src = resumePath;
//         }
        
//         // Smooth scroll to resume display
//         setTimeout(() => {
//             resumeDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//         }, 100);
        
//         // If object/embed doesn't work, try opening in new window after 2 seconds
//         setTimeout(() => {
//             // Check if PDF loaded (this is a fallback check)
//             const testWindow = window.open('', '_blank');
//             if (testWindow) {
//                 testWindow.close();
//             }
//         }, 2000);
//     });
// }

// // Close button functionality
// if (closeResumeBtn && resumeDisplay) {
//     closeResumeBtn.addEventListener('click', function() {
//         resumeDisplay.style.display = 'none';
//         // Clear sources to stop loading
//         if (resumeObject) {
//             resumeObject.data = '';
//         }
//         if (resumeFrame) {
//             resumeFrame.src = '';
//         }
//     });
// }

// // Close resume when clicking outside
// if (resumeDisplay) {
//     resumeDisplay.addEventListener('click', function(e) {
//         if (e.target === resumeDisplay) {
//             resumeDisplay.style.display = 'none';
//             if (resumeObject) {
//                 resumeObject.data = '';
//             }
//             if (resumeFrame) {
//                 resumeFrame.src = '';
//             }
//         }
//     });
// }


// console.log('Portfolio loaded successfully! 🚀');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing portfolio...');

    /* ---------------- Smooth Scroll ---------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    /* ---------------- Mobile Menu ---------------- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    /* ---------------- Navbar Scroll Effect ---------------- */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                navbar.style.background = 'rgba(10, 26, 63, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
            } else {
                navbar.style.background = 'rgba(10, 26, 63, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    /* ---------------- Intersection Observer ---------------- */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section:not(#about), .project-card, .skill-category, .contact-item')
        .forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = '0.6s';
            observer.observe(el);
        });

    /* ---------------- Hero Parallax ---------------- */
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero && window.pageYOffset < window.innerHeight) {
            hero.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
        }
    });

    /* ---------------- Resume Section ---------------- */

    const showResumeBtn = document.getElementById('showResumeBtn');
    const closeResumeBtn = document.getElementById('closeResumeBtn');
    const resumeDisplay = document.getElementById('resumeDisplay');
    const resumeObject = document.getElementById('resumeObject');
    const resumeFrame = document.getElementById('resumeFrame');
    const downloadBtn = document.querySelector('.resume-btn-download');

    // ✅ Correct resume path
    const resumePath = 'D:\ipredict\protfolio\assests\resume .pdf';
    const resumeFileName = 'vishruti_Resume.pdf';

    /* ---- Show Resume ---- */
    if (showResumeBtn && resumeDisplay) {
        showResumeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            resumeDisplay.style.display = 'block';

            if (resumeObject) resumeObject.data = resumePath;
            if (resumeFrame) resumeFrame.src = resumePath;
        });
    }

    /* ---- Close Resume ---- */
    if (closeResumeBtn && resumeDisplay) {
        closeResumeBtn.addEventListener('click', function () {
            resumeDisplay.style.display = 'none';
            if (resumeObject) resumeObject.data = '';
            if (resumeFrame) resumeFrame.src = '';
        });
    }

    /* ---- Force Download Resume (NO OPEN) ---- */
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const link = document.createElement('a');
            link.href = resumePath;
            link.download = resumeFileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    console.log('Portfolio loaded successfully 🚀');
});
