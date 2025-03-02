import { Group } from '@mantine/core';
import { NavBar } from '@/components/NavBar/NavBar';

export function HomePage() {
  return (
    <Group>
      <NavBar />
      <div>Hello!</div>
    </Group>
  );
}
