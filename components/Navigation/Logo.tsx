import Image from "next/image";
import Link from "next/link";
import { Text } from "@mantine/core";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", padding: "16px" }}>
      {/* <Image
        src="/logo.png"
        alt="Roamfluencer logo"
        width={70}
        height={70}
        priority
      /> */}
    <Text size="md" c="dimmed">TravelX</Text>
    </Link>
  );
}
