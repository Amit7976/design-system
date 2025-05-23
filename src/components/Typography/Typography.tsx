import type { ReactNode, ElementType } from "react";
import { typography } from "../../tokens/typography";

export type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "paragraph"
    | "caption"
    | "label"
    | "helper";

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement> {
    variant: Variant;
    children: ReactNode;
    as?: ElementType;
}

export const Typography = ({
    variant,
    children,
    as,
    className = "",
    ...rest
}: TypographyProps) => {
    let defaultTag: ElementType = "p";

    if (variant === "h1") defaultTag = "h1";
    else if (variant === "h2") defaultTag = "h2";
    else if (variant === "h3") defaultTag = "h3";
    else if (variant === "h4") defaultTag = "h4";
    else if (variant === "h5") defaultTag = "h5";
    else if (variant === "h6") defaultTag = "h6";
    else if (variant === "caption") defaultTag = "span";
    else if (variant === "label") defaultTag = "label";
    else if (variant === "helper") defaultTag = "small";

    const Tag = as || defaultTag;
    const classes = typography[variant] || "";

    return (
        <Tag className={`${classes} ${className}`} {...rest}>
            {children}
        </Tag>
    );
};
