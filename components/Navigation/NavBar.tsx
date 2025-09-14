import { Paper, Group, Button, Container } from "@mantine/core";
import { auth } from "@/auth";
import { loginHandler, logoutHandler } from "@/lib/actions/auth/authentication";
import Logo from "./Logo";

export default async function Navbar() {
  const session = await auth();

  return (
    <Paper
      shadow="sm"
      radius="md"
      withBorder
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        position: "fixed",
        padding: "0px 0px",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(200px)", // glossy effect
      }}
    >
      {/* constrain the content */}
      <Container size={"100%"}>
        <Group justify="space-between">
          <Logo />
          <form action={session ? logoutHandler : loginHandler}>
            <Button type="submit" color="brand">
              {session ? "Log out" : "Login"}
            </Button>
          </form>
        </Group>
      </Container>
    </Paper>
  );
}
