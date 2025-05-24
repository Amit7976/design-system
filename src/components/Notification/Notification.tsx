import React from "react";
import { CheckCircle, Info, AlertTriangle, XCircle } from "lucide-react";

const defaultIcons: Record<string, React.ReactNode> = {
    info: <Info className="text-blue-600 dark:text-blue-300" size={20} />,
    success: <CheckCircle className="text-green-600 dark:text-green-300" size={20} />,
    warning: <AlertTriangle className="text-yellow-600 dark:text-yellow-300" size={20} />,
    error: <XCircle className="text-red-600 dark:text-red-300" size={20} />,
};

const variantClasses: Record<string, string> = {
    info: "bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700",
    success: "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900 dark:text-green-100 dark:border-green-700",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-700",
    error: "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900 dark:text-red-100 dark:border-red-700",
};

const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-5 py-3 text-lg",
};

const alignClasses: Record<string, string> = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export type NotificationProps = {
    variant?: "info" | "success" | "warning" | "error";
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    showIcon?: boolean;
    size?: "sm" | "md" | "lg";
    align?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "center";
    duration?: number;
    onClose?: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
    variant = "info",
    title,
    description,
    icon,
    showIcon = true,
    size = "md",
    align = "top-center",
    duration = 5000,
    onClose,
}) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose?.();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return (
        <div
            role="alert"
            aria-live="polite"
            className={`fixed z-50 flex items-start gap-3 rounded-xl shadow-md transition-all animate-fade-in
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${alignClasses[align]}`}
        >
            {showIcon && (
                <div className="mt-1">
                    {icon || defaultIcons[variant]}
                </div>
            )}
            <div>
                {title && <div className="font-semibold mb-1">{title}</div>}
                {description && <div className="text-sm opacity-90">{description}</div>}
            </div>
        </div>
    );
};
