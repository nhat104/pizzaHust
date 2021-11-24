import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '21px 28px 34px 32px',
    height: '100vh',
  },

  product: {
    display: 'flex',
    width: '100%',

    '& p': {
      margin: '15px 0 0 10px',
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: 18 / 15,
    },
  },

  choose: {
    margin: '0 16px',
    flex: 1,
  },

  choose_1: {
    width: '100%',
  },

  toppingItem: {
    width: '65px',
    height: '66px',
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer',

    '& span': {
      display: 'block',
      fontSize: '12px',
      lineHeight: 14 / 12,
    },
  },
});

export { useStyles };
