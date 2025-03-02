import { Flex, Group } from '@mantine/core';
import AppAuth from '@/components/AppAuth/AppAuth';
import { NavBar } from '@/components/NavBar/NavBar';

export default function AuthPage() {
  return (
    <Flex justify="flex-start" gap="xl" align="center">
      <NavBar />
      <AppAuth />
    </Flex>
  );
}
