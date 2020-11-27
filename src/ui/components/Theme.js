import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const dark = "#040403"
export const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`,
            dark: `${dark}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            fontWeigth: 700,
            fontSize: "1rem",
            textTransform: "none"
        }
    }
});