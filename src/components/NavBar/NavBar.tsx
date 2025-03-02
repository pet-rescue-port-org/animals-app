import { useState } from 'react';
import classes from './NavBar.module.scss';
import { IconHome, IconPaw } from '@tabler/icons-react';
import { Group, Title } from '@mantine/core';
import AuthBtns from '../AppAuth/AuthBtns/AuthBtns';

const data = [
  { link: '/home', label: 'Home', icon: IconHome },
  { link: '/animals', label: 'Animals', icon: IconPaw },
];

export function NavBar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <Title order={1} className={classes.title}>
            Animals App
          </Title>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <AuthBtns />
      </div>
    </nav>
  );
}
