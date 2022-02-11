import { Button, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
// import pizzaList from 'constants/Category/pizzaList';
import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  root: {},
  body: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: (props) =>
      props.laptop
        ? `repeat(3, minmax(0, 1fr))`
        : props.sm
        ? 'repeat(2, minmax(0, 1fr))'
        : 'repeat(1, minmax(0, 1fr))',
    gridGap: '20px',
  },

  moreBtn: {
    width: '100%',
    backgroundColor: '#ff8000 !important',
    borderRadius: '30px !important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function ListItem({ listItem, api }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('lMobile'));
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const laptop = useMediaQuery(theme.breakpoints.up('laptop'));
  const classes = useStyles({ laptop, tablet, sm });
  const [limit, setLimit] = useState(6);

  // API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (api) {
      async function getData() {
        const response = await fetch(api);
        const responseJSON = await response.json();
        setData(responseJSON);

        setLoading(true);
      }

      getData();
    }
  }, [api]);

  function handleMoreBtn() {
    if (api) {
      if (limit < data.length) {
        setLimit(limit + 6);
      }
    } else if (limit < listItem.length) {
      setLimit(limit + 6);
    }
  }

  return (
    <Box className={classes.root}>
      {api ? (
        loading ? (
          <>
            <Box className={classes.body}>
              {data.slice(0, limit).map((item) => (
                <Item key={item.pk} item={item} />
              ))}
            </Box>
            <Button
              className={classes.moreBtn}
              sx={{ display: limit >= data.length ? 'none' : '' }}
              variant="contained"
              onClick={handleMoreBtn}
            >
              Xem thêm
            </Button>
          </>
        ) : (
          <Box style={{ textAlign: 'center' }}>
            <CircularProgress color="success" style={{ margin: '20px auto' }} />
          </Box>
        )
      ) : (
        <>
          <Box className={classes.body}>
            {listItem.slice(0, limit).map((item) => (
              <Item key={item.pk} item={item} />
            ))}
          </Box>
          <Button
            className={classes.moreBtn}
            sx={{ display: limit >= listItem.length ? 'none' : '' }}
            variant="contained"
            onClick={handleMoreBtn}
          >
            Xem thêm
          </Button>
        </>
      )}
    </Box>
  );
}
