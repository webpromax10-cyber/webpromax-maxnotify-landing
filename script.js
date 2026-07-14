(() => {
  const body = document.body;
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  const closeMenu = () => {
    body.classList.remove('menu-open');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
  };

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = body.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const copyButton = document.querySelector('.demo-token button');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const originalLabel = copyButton.getAttribute('aria-label') || 'Скопировать';
      try {
        await navigator.clipboard.writeText('Демонстрационный токен');
        copyButton.setAttribute('aria-label', 'Скопировано');
      } catch {
        copyButton.setAttribute('aria-label', 'Демонстрация копирования');
      }
      window.setTimeout(() => copyButton.setAttribute('aria-label', originalLabel), 1800);
    });
  }

  document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== item) other.removeAttribute('open');
      });
    });
  });

  const form = document.querySelector('#request-form');
  const status = document.querySelector('#form-status');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const contact = String(data.get('contact') || '').trim();
      const site = String(data.get('site') || '').trim();
      const notifications = String(data.get('notifications') || '').trim();
      const comment = String(data.get('comment') || '').trim();

      const message = [
        'Здравствуйте. Хочу подключить модуль «Оповещение в MAX» для 1С-Битрикс.',
        name ? `Имя: ${name}` : '',
        contact ? `Контакт: ${contact}` : '',
        site ? `Сайт: ${site}` : '',
        notifications ? `Что подключить: ${notifications}` : '',
        comment ? `Комментарий: ${comment}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      if (status) {
        status.textContent = 'Открываем WhatsApp с подготовленным сообщением. Токен сюда вставлять не нужно.';
      }

      const url = `https://wa.me/79883885444?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
})();
