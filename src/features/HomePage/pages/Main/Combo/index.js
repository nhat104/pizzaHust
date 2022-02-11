import { Box } from '@mui/material';
// import { v4 } from 'uuid';
import { makeStyles } from '@mui/styles';
import ListItem from 'features/HomePage/components/ListItem';
import React from 'react';

const useStyles = makeStyles({
  root: {},

  title: {
    margin: '40px 0 80px 0',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 22 / 18,
  },
});

export default function Combo() {
  const classes = useStyles();

  return (
    <div>
      <Box id="combo" className={classes.root}>
        <Box className={classes.title}>Combo khuyến mãi</Box>
        <ListItem listItem={undefined} api="http://127.0.0.1:8000/combo/" />
      </Box>
    </div>
  );
}

// const comboList = [
//   {
//     id: v4(),
//     srcImg: 'combo/combo1.png',
//     name: 'Combo Pizza Puff',
//     type: 'combo',
//     quantity: 1,
//     score_fields: 5,
//     cost: 89000,
//     numberperson: 2,
//     desc: '',
//     product: [
//       {
//         id: 10,
//         name: 'Pizza Puff_Giăm Bông & Thịt Xông Khói',
//         srcImg: 'combo/1_item1-1.png',
//         quantity: 1,
//       },
//       {
//         id: 2,
//         name: 'Pepsi Lon',
//         srcImg: 'combo/1_item2-1.png',
//         quantity: 1,
//       },
//     ],
//   },
// ];
