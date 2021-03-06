import React from "react";
import NextLink from "next/link";
import { Text, Container, Row, Col, Link } from "@nextui-org/react";
import styles from "../styles/Home.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <Container sm>
      <Container
        className="main notebook-background"
        css={{
          bg: "#fff radial-gradient(circle at bottom,#9ff0d7 1px,transparent 0) top/1px 36px;",
          position: "relative;"
        }}
        >
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
          <Col>{children}</Col>
        </Row>
      </Container>
      <Row>
        <footer className={styles.footer}>ZHANGT.AI@2022</footer>
      </Row>
    </Container>
  );
};

export { Layout };
