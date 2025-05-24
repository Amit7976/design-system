import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import { Search, AlertCircle } from "lucide-react";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const meta: Meta<typeof TextInput> = {
    title: "Data Entry/TextInput",
    component: TextInput,
    tags: ["autodocs"],
    args: {
        placeholder: "Enter text",
        size: "md",
        disabled: false,
        error: false,
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl" , "2xl"],
        },
        error: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        iconLeft: {
            control: "boolean",
        },
        iconRight: {
            control: "boolean",
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
The \`TextInput\` component is used for standard text entry.
Supports various states (focus, error, disabled), sizes, dark mode, and accessibility.

**Note**: To properly view dark mode styles, switch your browser or system theme to dark mode.
        `,
            },
        },
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default meta;
type Story = StoryObj<typeof TextInput>;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Playground: Story = {
    args: {
        iconLeft: <Search size={16} />,
        placeholder: "Type here...",
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const WithLeftIcon: Story = {
    args: {
        iconLeft: <Search size={16} />,
        placeholder: "Search...",
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const WithRightIcon: Story = {
    args: {
        iconRight: <Search size={16} />,
        placeholder: "Search...",
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ErrorState: Story = {
    args: {
        error: true,
        errorMessage: "This field is required",
        iconRight: <AlertCircle size={16} />,
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Disabled input",
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const DarkModeExample: Story = {
    args: {
        placeholder: "Dark mode input",
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};