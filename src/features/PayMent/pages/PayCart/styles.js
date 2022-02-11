import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  container: {
    cursor: 'default',
  },

  cart: {
    height: (props) => (props.tablet ? '100vh' : 'none'),
    padding: (props) =>
      props.tablet ? '77px 70px 28px 69px' : '30px 20px 10px 30px',
    paddingLeft: (props) => (props.lMobile ? '30px' : '10px'),
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
    gap: '10px',
    minHeight: '80px',
    alignItems: 'center',
    fontSize: (props) => (props.tablet ? '16px' : '14px'),
    lineHeight: 5 / 4,
    fontWeight: 600,
    background: '#fff2e0',
    borderRadius: '100px 0 0 100px',

    '& img': {
      height: (props) => (props.tablet ? '120px' : '100px'),
      width: (props) => (props.tablet ? '120px' : '100px'),
      objectFit: 'contain',
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

  desc: {
    fontSize: '12px',
    fontWeight: 500,
    display: (props) => (props.lMobile ? 'block' : 'none'),
  },

  cost: {
    marginRight: '20px',
    fontWeight: 700,
  },

  total: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',

    '& > span': {
      bottom: 0,
      color: '#ff8000',
      fontSize: '12px',
      fontWeight: 700,
      cursor: 'pointer',
      alignSelf: 'end',
    },
  },
  fee: {
    '& > table': {
      fontSize: '14px',
      fontWeight: 500,
      '& > tr': {
        '& td span': {
          color: '#ff8000',
        },
      },
    },
  },
});

export { useStyles };
