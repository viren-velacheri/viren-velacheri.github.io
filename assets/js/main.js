'use strict';

document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = [...document.querySelectorAll('a[data-section-link]')];
const mobile = window.matchMedia('(max-width: 700px)');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) setMenu(false);
});

header.addEventListener('focusout', (event) => {
  if (!header.contains(event.relatedTarget)) setMenu(false);
});

mobile.addEventListener('change', () => setMenu(false));

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// All content and links remain accessible without JavaScript.
// The observer adds only a subtle indication of the section being read.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('.article-section[id], #intro').forEach((section) => observer.observe(section));
}

const copyEmailButton = document.getElementById('copy-email');
const emailStatus = document.getElementById('email-status');

function copyWithSelection(text) {
  const previousFocus = document.activeElement;
  const selection = document.getSelection();
  const ranges = selection
    ? Array.from({ length: selection.rangeCount }, (_, index) => selection.getRangeAt(index).cloneRange())
    : [];
  const inputSelection = previousFocus && typeof previousFocus.selectionStart === 'number'
    ? [previousFocus.selectionStart, previousFocus.selectionEnd, previousFocus.selectionDirection]
    : null;
  const field = document.createElement('textarea');
  field.value = text;
  field.readOnly = true;
  field.tabIndex = -1;
  field.setAttribute('aria-hidden', 'true');
  field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;';
  document.body.append(field);

  try {
    field.focus({ preventScroll: true });
    field.select();
    field.setSelectionRange(0, text.length);
    return typeof document.execCommand === 'function' && document.execCommand('copy');
  } finally {
    field.remove();
    try {
      if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    } catch (_) { /* Focus restoration must not change the copy result. */ }
    try {
      if (selection) {
        selection.removeAllRanges();
        ranges.forEach((range) => selection.addRange(range));
      }
      if (inputSelection) previousFocus.setSelectionRange(...inputSelection);
    } catch (_) { /* A selection may no longer exist after an asynchronous attempt. */ }
  }
}

if (copyEmailButton && emailStatus && copyEmailButton.dataset.email) {
  let resetTimer;
  let latestAttempt = 0;

  copyEmailButton.addEventListener('click', async () => {
    const attempt = ++latestAttempt;
    const email = copyEmailButton.dataset.email;
    window.clearTimeout(resetTimer);
    copyEmailButton.textContent = 'Copy email';
    emailStatus.textContent = '';
    let copied = false;

    try {
      if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch (_) { /* Try the selection fallback when clipboard access is denied. */ }

    if (attempt !== latestAttempt) return;
    if (!copied) {
      try { copied = copyWithSelection(email); } catch (_) { copied = false; }
    }

    emailStatus.textContent = copied ? 'Email address copied.' : 'Select and copy the email address above.';
    if (copied) {
      copyEmailButton.textContent = 'Copied';
      resetTimer = window.setTimeout(() => {
        copyEmailButton.textContent = 'Copy email';
      }, 3000);
    }
  });

  copyEmailButton.hidden = false;
}
