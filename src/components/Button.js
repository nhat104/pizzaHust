// import React from 'react';

// export default function Button({ name, disable }) {
//   return (
//     <button
//       style={{
//         width: '100%',
//         height: '55px',
//         fontSize: '18px',
//         lineHeight: 22 / 18,
//         fontWeight: 600,
//         borderRadius: '46.5px',
//         backgroundColor: `${disable ? '#ccc' : '#FF8000'}`,
//         color: '#fff',
//         cursor: 'pointer',
//         border: 'none',
//       }}
//     >
//       {name}
//     </button>
//   );
// }

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '55px',
    fontSize: '18px',
    lineHeight: 22 / 18,
    fontWeight: 600,
    borderRadius: '46.5px',
    color: '#fff',
    border: 'none',
    backgroundColor: (props) => (props.disable ? '#bdbdbd' : '#FF8000'),
    cursor: (props) => (props.disable ? 'default' : 'pointer'),
  },
});

export default function Button({ name, disable }) {
  const classes = useStyles({ name, disable });

  return <button className={classes.root}>{name}</button>;
}
