import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import { Container, Row, Col, Text, Link } from "@nextui-org/react";
import Mermaid from "../components/Mermaid";

import { Layout } from "../components/MainLayout";
import FancyLink from "../components/FancyLink";

import imageRainbow from "../public/images/rainbow.svg";
import imageGreeting from "../public/images/greeting.svg";
import imageHomelab from "../public/images/homelab.svg";
import imageBlog from "../public/images/blog.svg";

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
              <Image alt="greeting" src={imageGreeting} />
              <Image alt="rainbow" src={imageRainbow} />
            </Col>
            <Col
              css={{
                transform: "rotate(15deg)",
              }}
            >
              <NextLink href="/blog">
                <Link>
                  <Text
                    css={{
                      textGradient: "45deg, $blue500 -20%, $pink500 50%",
                    }}
                    weight="bold"
                  >
                    <Image alt="blog" src={imageBlog} />
                  </Text>
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
