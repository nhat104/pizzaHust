import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '12px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  product: {
    flex: 1,
    marginTop: '18px',
    overflow: 'auto',
    marginBottom: '40px',
  },

  productList: {
    margin: '30px 0',
  },

  text: {
    '& span:last-child': {
      float: 'right',
    },
  },

  productItem: {
    height: '60px',
    backgroundColor: '#FFECD1',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    borderRadius: '57px',

    '& img': {
      width: '84px',
      marginLeft: '-5px',
    },

    '& p': {
      margin: 0,
    },
  },

  itemInfo: {
    flex: 1,

    '& p': {
      fontWeight: 500,
    },

    '& span:last-child': {
      float: 'right',
      marginRight: '30px',
      fontWeight: 700,
    },
  },

  quantity: {
    display: 'inline-flex',
    alignItems: 'center',

    '& > div': {
      padding: '0 5px',
    },
  },
});

export { useStyles };
