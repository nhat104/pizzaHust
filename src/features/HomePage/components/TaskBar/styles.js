import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  body: {
    marginTop: '20px',
    '& > span': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '22px',
    },
  },

  category: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '22px',
  },

  item: {
    width: '87px',
    height: '115px',
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 700,
    color: '#000',
    textDecoration: 'none',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'transform 0.5s',

    '&.active': {
      backgroundColor: '#FF8000',
      color: '#fff',
      transition: 'transform 0.5s',
      '& span': {
        transform: 'rotate(90deg)',
        // stroke: '#FF8000',
        '& circle': {
          fill: '#fff',
        },
        '& path': {
          stroke: '#FF8000',
        },
      },
    },

    '& p': {
      marginTop: '10px',
      textAlign: 'center',
      marginBottom: '6px',
      height: '15px',
    },
  },

  circle: {
    height: '40px',
    borderRadius: '50%',
    marginTop: '8px',
    backgroundColor: '#fff',
    '& svg': {
      width: '100%',
      height: '100%',
      fill: '#ff8000',
    },
  },

  arrow: {
    marginTop: '12px',
    borderRadius: '20px',
  },
});

export { useStyles };
