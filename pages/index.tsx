/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Container, Row, Col, Text, Link } from "@nextui-org/react";
import Mermaid from "../components/Mermaid";

import { Layout } from "../components/MainLayout";
import FancyLink from "../components/FancyLink";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZHANGT.AI(张泰)</title>
      </Head>
      <Layout>
        <Container>
          <Row>
            <Col
              css={{
                transform: "rotate(-15deg)",
              }}
            >
              <img alt="greeting" src="/images/greeting.svg" />
              <img alt="rainbow" src="/images/rainbow.svg" />
            </Col>
            <Col
              css={{
                transform: "rotate(15deg)",
              }}
            >
              <NextLink href="/blog">
                <Link>
                    <img alt="blog" src="/images/blog.svg" />
                </Link>
              </NextLink>
            </Col>
          </Row>
          <Row justify="center" align="center">
              <Mermaid
                chart={`
    graph RL
    Blog[My Blog] --> Next[Next.js]
    Blog --> NextUI[NextUI]
    Blog --> Mermaid[Mermaidjs]
    Next --> React[React]
    React --> ts[TypeScript]
    NextUI --> Geist[Geist]
    Blog --> MDX[MDX]
    `}
              />
          </Row>
        </Container>
        <Text>
          Here is <FancyLink href="/about" text="why and how" /> I built
          it.
        </Text>
      </Layout>
    </>
  );
};

export default Home;
