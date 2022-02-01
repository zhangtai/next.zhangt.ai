import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { Container, Grid, Card, Text } from "@nextui-org/react";
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

export default function BlogHome({ posts }) {
  return (
    <Layout>
      <Container>
          <div className="mt-5">
            {posts.map((post, index) => (
              <Link href={"/blog/" + post.slug} passHref key={index}>
                <Card clickable color="gradient">
                  <Text
                    css={{ fontWeight: "$bold", color: "$white" }}
                    transform="capitalize"
                    h3
                  >
                    {post.frontMatter.title}
                  </Text>
                  <Text css={{ fontWeight: "$bold", color: "$white" }} span>
                    {post.frontMatter.description}: {post.frontMatter.created}
                  </Text>
                </Card>
              </Link>
            ))}
          </div>
      </Container>
    </Layout>
  );
}
