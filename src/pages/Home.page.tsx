import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Group } from '@mantine/core';
import { NavBar } from '@/components/NavBar/NavBar';
import { useAuth } from '@/contexts/AuthContext';

export function HomePage() {
  const { authInitialized, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authInitialized && !user) {
      navigate('/auth');
    }
  });
  return (
    <Group>
      <NavBar />
      <div>hello!</div>
    </Group>
  );
}
