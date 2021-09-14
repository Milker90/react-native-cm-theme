# react-native-cm-theme

## Install

`npm install react-native-cm-theme --save`

or

`yarn react-native-cm-theme --save`

## Usage

### 1. Ready theme data

```
<!-- theme color -->
const CommonColors = {
    light: {
        m1: '#141414',
    },
    dark: {
        m1: '#ffffff',
    }
}

<!-- theme style -->
const CommonStyles = {
    light: {
        container: {
            backgroundColor: '#FFFFFF',
            flex: 1,
        },
    },
    dark: {
        container: {
            backgroundColor: '#080618',
            flex: 1,
        },
    },
};

<!-- theme image -->
const CommonImages = {
    light: {
        add_photo: require('@/assets/image/light/add_photo.png')
    },
    dark: {
        add_photo: require('@/assets/image/dark/add_photo.png'),
    },
};


const data = { themeColors: [CommonColors], themeStyles: CommonStyles, themeImages: CommonImages }
```

### 2. Make CMThemeProvider as root node

```
const App = () => {
  const theme = useColorScheme();
  return (
    <CMThemeProvider theme={theme} data={data}>
      <Root />
    </CMThemeProvider>
  );
};

export default App;
```

### 3. Use theme data in function component or class component

#### Use in function component

```
import { useTheme } from 'react-native-cm-theme';

const { theme, themeStyles, themeColors, themeImages } = useTheme();
```

#### Use in class component

```
import { CMTheme } from 'react-native-cm-theme';

return <CMTheme>{({theme, themeColors, themeStyles, themeImages }) => {children}</CMTheme>
```
