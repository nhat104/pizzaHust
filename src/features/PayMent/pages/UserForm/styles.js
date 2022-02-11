import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '12px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#fff',
    '& span': {
      fontSize: '18px',
      lineHeight: 22 / 18,
      fontWeight: 700,
      margin: '20px 0 0 0',
    },
  },

  logo: {
    display: (props) => (props.tablet ? 'block' : 'none'),
    cursor: 'pointer',
    '& img': {
      marginLeft: 'auto',
      display: 'block',
    },
  },

  userForm: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
});

export { useStyles };
