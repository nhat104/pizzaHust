import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '21px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  logo: {
    display: (props) => (props.tablet ? 'block' : 'none'),
    '& img': {
      marginLeft: 'auto',
      display: 'block',
      cursor: 'pointer',
    },
  },

  product: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginTop: '18px',
    overflow: 'auto',
    marginBottom: '40px',
  },

  productList: {
    flex: 1,
    overflow: 'auto',
    '& > div:first-child': {
      marginTop: '30px',
    },
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

  text: {
    fontSize: '18px',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'space-between',
  },

  productItem: {
    height: (props) => (props.laptop ? '80px' : '55px'),
    backgroundColor: '#FFECD1',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    borderRadius: '57px',
    fontSize: (props) => (props.laptop ? '16px' : '14px'),

    '& img': {
      width: '100px',
      marginLeft: '-5px',
      transition: 'all 0.5s',
      '&:hover': {
        transform: 'rotate(20deg)',
      },
    },

    '& p': {
      margin: '6px 0 2px 0',
    },
  },

  image: {
    flex: 2,
    maxWidth: '120px',
    '& img': {
      width: '100%',
    },
  },

  itemInfo: {
    flex: 2,

    '& p': {
      fontWeight: 500,
    },

    '& p:nth-child(2)': {
      fontSize: '10px',
    },
  },

  itemName: {
    display: 'WebkitBox',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    maxHeight: '2.4rem',
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
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
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    height: '55px',
    justifyContent: 'space-around',
  },
});

export { useStyles };
