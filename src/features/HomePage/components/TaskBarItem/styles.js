import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  item: {
    width: '87px',
    height: '115px',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    backgroundColor: (p) => (p.isActive ? '#FF8000' : '#fff'),
    color: (p) => (p.isActive ? '#fff' : '#000'),

    '& span': {
      transition: 'transform 0.5s',
      transform: (p) => (p.isActive ? 'rotate(90deg)' : ''),
      '& circle': {
        fill: (p) => (p.isActive ? '#fff' : ''),
      },
      '& path': {
        stroke: (p) => (p.isActive ? '#FF8000' : ''),
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
