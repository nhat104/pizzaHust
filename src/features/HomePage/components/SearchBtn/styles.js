import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  searchBox: {
    position: 'fixed',
    zIndex: 10,
    top: '27px',
    left: '40%',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    '& svg': {
      marginLeft: '-25px',
      verticalAlign: 'middle',
    },
  },

  searchBtn: {
    height: '27px',
    width: '163px',
    border: 'none',
    outline: 'none',
    borderRadius: '45px',
    padding: '0 19px',
    boxSizing: 'border-box',
  },
});

export { useStyles };
