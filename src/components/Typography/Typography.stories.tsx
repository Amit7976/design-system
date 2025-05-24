import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import "../../App.css";
import {
    sizeMap,
    weightMap,
    colorMap,
    alignMap,
    spacingMap,
} from "./tokens/typography";

const meta: Meta<typeof Typography> = {
    title: "Design System/Typography",
    component: Typography,
    tags: ["autodocs"],
    args: {
        children: "The quick brown fox jumps over the lazy dog",
        darkMode: false, // default light mode
    },
    parameters: {
        docs: {
            description: {
                component: `
      The Typography component is used for all text elements in the design system.
      
      ## Usage Examples

      
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="paragraph" size="lg" weight="medium">
        Large paragraph with medium weight
      </Typography>
      <Typography variant="label" color="primary" spacing="wide">
        Label with wide letter spacing
      </Typography>
      
      
      ## Naming Conventions
      You can control:
      - *variant*: h1 to h6, paragraph, label, caption, helper
      - *size*: xs, sm, base, lg, xl, etc.
      - *weight*: light, normal, medium, semibold, bold
      - *color*: primary, secondary, danger, muted, etc.
      - *spacing*: tighter, normal, wide, etc.
      - *align*: left, center, right
      
      
      ## Accessibility Notes

      - Use the \`variant\` prop to control text style (e.g., h1, paragraph, label).
      - Optionally override the rendered HTML tag using the \`as\` prop.
      - Supports full **accessibility** and semantic rendering.
      - To properly preview **dark mode**, make sure your browser or system theme is set to dark — the component uses Tailwind's \`dark:\` variants which depend on that setting.
            `,
            },
        },
    },
      
    argTypes: {
        darkMode: {
            control: "boolean",
            description: "Toggle dark mode background and text",
        },
        variant: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "paragraph", "label", "caption", "helper"],
        },
        as: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "label", "small", "div"],
        },
        size: {
            control: "select",
            options: Object.keys(sizeMap),
        },
        weight: {
            control: "select",
            options: Object.keys(weightMap),
        },
        color: {
            control: "select",
            options: Object.keys(colorMap),
        },
        align: {
            control: "select",
            options: Object.keys(alignMap),
        },
        spacing: {
            control: "select",
            options: Object.keys(spacingMap),
        },
    },
    decorators: [
        (Story, context) => {
            const isDark = context.args.darkMode;
            return (
                <div
                    style={{
                        backgroundColor: isDark ? "#111827" : "#ffffff",
                        color: isDark ? "#f9fafb" : "#111827",
                        padding: "2rem",
                        minHeight: "100vh",
                        transition: "all 0.3s ease",
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
    args: {
        variant: "p",
        as: "p",
        size: "base",
        color: 'primary',
        weight: "normal",
        spacing: "normal",
        align: "left",
        title: "Typography Playground",
        darkMode: false,
    }
};
