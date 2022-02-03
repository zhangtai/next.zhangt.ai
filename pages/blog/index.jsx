import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { Card, Text, Link } from "@nextui-org/react";
import { Layout } from "../../components/MainLayout";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

const BlogHome = ({ posts }) => {
  const sortedPosts = posts.sort(
    (first, second) => first.frontMatter.created - second.frontMatter.created
  )
  return (
    <Layout>
      <Head>
        <title>Blog | ZHANGT.AI(张泰)</title>
      </Head>
      <div className="mt-5">
        {sortedPosts.map((post, index) => (
          <Link
            href={"/blog/" + post.slug}
            key={index}
            css={{
              w: "100%",
              mb: "1rem",
            }}
          >
            <Card clickable w="100%">
              <Text
                css={{ fontWeight: "$bold", color: "$red400" }}
                transform="capitalize"
                h3
              >
                {post.frontMatter.title}
              </Text>
              <Text css={{ fontWeight: "$bold", color: "$gray500" }} span>
                {post.frontMatter.description}: {post.frontMatter.created}
              </Text>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default BlogHome;
