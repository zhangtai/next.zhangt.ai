import fs from "fs"
import path from "path"
// import Link from "next/link"
import matter from "gray-matter"
import { Card, Text, Link } from "@nextui-org/react"
import { Layout } from "../../components/MainLayout"

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"))
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    )
    const { data: frontMatter } = matter(markdownWithMeta)
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
          <div className="mt-5">
            {posts.map((post, index) => (
              <Link
                href={"/blog/" + post.slug}
                key={index}
                css={{
                  w: "100%",
                  mb: "1rem"
                }}>
                <Card clickable color="gradient" w="100%">
                  <Text
                    css={{ fontWeight: "$bold", color: "$white" }}
                    transform="capitalize"
                    h3
                  >
                    {post.frontMatter.title}
                  </Text>
                  <Text css={{ fontWeight: "$bold", color: "yellow" }} span>
                    {post.frontMatter.description}: {post.frontMatter.created}
                  </Text>
                </Card>
              </Link>
            ))}
          </div>
    </Layout>
  );
}
