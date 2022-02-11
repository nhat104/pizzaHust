import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '21px 28px 34px 32px',
    height: '100vh',
  },

  back: {
    cursor: 'pointer',
    display: (props) => (props.tablet ? 'block' : 'none'),
    '&:hover': {
      fill: '#ff8000',
    },
  },

  logo: {
    display: (props) => (props.tablet ? 'block' : 'none'),
    '& img': {
      marginLeft: 'auto',
      display: 'block',
      cursor: 'pointer',
    },
  },

  product: {
    width: '100%',
    display: 'flex',
    gap: '10px',
  },

  image: {
    flex: 1,
    '& img': {
      width: '100%',
    },
  },

  content: {
    flex: 2,
    '& p': {
      marginTop: '10px',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 18 / 15,
    },
  },

  desc: {
    fontWeight: '400 !important',
    fontSize: '12px !important',
  },

  choose: {
    margin: '0 16px',
    flex: 1,
    '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#ff8000',
      },
    '& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: '#ff8000',
    },
  },

  toppingItem: {
    width: '65px',
    height: '66px',
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer',

    '& span': {
      fontWeight: 500,
      marginTop: '10px',
    },

    '& input::placeholder': {
      color: '#000',
      fontSize: '16px',
    },
  },

  select: {
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    borderRadius: '8px',
    marginBottom: '20px !important',
  },

  combo: {
    flex: 1,
    overflow: 'auto',
    marginBottom: '40px',
    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#fff2e0',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#ff8000',
      borderRadius: '10px',
    },
  },

  comboItem: {
    display: 'flex',
    margin: '30px 0',
    border: '2px solid #ffffff',
    position: 'relative',

    '& img': {
      width: '30%',
      cursor: 'pointer',
    },
    '& span': {
      alignSelf: 'center',
      fontSize: '16px',
      fontWeight: 600,
      color: '#000000',
      marginLeft: '10px',
    },
    '& > div': {
      position: 'absolute',
      right: '10px',
      bottom: 0,
      fontWeight: 600,
      cursor: 'pointer',
      '&:hover': {
        color: '#ff8000',
      },
    },
    '&:hover': {
      border: '2px solid #ff8000',
      borderRadius: '20px',
      '& span': {
        color: '#ff8000',
      },
    },
  },
});

export { useStyles };
