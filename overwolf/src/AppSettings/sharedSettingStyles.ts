import { makeStyles } from '@/theme';

/**
 * Contains generic styles for elements on the settings page.
 */
export const useSharedSettingsStyles = makeStyles()(theme => ({
    setting: {
        marginBottom: theme.spacing(1),
    },
    summary: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.borderRadiusSmall,
        padding: 2,
        marginBottom: theme.spacing(1),

        '& > span': {
            flexGrow: 1,
        },

        '&:hover, &:focus': {
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.2)',
        },
    },
    checkbox: {
        '& > input[type="checkbox"]': {
            margin: theme.spacing(0, 1, 0, 0),
        },
    },
    range: {
        '& > input[type="range"]': {
            margin: theme.spacing(0, 1, 0, 0),
        },
    },
    select: {
        '& > select': {
            margin: theme.spacing(0, 1, 0, 0),
            fontFamily: theme.bodyFontFamily,
            fontSize: typeof theme.bodyFontSize === 'number'
                ? theme.bodyFontSize - 1
                : `calc(${theme.bodyFontSize} - 1px)`,
            padding: '2px 4px',
        },
    },
    textbox: {
        '& > input[type="text"]': {
            margin: theme.spacing(0, 1, 0, 0),
        },
    },
    textarea: {
        display: 'flex',
        '& > textarea': {
            minWidth: 170,
            maxWidth: 170,
            minHeight: '4em',
            width: '100%',
            margin: theme.spacing(0, 1, 0, 0),
        },
    },
}));
