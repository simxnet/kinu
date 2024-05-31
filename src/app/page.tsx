import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Flex } from "@/styled-system/jsx";

export default function Page() {
	return (
		<Flex flexDir={"column"} gap={2}>
			<Badge color="purple">The best template!</Badge>
			<Heading size="5xl">Kinu</Heading>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias omnis
				voluptate neque, sequi dolores esse nobis reprehenderit recusandae nam
				praesentium atque sunt nihil labore voluptas cupiditate perspiciatis
				adipisci exercitationem tempora.
			</p>
		</Flex>
	);
}
