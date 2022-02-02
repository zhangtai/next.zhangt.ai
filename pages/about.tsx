import type { NextPage } from "next";
import Head from "next/head";
import { Text, Link } from "@nextui-org/react";
import { Layout } from "../components/MainLayout";

const AboutSite: NextPage = () => {
  return (
    <>
      <Head>
        <title>About this website ｜ ZHANGT.AI(张泰)</title>
      </Head>
      <Layout>
        <p>
          <Text>
            This website is build with Next.js and NextUI. I started it from
            30-Jan-2022, after exploring{" "}
            <Link icon href="https://github.com/trending">
              GitHub Trending
            </Link>{" "}
            of that day and found the NextUI repository, so I wanted to give it
            a try, the best you can do to learn something is to get your hands
            dirty and try it.
          </Text>
          <Text>
            Before using this stack, I have been used to build my blog with
            Hugo, Next.js + Tailwind + Contentful. Both are excellent and
            absolute satisfy my requirements, but I just do not want to
            comfortable with something and want to try new ones.
          </Text>
          <Text>
            When building this website, I started from scratch, learnt and
            borrowed a lot from the article from internet. Here are some
            references I can remember.
          </Text>
          <ul>
            <li>
              <Link
                icon
                href="https://nextjs.org/docs/advanced-features/using-mdx"
              >
                Using MDX with Next.js
              </Link>
            </li>
            <li>
              <Link
                icon
                href="https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/"
              >
                <a>Building a Blog With Next.js and MDX</a>
              </Link>
            </li>
            <li>
              <Link icon href="https://github.com/hashicorp/next-mdx-remote">
                <a>hashicorp/next-mdx-remote</a>
              </Link>
            </li>
          </ul>
          <Text>
            There are still something I need to work to improve in current
            approach:
            <ul>
              <li>
                Navbar, the official component of NextUI is coming soon, I want
                to wait for it
              </li>
              <li>
                <Text del>
                  SyntaxHighlighter approach for code fence no highlight the
                  snippet itself in VSCode
                </Text>
              </li>
            </ul>
          </Text>
        </p>
      </Layout>
    </>
  );
};

export default AboutSite;
