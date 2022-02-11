import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@mui/styles';
import { logout } from 'features/Authentication/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  navList: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '0 30px 0 0',
    backgroundColor: '#fff',
    position: 'fixed !important',
    width: '8.3333%',
    height: '100vh',
    '& a': {
      margin: '12px 0',
    },
    '& li': {
      justifyContent: 'center',
      height: '46px',
      width: '46px',
      display: 'inline-grid',
    },
    '& > li': {
      margin: '12px 0',
    },
  },
  navIcon: {
    cursor: 'pointer',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow:
      '4px 4px 4px rgba(156, 156, 156, 0.1), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'transform 0.5s',

    '& svg': {
      fill: '#D2D2D2',
    },
    '&:hover': {
      backgroundColor: '#fff',
      cursor: 'pointer',
      transform: 'scale(1.2)',
      boxShadow:
        '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
      '& svg': {
        fill: '#ff8001',
      },
    },
  },
  active: {
    borderRadius: '45px',
    backgroundColor: '#ff8001 !important',
    transform: 'scale(1.2)',
    '& svg': {
      fill: '#fff',
    },
    '&:hover': {
      backgroundColor: '#fff',
      cursor: 'pointer',
      transform: 'scale(1.2)',
      boxShadow:
        '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
      '& svg': {
        fill: '#fff',
      },
    },
  },
});

export default function NavBarLeft() {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(1);
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem('tokenHUST') || '';
  const dispatch = useDispatch();

  const handleUserInfo = () => {
    navigate('/personal', { replace: true });
    setIsActive(5);
  };

  const handleLogin = () => {
    if (!tokenUser) {
      navigate('/login', { replace: true });
    } else {
      dispatch(logout());
      navigate('/home', { replace: true });
    }
  };

  return (
    <List className={classes.navList}>
      {nav.map((item) => (
        <a key={item.id} href={item.link}>
          <ListItem
            className={`${classes.navIcon}  ${
              isActive === item.id ? classes.active : ''
            } `}
            onClick={() => setIsActive(item.id)}
          >
            {/* <Box onClick={() => navigate(`${item.link}`, { replace: true })}> */}
            {item.icon}
            {/* </Box> */}
          </ListItem>
        </a>
      ))}

      <Divider variant="middle" flexItem sx={{ mt: '10px', mb: '10px' }} />

      <Box sx={{ display: tokenUser ? 'block' : 'none' }}>
        <ListItem
          key={5}
          className={`${classes.navIcon}  ${
            isActive === 5 ? classes.active : ''
          } `}
          onClick={handleUserInfo}
        >
          <PersonOutlinedIcon sx={{ fontSize: 30 }} />
        </ListItem>
      </Box>

      <ListItem className={classes.navIcon} onClick={handleLogin}>
        <LogoutOutlinedIcon
          sx={{ fontSize: 30, transform: tokenUser ? 'rotate(180deg)' : '' }}
        />
      </ListItem>
    </List>
  );
}

