import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const badge = cva({
	base: {
		fontWeight: "medium",
		borderRadius: "sm",
		w: "fit",
	},
	variants: {
		color: {
			red: {
				color: "red.500",
				bg: "red.950",
			},
			green: {
				color: "green.500",
				bg: "green.950",
			},
			blue: {
				color: "blue.500",
				bg: "blue.950",
			},
			yellow: {
				color: "yellow.500",
				bg: "yellow.950",
			},
			purple: {
				color: "purple.500",
				bg: "purple.950",
			},
		},
		size: {
			md: {
				fontSize: "sm",
				px: "2",
				py: "0.5",
			},
			lg: {
				fontSize: "md",
				px: "3",
				py: "1",
				borderRadius: "md",
			},
		},
		isUppercase: {
			true: {
				textTransform: "uppercase",
			},
		},
	},
	defaultVariants: {
		color: "red",
		size: "md",
		isUppercase: false,
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;

export const Badge = styled("span", badge);
