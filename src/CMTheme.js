import React, { useState, useEffect, useCallback } from 'react';

const CMThemeContext = React.createContext();
const CMTheme = CMThemeContext.Consumer;

const CMThemeProvider = ({ theme = "light", data = {}, children, debug = false }) => {
  const buildThemeElements = useCallback(
    () => {
      const tmpThemeCategoryElements = {};
      const themeCategories = Object.keys(data);
      themeCategories.forEach(category => {
        const elements = data[category];
        if (elements instanceof Array) {
          let tmpData = {};
          elements.forEach(item => {
            tmpData = { ...item[theme], ...item.common, ...tmpData };
          });
          tmpThemeCategoryElements[category] = tmpData;
        } else if (elements instanceof Object) {
          tmpThemeCategoryElements[category] = { ...elements[theme], ...elements.common }
        } else {
          return true;
        }
      });

      if (debug) {
        console.log(`[CMTheme] theme change to ${theme}`);
        console.log(`[CMTheme]: ${JSON.stringify(tmpThemeCategoryElements)}`);
      }

      return tmpThemeCategoryElements;
    },
    [theme, data],
  );

  useEffect(() => {
    const tmpThemeCategoryElements = buildThemeElements();
    setThemeCategoryElements(tmpThemeCategoryElements);
  }, [theme, data]);

  const [themeCategoryElements, setThemeCategoryElements] = useState(() => buildThemeElements());

  return (
    <CMThemeContext.Provider
      value={{ theme, ...themeCategoryElements }}>
      {children}
    </CMThemeContext.Provider>
  );
};

export { CMThemeContext, CMTheme, CMThemeProvider };
