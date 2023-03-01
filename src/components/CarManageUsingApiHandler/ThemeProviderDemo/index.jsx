import React from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeDemo = () => {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return ( 
        <div>
            hello
        </div>
     );
}
 
export default ThemeDemo;
