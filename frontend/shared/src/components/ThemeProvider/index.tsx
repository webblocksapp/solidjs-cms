import { Component, createContext, createEffect, createSignal, onMount, useContext, batch } from 'solid-js';

export const ThemeContext = createContext<{ setTheme: (theme: string) => void }>();
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: Component = (props) => {
  const [theme, setTheme] = createSignal<string>('');
  const [themeLink, setThemeLink] = createSignal((<link />) as HTMLLinkElement);

  createEffect(() => {
    themeLink().href = `/src/themes/${theme().replace(/\./g, '/')}.css`;
  });

  onMount(() => {
    batch(() => {
      setThemeLink(document.getElementById('theme') as HTMLLinkElement);
      setTheme('main.light');
    });
  });

  return <ThemeContext.Provider value={{ setTheme }}>{props.children}</ThemeContext.Provider>;
};
