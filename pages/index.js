import {
  Box,
  Link,
  Card,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";

export default function HomePage() {
  return (
    <>
      <Card my={"7"} variant="classic" size={"4"} style={{ borderRadius: "0" }}>
        <Container py={"6"}>
          <Flex direction={"column"}>
            <Heading as="h1" mb={"4"} size={"7"}>
              This is a Cities App
            </Heading>
            <Text as="p" size={"4"}>
              Hier you can find some information about cities
            </Text>
            <Box mt={"6"}>
              <Link size="5" href="/cities">
                To the cities ➡
              </Link>
            </Box>
          </Flex>
        </Container>
      </Card>
    </>
  );
}
