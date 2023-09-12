"use client";
import { ActionIcon, Box, Button, Group, Input, Menu } from "@mantine/core";
const LeftSection = () => (
  <Menu>
    <Menu.Target>
      <ActionIcon size="xl">B</ActionIcon>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item>Settings</Menu.Item>
    </Menu.Dropdown>
  </Menu>
);
export default function HomePage() {
  return (
    <Group justify="center" pt="xl">
      <Input
        size="xl"
        // leftSectionWidth="auto"
        leftSectionPointerEvents="all"
        leftSection={<LeftSection />}
        placeholder="placeholder text"
      />
    </Group>
  );
}
