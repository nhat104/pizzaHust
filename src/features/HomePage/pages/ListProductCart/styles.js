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
    height: '80px',
    backgroundColor: '#FFECD1',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    borderRadius: '57px',

    '& img': {
      width: '120px',
      marginLeft: '-5px',
    },

    '& p': {
      margin: '6px 0 2px 0',
    },
  },

  itemInfo: {
    flex: 1,

    '& p': {
      fontWeight: 500,
    },

    '& p:nth-child(2)': {
      fontSize: '10px',
    },
  },

  quantity: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '-8px',
    fontWeight: 700,

    '& > div': {
      padding: '0 5px',
    },
  },

  cost: {
    marginRight: '20px',
    alignSelf: 'flex-end',
    marginBottom: '20px',
    fontWeight: 700,
  },
});

export { useStyles };
