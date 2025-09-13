"use client";

import { Card, Text, Button, SimpleGrid, Group } from "@mantine/core";

function TravelCard({ title, description }: { title: string; description: string }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text size="lg" fw={500} mb="sm">
        {title}
      </Text>
      <Text size="sm" c="dimmed" mb="md">
        {description}
      </Text>

      {/* Button stays inline, only as wide as needed */}
      <Group justify="flex-start">
        <Button color="brand">Explore Now</Button>
      </Group>
    </Card>
  );
}

export default function CardsGrid() {
  const data = [
    {
      title: "Discover Paris 🇫🇷",
      description: "Curated itinerary with the Eiffel Tower, Louvre, and hidden cafés.",
    },
    {
      title: "Explore Bali 🌴",
      description: "Relax on beaches, visit temples, and discover cultural gems.",
    },
    {
      title: "Adventure in Tokyo 🗼",
      description: "Blend of tradition and modern life, sushi spots, and neon nights.",
    },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
      {data.map((item) => (
        <TravelCard key={item.title} title={item.title} description={item.description} />
      ))}
    </SimpleGrid>
  );
}
