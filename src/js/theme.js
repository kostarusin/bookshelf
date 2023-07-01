function initThemeSelector() {
  const defaultTheme = new URL(
    '../css/themes/default-theme.css',
    import.meta.url
  );
  const darkTheme = new URL('../css/themes/dark-theme.css', import.meta.url);
  const themeStylesLink = document.getElementById('theme-styles-link');
  // const themeSelectBtn = document.querySelector('.switcher');
  let currentAttribute = localStorage.getItem('theme');

  if (!currentAttribute) {
    currentAttribute = defaultTheme;
    localStorage.setItem('theme', currentAttribute);
  }

  function activateTheme(themeName) {
    themeStylesLink.setAttribute('href', themeName);
  }

  // themeSelectBtn.addEventListener('click', onClick);

  function onClick() {
    if (currentAttribute === defaultTheme) {
      activateTheme(darkTheme);
      currentAttribute = darkTheme;
    } else {
      activateTheme(defaultTheme);
      currentAttribute = defaultTheme;
    }

    localStorage.setItem('theme', currentAttribute);
  }

  activateTheme(currentAttribute);
}

initThemeSelector();
