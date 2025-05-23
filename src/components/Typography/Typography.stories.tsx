import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
    title: "Design System/Typography",
    component: Typography,
    tags: ["autodocs"],
    args: {
        children: "The quick brown fox jumps over the lazy dog",
    },
    parameters: {
        docs: {
            description: {
                component: `
The Typography component is used for all text elements in the design system.
Use the 'variant' prop to control text style (e.g., h1, paragraph, label).
Optionally override the rendered HTML tag using the 'as' prop.
Supports full dark mode, accessibility, and semantic rendering.
        `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
    args: {
        variant: "h1",
        as: "h1",
    },
};

export const Heading2: Story = {
    args: {
        variant: "h2",
        as: "h2",
    },
};

export const Paragraph: Story = {
    args: {
        variant: "paragraph",
        as: "p",
    },
};

export const Caption: Story = {
    args: {
        variant: "caption",
        as: "span",
    },
};

export const Label: Story = {
    args: {
        variant: "label",
        as: "label",
    },
};

export const Helper: Story = {
    args: {
        variant: "helper",
        as: "small",
    },
};

export const ResponsiveHeading: Story = {
    args: {
        variant: "h2",
        as: "h2",
        children: "Responsive heading (text-2xl sm:text-4xl)",
        className: "text-2xl sm:text-4xl",
    },
    parameters: {
        docs: {
            description: {
                story: "Responsive heading that adjusts size on screen width.",
            },
        },
    },
};
