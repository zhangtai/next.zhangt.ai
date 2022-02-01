import React from "react";
import { Text, Container, Row, Card, Grid, Link } from "@nextui-org/react";
import styles from "../styles/Home.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Row>
        <h2 className={styles.footer}>
          <Link href="/">
            {" "}
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue500 -50%, $pink500 50%",
              }}
              weight="bold"
            >
              ZHANGT.AI
            </Text>
          </Link>
        </h2>
      </Row>
      {/*
      <Row>
        <Grid.Container gap={2}>
          <Grid>
            <Link color="primary" href="/">
              <Card clickable css={{ w: "260px" }}>
                <Text h4>Home</Text>
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Link css={{ color: "white" }} href="/blog">
              <Card clickable css={{ w: "260px" }} color="primary">
                <Text h4 color="white">
                  Blog
                </Text>
              </Card>
            </Link>
          </Grid>
        </Grid.Container>
      </Row>
*/}

      <Row>
        <Grid.Container gap={2} justify="center">
          <Grid xs={4}>
            <Card css={{ px: "$4" }}>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $blue500 -20%, $pink500 50%",
                }}
                weight="bold"
              >
                <Link href="/blog">Blog</Link>
              </Text>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $purple500 -20%, $pink500 100%",
                }}
                weight="bold"
              >
                Example
              </Text>
            </Card>
          </Grid>
          <Grid xs>{children}</Grid>
        </Grid.Container>
      </Row>
      <Row>
        <footer className={styles.footer}>zhangt.ai</footer>
      </Row>
    </Container>
  );
};

export { Layout };
