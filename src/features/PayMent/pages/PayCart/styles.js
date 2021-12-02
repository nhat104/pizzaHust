import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  container: {
    marginLeft: '25px',
    cursor: 'default',
  },

  cart: {
    height: '100vh',
    padding: '77px 70px 28px 69px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px 0 0 0',

    '& > span': {
      fontSize: '18px',
      lineHeight: 22 / 18,
      fontWeight: 700,
      marginBottom: '10px',
    },
  },

  productList: {
    marginRight: '-20px',
    flex: 1,
    overflow: 'auto',

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

  productItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    lineHeight: 5 / 4,
    fontWeight: 600,

    '& img': {
      width: '120px',
    },

    '& p, span': {
      margin: '4px',
    },
  },

  itemInfo: {
    flex: 1,
  },

  quantity: {
    display: 'flex',
    alignItems: 'center',

    '& > div': {
      padding: '0 10px',
    },
  },

  price: {
    marginRight: '20px',
    fontWeight: 700,
  },

  total: {
    position: 'relative',
    height: '100px',

    '& > span': {
      position: 'absolute',
      bottom: 0,
      color: '#ff8000',
      fontSize: '12px',
      fontWeight: 700,
      cursor: 'pointer',
    },
  },
  fee: {
    float: 'right',
    '& > p': {
      fontWeight: 700,
      margin: '10px 0',
      '& > span': {
        marginLeft: '52px',
        '& span': {
          color: '#ff8000',
        },
      },
    },
    '& > p:last-child': {
      fontSize: '20px',
    },
  },
});

export { useStyles };
