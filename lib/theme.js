import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    colors: {
        primary: '#ac5bf7',
        dark: {
            900: '#111320',
            400: '#20223b',
        },
    },
});

export { theme };