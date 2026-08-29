```javascript
// ============================================
// Navbar scroll state
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

  navbar.classList.toggle(
    'scrolled',
    window.scrollY > 20
  );

});


// ============================================
// Mobile nav toggle
// ============================================

const navToggle =
  document.getElementById('navToggle');

const navLinks =
  document.getElementById('navLinks');


if (navToggle && navLinks) {

  navToggle.addEventListener('click', () => {

    navLinks.classList.toggle('open');

  });


  navLinks
    .querySelectorAll('a')
    .forEach(link => {

      link.addEventListener('click', () => {

        navLinks.classList.remove('open');

      });

    });

}


// ============================================
// Active nav link on scroll
// ============================================

const sections =
  document.querySelectorAll(
    'section[id], header[id]'
  );


const navItems =
  document.querySelectorAll('.nav-link');


const spyObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navItems.forEach(link => {

            const href =
              link.getAttribute('href');


            // Only process section links

            if (
              href &&
              href.startsWith('#')
            ) {

              link.classList.toggle(

                'active',

                href ===
                `#${entry.target.id}`

              );

            }

          });

        }

      });

    },

    {
      rootMargin:
        '-40% 0px -55% 0px'
    }

  );


sections.forEach(section => {

  spyObserver.observe(section);

});


// ============================================
// Reveal on scroll
// ============================================

const revealElements =
  document.querySelectorAll(

    '.section-head, ' +
    '.about-card, ' +
    '.about-info, ' +
    '.skill-card, ' +
    '.project-card, ' +
    '.profile-card, ' +
    '.contact-box, ' +
    '.skills-bars, ' +
    '.resume-card'

  );


revealElements.forEach(element => {

  element.classList.add('reveal');

});


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('in');

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.15
    }

  );


document
  .querySelectorAll('.reveal')
  .forEach(element => {

    revealObserver.observe(element);

  });


// ============================================
// Animate skill bars
// ============================================

const skillFills =
  document.querySelectorAll(
    '.skill-bar-fill'
  );


const skillObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const fill =
            entry.target;


          const percentage =
            fill.dataset.fill;


          fill.style.width =
            percentage + '%';


          skillObserver.unobserve(fill);

        }

      });

    },

    {
      threshold: 0.4
    }

  );


skillFills.forEach(fill => {

  skillObserver.observe(fill);

});


// ============================================
// Resume button
// ============================================

const resumeLinks =
  document.querySelectorAll(
    'a[href="resume.pdf"]'
  );


resumeLinks.forEach(link => {

  link.addEventListener(
    'click',
    () => {

      console.log(
        "Opening Deepak's Resume"
      );

    }
  );

});


// ============================================
// Footer year
// ============================================

const footer =
  document.querySelector('.footer');


if (footer) {

  const year =
    new Date().getFullYear();


  footer.innerHTML = `

    <p>
      Designed &amp; built by Deepak · ${year}
    </p>

  `;

}
```
