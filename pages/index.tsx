import type { NextPage } from "next"
import Head from "next/head"
import { Text } from "@nextui-org/react"
import { Layout } from "../components/MainLayout"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZHANGT.AI(张泰)</title>
      </Head>
      <Layout>
        <Text>
          Hi there, this is Tai Zhang(张泰).
        </Text>
      </Layout>
    </>
  );
};

export default Home;
