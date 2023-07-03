function initThemeSelector() {
  const defaultTheme = new URL(
    '../css/themes/default-theme.css',
    import.meta.url
  );
  const darkTheme = new URL('../css/themes/dark-theme.css', import.meta.url);
  const themeStylesLink = document.getElementById('theme-styles-link');
  const themeSelectInput = document.getElementById('js-switch-theme');
  let currentAttribute = localStorage.getItem('theme');

  if (!currentAttribute) {
    currentAttribute = defaultTheme;
    localStorage.setItem('theme', currentAttribute);
  }

  function activateTheme(themeName) {
    themeStylesLink.setAttribute('href', themeName);
  }

  themeSelectInput.addEventListener('change', onClick);

  function onClick() {
    if (this.checked) {
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