import { css } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Heading } from "../ui/heading";

export default function Header() {
	return (
		<header
			className={css({
				top: 0,
				position: "sticky",
				bg: "bg.900",
				w: "full",
				py: 4,
				borderBottom: 2,
				borderColor: "bg.800",
			})}
		>
			<Container w={"full"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Heading>Kinu</Heading>
					<Link
						href="https://github.com/simxnet/kinu"
						target="_blank"
						referrerPolicy="no-referrer"
					>
						<IconBrandGithubFilled />
					</Link>
				</Flex>
			</Container>
		</header>
	);
}
