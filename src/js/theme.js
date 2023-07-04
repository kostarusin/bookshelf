function initThemeSelector() {
  const defaultTheme = new URL(
    '../css/themes/default-theme.css',
    import.meta.url
  );
  const darkTheme = new URL('../css/themes/dark-theme.css', import.meta.url);
  const themeStylesLink = document.getElementById('theme-styles-link');
  const themeSelectInput = document.getElementById('js-switch-theme');
  let currentAttribute = localStorage.getItem('theme');
  let currentCheckBoxState = localStorage.getItem('state');

  if (!currentAttribute) {
    currentAttribute = defaultTheme;
    localStorage.setItem('theme', currentAttribute);
  }

  function activateTheme(themeName, checkState) {
    themeStylesLink.setAttribute('href', themeName);
    themeSelectInput.checked = checkState;
  }

  themeSelectInput.addEventListener('change', onClick);

  function onClick() {
    if (this.checked) {
      activateTheme(darkTheme, this.checked);
      currentAttribute = darkTheme;
      currentCheckBoxState = this.checked;
    } else {
      activateTheme(defaultTheme, false);
      currentAttribute = defaultTheme;
      currentCheckBoxState = false;
    }
    localStorage.setItem('theme', currentAttribute);
    localStorage.setItem('state', currentCheckBoxState);
  }

  themeSelectInput.checked = currentCheckBoxState === 'true';

  activateTheme(currentAttribute, themeSelectInput.checked);
}

initThemeSelector();







