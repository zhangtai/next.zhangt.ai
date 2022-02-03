import React from "react";
import NextLink from "next/link";
import { Text, Container, Row, Card, Grid, Link } from "@nextui-org/react";
import styles from "../styles/Home.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Row>
        <h2 className={styles.footer}>
          <NextLink href="/" passHref>
            <Link>
              <Text h1 size={60} weight="bold">
                ZHANGT.AI
              </Text>
            </Link>
          </NextLink>
        </h2>
      </Row>
      <Row>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} lg={4}>
            <Card css={{ px: "$4" }}>
              <NextLink href="/blog">
                <Link>
                  <Text
                    h1
                    size={60}
                    css={{
                      textGradient: "45deg, $blue500 -20%, $pink500 50%",
                    }}
                    weight="bold"
                  >
                    Blog
                  </Text>
                </Link>
              </NextLink>
              <NextLink href="/about">
                <Link>
                  <Text
                    h1
                    size={60}
                    css={{
                      textGradient: "45deg, $purple500 -20%, $pink500 100%",
                    }}
                    weight="bold"
                  >
                    About
                  </Text>
                </Link>
              </NextLink>
            </Card>
          </Grid>
          <Grid xs={12} lg={8}>
            {children}
          </Grid>
        </Grid.Container>
      </Row>
      <Row>
        <footer className={styles.footer}>zhangt.ai@2022</footer>
      </Row>
    </Container>
  );
};

export { Layout };
