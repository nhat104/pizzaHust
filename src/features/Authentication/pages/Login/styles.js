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
  },
});

export default useStyles;
