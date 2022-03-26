/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Container, Row, Col, Text, Link, Grid } from "@nextui-org/react";
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
          <Grid.Container gap={2} justify="center">
            <Grid
              xs={12}
              lg={6}
              css={{
                transform: "rotate(-15deg)",
              }}
            >
              <img alt="greeting" src="/images/greeting.svg" />
            </Grid>
            <Grid
              xs={12}
              lg={6}
              css={{
                transform: "rotate(15deg)",
              }}
            >
              <img alt="locations" src="/images/locations.svg" />

            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid
              xs={12}
              lg={6}
            >
              <NextLink href="/blog">
                <Link>
                  <img
                    alt="blog"
                    src="/images/casual-life-3d-green-book-with-orange-ribbon.png"
                  />
                </Link>
              </NextLink>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} lg={6}>
              <img
                alt="greeting"
                src="/images/casual-life-3d-young-man-and-woman-standing-together.png"
              />
            </Grid>
            <Grid
              xs={12}
              lg={6}
              css={{
                transform: "rotate(15deg)",
              }}
            >
              <NextLink href="#">
                <Link>
                  <img alt="homelab" src="/images/casual-life-3d-lab.png" />
                </Link>
              </NextLink>
            </Grid>
          </Grid.Container>
        </Container>
        <Text>
          Here is <FancyLink href="/about" text="why and how" /> I built it.
        </Text>
        <Text>
          Illustration by{" "}
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
            Icons 8
          </a>{" "}
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </Text>
      </Layout>
    </>
  );
};

export default Home;
