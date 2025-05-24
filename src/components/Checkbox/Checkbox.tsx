import React from "react";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


interface CheckboxProps {
    id: string;
    label: string;
    size?: "small" | "medium" | "large";
    defaultChecked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    size = "medium",
    defaultChecked = false,
    disabled = false,
    error = false,
    errorMessage = "",
}) => {
    const sizeClasses = {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6",
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const labelSizeClasses = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={id}
                className={`inline-flex items-center gap-2 cursor-pointer ${labelSizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
                <input
                    type="checkbox"
                    id={id}
                    role="checkbox"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    className={`${sizeClasses[size]} accent-blue-600 dark:accent-blue-400rounded border-gray-300 dark:border-gray-600focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400${error ? "border-red-500 ring-red-500" : ""}`}
                />
                {label}
            </label>

            {error && errorMessage && (<span className="text-sm text-red-500 dark:text-red-400">{errorMessage}</span>)}
        </div>
    );
};