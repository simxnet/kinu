"use client";

import Spinner from "@/components/shared/spinner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { css } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { IconMoodHappyFilled } from "@tabler/icons-react";

export default function Page() {
	return (
		<Flex flexDir={"column"} gap={2}>
			<Badge color="primary">
				Still work-in-progress{" "}
				<IconMoodHappyFilled size={16} className={css({ ml: 1 })} />
			</Badge>
			<Heading size="5xl">Kinu</Heading>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				perferendis aperiam culpa error est deleniti molestiae doloremque
				obcaecati sit sapiente velit, vero asperiores quae, voluptate illo
				veniam, ullam earum. Magnam!
			</Text>
			<Flex gap={2} alignItems={"end"}>
				<Button size="lg" disabled>
					Large disabled
				</Button>
				<Button size="lg" disabled>
					<Spinner />
					Large loading
				</Button>
				<Button size="lg">Large</Button>
				<Button size="md">Medium</Button>
				<Button size="sm">Small</Button>
			</Flex>
			<Flex flexDir={"column"} gap={5}>
				<Input placeholder="Hello placeholder" />
			</Flex>
		</Flex>
	);
}
