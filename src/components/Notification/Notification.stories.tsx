import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Notification, type NotificationProps } from "./Notification";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const meta: Meta<typeof Notification> = {
    title: "Feedback/Notification",
    component: Notification,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "info", "success", "error", "warning"],
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
            options: ["sm" , "md" , "lg" , "long_sm" , "long_md" , "long_lg"],
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
        variant: "default",
        align: "top-right",
        title: "This is Title",
        description: "This is an informational Notification.",
        size: "sm",
        showIcon: true,
        duration: 50000,
    },
    parameters: {
        docs: {
            description: {
                component: `
The **Notification** component displays temporary feedback messages.
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

type Story = StoryObj<typeof Notification>;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Playground: Story = {
    render: (args: NotificationProps) => {
        const [show, setShow] = useState(true);
        return (
            <div>
                {show && <Notification {...args} onClose={() => setShow(false)} />}
            </div>
        );
    },
};