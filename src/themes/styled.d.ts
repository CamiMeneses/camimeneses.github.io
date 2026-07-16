
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        mode: string;
        colors: {
            background: string;
            surface: string;
            surfaceHighlight: string;
            text: string;
            textSecondary: string;
            textLight: string;
            primary: string;
            primaryHover: string;
            secondary: string;
            accent: string;
            border: string;
            error: string;
            success: string;
            warning: string;
            gradient: string;
            glass: string;
        };
        shadows: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        fonts: {
            body: string;
            heading: string;
            monospace: string;
        };
    }
}
