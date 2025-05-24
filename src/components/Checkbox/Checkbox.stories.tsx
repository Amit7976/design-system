import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import "../../App.css";

const meta: Meta<typeof Checkbox> = {
    title: "Data Entry/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    args: {
        label: "Accept Terms & Conditions",
        id: "checkbox",
    },
    parameters: {
        docs: {
            description: {
                component: `
The **Checkbox** component supports multiple sizes, states, accessibility, theming, and keyboard navigation.

👉 To see dark mode in action, toggle your browser theme or use the 'dark' background in Storybook.
        `,
            },
        },
    },
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        disabled: { control: "boolean" },
        defaultChecked: { control: "boolean" },
        error: { control: "boolean" },
        errorMessage: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
    args: {
        size: "medium",
        label: "Subscribe to newsletter",
        defaultChecked: true,
        disabled: false,
        error: false,
        errorMessage: "",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            <Checkbox id="small" label="Small" size="small" />
            <Checkbox id="medium" label="Medium" size="medium" />
            <Checkbox id="large" label="Large" size="large" />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            <Checkbox id="default" label="Default" />
            <Checkbox id="checked" label="Checked" defaultChecked />
            <Checkbox id="error" label="With error" error errorMessage="Field is required" />
            <Checkbox id="disabled" label="Disabled" disabled />
            <Checkbox id="disabledChecked" label="Disabled Checked" disabled defaultChecked />
        </div>
    ),
};

export const DarkModeExample: Story = {
    args: {
        size: "medium",
        label: "Subscribe to newsletter",
        defaultChecked: false,
        disabled: false,
        error: false,
        errorMessage: "",
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};
