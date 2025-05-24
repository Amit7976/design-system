import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast, type ToastProps } from "./Toast";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const meta: Meta<typeof Toast> = {
    title: "Feedback/Toast",
    component: Toast,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["info", "success", "error", "warning"],
        },
        align: {
            control: "select",
            options: [
                "top-left",
                "top-center",
                "top-right",
                "bottom-left",
                "bottom-center",
                "bottom-right",
            ],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        showIcon: {
            control: "boolean",
        },
        duration: {
            control: "number",
            description: "Auto close time in milliseconds",
        },
        title: {
            control: "text",
        },
        description: {
            control: "text",
        },
    },
    args: {
        variant: "info",
        align: "top-right",
        title: "Info",
        description: "This is an informational toast.",
        size: "md",
        showIcon: true,
        duration: 50000,
    },
    parameters: {
        docs: {
            description: {
                component: `
The **Toast** component displays temporary feedback messages.
Supports various **variants**, **sizes**, **icons**, **alignment**, and **theming**.
Set \`autoClose\` duration (default: 5000ms) and toggle dark mode using browser theme.
        `,
            },
        },
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default meta;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Story = StoryObj<typeof Toast>;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Playground: Story = {
    render: (args: ToastProps) => {
        const [show, setShow] = useState(true);
        return (
            <div>
                {show && <Toast {...args} onClose={() => setShow(false)} />}
            </div>
        );
    },
};