import type { NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link";
import { Text, Link } from "@nextui-org/react"
import { Layout } from "../components/MainLayout"
import FancyLink from "../components/FancyLink";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZHANGT.AI(张泰)</title>
      </Head>
      <Layout>
        <Text>
          Hi there, this is Zhang Tai(张泰, pronounce like /dʒʌŋ taɪ/). I write <FancyLink href="/blog" text="Blog" /> on this website, if you interest, read <FancyLink href="/about" text="why and how" /> I built it.
        </Text>
      </Layout>
    </>
  );
};

export default Home;
