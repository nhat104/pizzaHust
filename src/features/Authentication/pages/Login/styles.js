import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
  },

  left: {
    width: '50%',
    backgroundColor: '#FFF2F2',
  },

  form: {
    margin: '50px 110px auto 102px',
    fontSize: '15px',
    fontWeight: 500,
  },

  title: {
    fontSize: '18px',
    fontWeight: 700,
    margin: '10px 0 20px',
  },

  auth: {
    display: 'inline-block',
    color: '#FF8000',
    cursor: 'pointer',
  },

  image: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(146.9deg, #FF8001 0%, rgba(203, 21, 21, 0.81) 100%);',
  },

  wrap: {
    height: '75vh',
    width: '75%',
    background:
      'linear-gradient(147.99deg, rgba(255, 174, 62, 0.75) 0%, rgba(203, 21, 21, 0.57) 100%)',
    borderRadius: '30px',
    display: 'flex',
    '& img': {
      width: '100%',
      marginTop: 'auto',
    },
  },
});

export default useStyles;
