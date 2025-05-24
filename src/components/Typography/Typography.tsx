import React from 'react';
import {
    sizeMap,
    weightMap,
    colorMap,
    alignMap,
    spacingMap,
} from './tokens/typography';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


type Size = keyof typeof sizeMap;
type Weight = keyof typeof weightMap;
type Color = keyof typeof colorMap;
type Align = keyof typeof alignMap;
type Spacing = keyof typeof spacingMap;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface TypographyProps {
    as?: React.ElementType;
    size?: Size;
    weight?: Weight;
    color?: Color;
    align?: Align;
    spacing?: Spacing;
    id?: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "caption" | "helper";
    darkMode?: boolean;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Typography: React.FC<TypographyProps> = ({
    as = 'p',
    variant = 'p',
    size = 'base',
    weight = 'normal',
    color = 'primary',
    align = 'left',
    spacing = 'normal',
    id,
    title,
    className = '',
    children,
}) => {
    const Tag = as;
    const classes = [
        variant,
        sizeMap[size],
        weightMap[weight],
        colorMap[color],
        alignMap[align],
        spacingMap[spacing],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Tag id={id} title={title} className={classes}>
            {children}
        </Tag>
    );
};