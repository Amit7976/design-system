import React from "react";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export type TextInputProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    size?: "sm" | "md" | "lg";
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    className?: string;
    ariaLabel?: string;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const TextInput: React.FC<TextInputProps> = ({
    id,
    name,
    type = "text",
    value,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    disabled = false,
    error = false,
    errorMessage,
    size = "md",
    iconLeft,
    iconRight,
    className = "",
    ariaLabel,
}) => {
    const baseStyles =
        "w-full rounded-md border px-3 py-2 text-sm outline-none transition-all bg-white dark:bg-zinc-900";
    const sizeStyles =
        size === "sm"
            ? "text-sm py-1.5"
            : size === "lg"
                ? "text-lg py-3"
                : "text-base py-2";
    const borderStyles = error
        ? "border-red-500 text-red-600 placeholder:text-red-400 focus:ring-red-500 focus:border-red-500"
        : "border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500";
    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:border-gray-400 dark:hover:border-zinc-500";
    const iconPadding =
        (iconLeft ? "pl-10 " : "") + (iconRight ? "pr-10 " : "");

    return (
        <div className="relative w-full">
            {iconLeft && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 pointer-events-none">
                    {iconLeft}
                </div>
            )}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                disabled={disabled}
                aria-label={ariaLabel}
                className={`${baseStyles} ${sizeStyles} ${borderStyles} ${disabledStyles} ${iconPadding} ${className}`}
            />
            {iconRight && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 pointer-events-none">
                    {iconRight}
                </div>
            )}
            {error && errorMessage && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-500" role="alert">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};