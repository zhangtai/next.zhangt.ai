import NextLink from "next/link";
import { Text, Container, Row, Card, Grid, Link } from "@nextui-org/react";

const FancyLink = ({href, text}: {href: string, text: string}) => {
  return (
    <NextLink href={href}>
      <Link>
        <Text
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          {text}
        </Text>
      </Link>
    </NextLink>
  );
};

export default FancyLink
