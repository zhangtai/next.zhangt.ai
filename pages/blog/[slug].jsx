import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { Text } from "@nextui-org/react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Layout } from "../../components/MainLayout";
import Mermaid from "../../components/Mermaid";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [require("remark-prism")] },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({ frontMatter: { title, created, updated }, mdxSource }) => {
  const timeDisplay = created === updated ? created : `${created}, ${updated}(Updated)`
  return (
    <Layout>
      <Head>
        <title>{title} ｜ ZHANGT.AI(张泰)</title>
      </Head>
      <div className="blog-wrapper">
        <Text h2 color="$red400">
          {title}
        </Text>
        <Text>{timeDisplay}</Text>
        <MDXRemote {...mdxSource} components={{ Mermaid }} />
      </div>
    </Layout>
  );
};

export default PostPage;
