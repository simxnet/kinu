"use client";

import Spinner from "@/components/shared/spinner";
import { Badge } from "@/components/ui/badge";
import { Button, button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { css } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { IconMoodHappyFilled } from "@tabler/icons-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInFromTopAndOutTop } from "@/lib/animation-variants";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";

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
				<Menu>
					<MenuButton className={button({ size: "sm" })}>Dropdown</MenuButton>
					<AnimatePresence>
						<MenuItems
							as={motion.div}
							variants={fadeInFromTopAndOutTop}
							initial="initial"
							animate="enter"
							exit="exit"
							className={css({
								bg: "stone.900",
								p: 2,
								w: 52,
								mt: 2,
								borderRadius: "lg",
								borderWidth: 1,
								borderColor: "stone.800",
							})}
							anchor="bottom end"
						>
							<MenuItem
								as={"div"}
								className={css({
									px: 3,
									py: 1,
									borderRadius: "md",
									_hover: { bg: "stone.800" },
									cursor: "pointer",
								})}
							>
								Search
							</MenuItem>
						</MenuItems>
					</AnimatePresence>
				</Menu>
			</Flex>
			<Flex flexDir={"column"} gap={5}>
				<Input placeholder="Hello placeholder" />
			</Flex>
		</Flex>
	);
}