const nav = [
  {
    id: 1,
    name: 'HomePage',
    link: '/',
    icon: (
      <svg
        className="home_icon_component"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 20.7957 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H9H15H19C19.7957 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7957 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V21ZM10 21V13H14V21H10Z"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4:11"
            x1="-17"
            y1="-16"
            x2="22"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0370641" stopColor="#FF8001" />
            <stop offset="0.370021" stopColor="#FE9935" />
            <stop offset="0.582424" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#D0D0D0" stopOpacity="0.74" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Sale',
    link: '#combo',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="24px"
        height="24px"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 464 496"
      >
        <path d="M44 278l160 192q21 24 49 24q25 0 43-15l139-117q20-18 23-45q3-25-15-49L283 76q-26-34-68-43L76 1q-20-6-38 9L21 25Q6 36 6 61l8 143q5 43 30 74zM68 42l141 34q22 5 44 27l160 192q8 8 5 18q0 6-9 17L270 447q-7 6-17 5.5t-15-7.5L78 253q-19-24-19-49L49 57zm57 70q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15zm11 149l196 62h7q14 0 21-15q3-8-1-16t-12-11l-196-62q-8-4-16.5 0T123 231q-6 23 13 30zm160 96q0 13-9 22.5t-23 9.5t-23-9.5t-9-22.5t9.5-22.5T264 325t22.5 9.5T296 357zm-64-170q0 13-9.5 22.5T200 219t-22.5-9.5T168 187t9-22.5t23-9.5t23 9.5t9 22.5z" />
        <defs>
          <linearGradient
            id="paint0_linear_4:11"
            x1="-17"
            y1="-16"
            x2="22"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0370641" stopColor="#FF8001" />
            <stop offset="0.370021" stopColor="#FE9935" />
            <stop offset="0.582424" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#D0D0D0" stopOpacity="0.74" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Category',
    link: '#category',
    icon: (
      <svg
        width="26px"
        height="26px"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.5 9.002C7.69825 9.002 7.88838 8.92324 8.02856 8.78306C8.16875 8.64288 8.2475 8.45275 8.2475 8.2545C8.2475 8.05625 8.16875 7.86612 8.02856 7.72594C7.88838 7.58575 7.69825 7.507 7.5 7.507C7.30175 7.507 7.11162 7.58575 6.97144 7.72594C6.83125 7.86612 6.7525 8.05625 6.7525 8.2545C6.7525 8.45275 6.83125 8.64288 6.97144 8.78306C7.11162 8.92324 7.30175 9.002 7.5 9.002V9.002ZM11.223 10.255C11.223 10.4532 11.1442 10.6434 11.0041 10.7836C10.8639 10.9237 10.6737 11.0025 10.4755 11.0025C10.2773 11.0025 10.0871 10.9237 9.94694 10.7836C9.80675 10.6434 9.728 10.4532 9.728 10.255C9.728 10.0567 9.80675 9.86662 9.94694 9.72644C10.0871 9.58625 10.2773 9.5075 10.4755 9.5075C10.6737 9.5075 10.8639 9.58625 11.0041 9.72644C11.1442 9.86662 11.223 10.0567 11.223 10.255ZM7.504 13.508C7.60262 13.508 7.70028 13.4886 7.7914 13.4508C7.88251 13.4131 7.9653 13.3578 8.03504 13.288C8.10477 13.2183 8.16009 13.1355 8.19783 13.0444C8.23558 12.9533 8.255 12.8556 8.255 12.757C8.255 12.6584 8.23558 12.5607 8.19783 12.4696C8.16009 12.3785 8.10477 12.2957 8.03504 12.226C7.9653 12.1562 7.88251 12.1009 7.7914 12.0632C7.70028 12.0254 7.60262 12.006 7.504 12.006C7.30482 12.006 7.1138 12.0851 6.97296 12.226C6.83212 12.3668 6.753 12.5578 6.753 12.757C6.753 12.9562 6.83212 13.1472 6.97296 13.288C7.1138 13.4289 7.30482 13.508 7.504 13.508V13.508ZM4 3.956C4 2.861 4.895 1.934 6.03 2.004C10.477 2.278 14.377 3.774 17.432 6.691C18.299 7.518 18.128 8.869 17.229 9.559C15.83 10.639 14.4216 11.7067 13.004 12.762V14.502C13.004 15.219 12.449 16.002 11.504 16.002C11.323 16.002 11.156 15.972 11.006 15.922V16.005C11.006 16.718 10.45 17.496 9.503 17.496C8.749 17.496 8.252 17 8.077 16.446C7.529 16.856 6.93 17.302 6.395 17.7C5.405 18.437 4 17.73 4 16.5V3.956ZM11.005 14.502C11.005 14.761 11.2 15.002 11.504 15.002C11.809 15.002 12.004 14.759 12.004 14.502V12.508C12.0041 12.4292 12.0228 12.3515 12.0586 12.2813C12.0944 12.2111 12.1463 12.1503 12.21 12.104C12.99 11.538 14.318 10.529 15.494 9.63C12.801 7.067 9.026 5.546 5 5.514V16.499C5.00028 16.5915 5.02622 16.6821 5.07493 16.7608C5.12365 16.8394 5.19323 16.903 5.27594 16.9445C5.35865 16.986 5.45124 17.0037 5.54341 16.9956C5.63558 16.9876 5.72371 16.9541 5.798 16.899C6.584 16.313 7.511 15.623 8.207 15.101C8.28128 15.0453 8.36962 15.0114 8.4621 15.003C8.55458 14.9947 8.64755 15.0123 8.73061 15.0538C8.81366 15.0953 8.88351 15.1591 8.93233 15.2381C8.98114 15.3171 9.007 15.4081 9.007 15.501V16.005C9.007 16.252 9.197 16.497 9.503 16.497C9.56852 16.4986 9.63369 16.487 9.69467 16.463C9.75564 16.439 9.81118 16.403 9.85798 16.3571C9.90479 16.3112 9.94192 16.2564 9.96717 16.1959C9.99242 16.1355 10.0053 16.0705 10.005 16.005V14.502C10.005 14.3694 10.0577 14.2422 10.1514 14.1484C10.2452 14.0547 10.3724 14.002 10.505 14.002C10.6376 14.002 10.7648 14.0547 10.8586 14.1484C10.9523 14.2422 11.005 14.3694 11.005 14.502V14.502ZM16.619 8.767C17.084 8.41 17.119 7.774 16.741 7.413C13.884 4.686 10.221 3.263 5.969 3.001C5.45 2.969 5 3.395 5 3.956V4.514C9.327 4.547 13.402 6.201 16.297 9.014L16.619 8.767Z" />
        <defs>
          <linearGradient
            id="paint0_linear_4:11"
            x1="-17"
            y1="-16"
            x2="22"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0370641" stopColor="#FF8001" />
            <stop offset="0.370021" stopColor="#FE9935" />
            <stop offset="0.582424" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#D0D0D0" stopOpacity="0.74" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Menu',
    link: '#menu',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="24px"
        height="24px"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98v9.47z" />
        <path d="M13.98 11.01c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.54-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83c-.05.41-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39c-.08.01-.16.03-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83c-.05.41-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83c-.05.41-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03z" />
        <defs>
          <linearGradient
            id="paint0_linear_4:11"
            x1="-17"
            y1="-16"
            x2="22"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0370641" stopColor="#FF8001" />
            <stop offset="0.370021" stopColor="#FE9935" />
            <stop offset="0.582424" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#D0D0D0" stopOpacity="0.74" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
