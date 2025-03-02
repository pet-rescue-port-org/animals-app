import classes from '../../NavBar/NavBar.module.scss';
import { IconLogin, IconLogout, IconUser } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';
import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/firebaseConfig';

export default function AuthBtns() {
  const { authInitialized, user } = useAuth();
  const navigate = useNavigate();

  const renderLogoutBtn = () => {
    return (
      <a
        href="#"
        className={classes.link}
        onClick={() => {
          auth.signOut();
          navigate('/auth');
        }}
      >
        <IconLogout className={classes.linkIcon} stroke={1.5} />
        <span>Logout</span>
      </a>
    );
  };

  const renderLoginSignUpBtns = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a
          href="#"
          className={classes.link}
          onClick={() => {
            navigate('/auth');
          }}
        >
          <IconLogin className={classes.linkIcon} stroke={1.5} />
          <span>Login</span>
        </a>
        <a
          href="#"
          className={classes.link}
          onClick={() => {
            navigate('/auth');
          }}
        >
          <IconUser className={classes.linkIcon} stroke={1.5} />
          <span>Register</span>
        </a>
      </div>
    );
  };

  if (!authInitialized) {
    return <LoadingOverlay />;
  }

  return <>{user ? renderLogoutBtn() : renderLoginSignUpBtns()}</>;
}
