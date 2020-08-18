const fiord = '#414968';
const mediumBlue = '#003A70';
const lightBlue = '#136ADD';
const linkBlue = '#136ADD';
const lighterBlue = '#D9DEE8';
const coral = '#F25645';
const friendlyTeal = '#57D6CA';
const lightGray = '#E0E0E0';
const mediumGray = '#C4C4C4';
const darkGray = '#636363';
const mintGreen = '#43D48E';
const successGreen = '#01C265';
const errorRed = '#FE003C';
const appleRed = '#D73737';
const white = '#FFFFFF';
const black = '#000000';

export default {
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: '0.5rem 0',
      '&.no-margin': {
        margin: 0,
      },
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: 1.15,
      margin: '0.5rem 0',
      '&.no-margin': {
        margin: 0,
      },
      '&.no-bold': {
        fontWeight: 'normal',
      },
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 'bold',
      margin: '0.25rem 0',
      '&.no-margin': {
        margin: 0,
      },
      '&.uppercase': {
        textTransform: 'uppercase',
      },
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 'bold',
      '&.no-margin': {
        margin: 0,
      },
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '.875rem',
    },
    body1: {
      fontSize: '.875rem',
    },
    body2: {
      fontSize: '.875rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      '&.no-margin': {
        margin: 0,
      },
    },
    subtitle2: {
      fontSize: '.875rem',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.25,
      display: 'inline-block',
    },
  },
  palette: {
    primary: {
      main: fiord,
    },
    secondary: {
      main: lightBlue,
    },
    error: {
      main: errorRed,
    },
    fiord,
    mediumBlue,
    lightBlue,
    linkBlue,
    lighterBlue,
    coral,
    friendlyTeal,
    lightGray,
    mediumGray,
    darkGray,
    mintGreen,
    successGreen,
    errorRed,
    appleRed,
    white,
    black,
  },
  overrides: {
    MuiDrawer: {
      root: {
        zIndex: '1600!important',
      },
    },
    MuiButtonBase: {
      root: {
        overflow: 'hidden',
        '&:focus': {
          '&:after': {
            position: 'absolute',
            zIndex: 0,
            content: '""',
            background: 'rgba(0,0,0,0.15)',
            top: '-100%',
            left: 0,
            right: 0,
            bottom: '-100%',
            borderRadius: '100%',
            animationName: 'pulseAnimationHorizontal',
            animationDuration: '4s',
            animationTimingFunction: 'ease',
            animationIterationCount: 'infinite',
          },
        },
      },
    },
    MuiIconButton: {
      root: {
        '&:focus': {
          '&:after': {
            top: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.15)',
            animationName: 'pulseAnimationCircular',
            animationDuration: '3s',
          },
        },
      },
    },
    MuiButton: {
      root: {
        lineHeight: 1.2,
        borderRadius: 50,
        fontSize: '1rem',
        fontWeight: 'bold',
        padding: '7px 28px 9px',
        textTransform: 'none',
        '&$containedPrimary': {
          color: 'white',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
      contained: {
        display: 'inline-block',
        verticalAlign: 'middle',
        boxShadow: 'none',
        minWidth: 140,
        height: 'auto',
        '&$focusVisible': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
      outlined: {
        display: 'inline-block',
        verticalAlign: 'middle',
        minWidth: 140,
        height: 'auto',
        padding: '6px 28px 8px',
      },
      containedSecondary: {
        '&:focus:after': {
          background: 'rgba(255,255,255,0.15)',
        },
      },
      outlinedPrimary: {
        border: `1px solid ${fiord}`,
      },
      outlinedSecondary: {
        border: `1px solid ${lightBlue}`,
      },
      label: {
        position: 'relative',
        zIndex: 1,
      },
    },
    MuiRadio: {
      root: {
        '&.Mui-focusVisible:after': {
          position: 'absolute',
          zIndex: 0,
          content: '""',
          background: 'rgba(0,0,0,0.15)',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '50%',
          animationName: 'pulseAnimationCircular',
          animationDuration: '3s',
          animationTimingFunction: 'ease',
          animationIterationCount: 'infinite',
        },
      },
    },
    MuiCheckbox: {
      root: {
        '&.Mui-focusVisible:after': {
          position: 'absolute',
          zIndex: 0,
          content: '""',
          background: 'rgba(0,0,0,0.15)',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '50%',
          animationName: 'pulseAnimationCircular',
          animationDuration: '3s',
          animationTimingFunction: 'ease',
          animationIterationCount: 'infinite',
        },
      },
    },
    MuiDivider: {
      root: {
        margin: '1rem 0',
      },
    },
    MuiPopover: {
      paper: {
        padding: '0.5rem',
      },
    },
    MuiFormLabel: {
      root: {
        margin: '0.5rem 0',
        textTransform: 'uppercase',
        color: '#222',
        fontWeight: 'bold',
      },
    },
    MuiLink: {
      root: {
        textDecoration: 'underline',
        color: linkBlue,
      },
      underlineHover: {
        textDecoration: 'underline',
      },
    },
    MuiInputBase: {
      input: {
        lineHeight: 2,
      },
    },
    MuiInputLabel: {
      root: {
        margin: 0,
        textTransform: 'none',
        color: '#222',
        fontWeight: 'normal',
      },
    },
    MuiFormGroup: {
      root: {
        padding: '0.5rem 1rem',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12,
      },
    },
    MuiOutlinedInput: {
      root: {
        '& fieldset': {
          borderRadius: 20,
        },
        '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: lightBlue,
        },
      },
      adornedStart: {
        paddingLeft: 0,
      },
      adornedEnd: {
        paddingRight: 0,
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginRight: 0,
      },
      positionEnd: {
        marginLeft: 0,
      },
    },
    MuiDialogContent: {
      root: {
        '&:first-child': {
          paddingTop: 8,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '16px 24px 8px',
        textAlign: 'center',
      },
    },
    MuiSnackbar: {
      root: {
        zIndex: 1600,
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: coral,
      },
    },
  },
};
