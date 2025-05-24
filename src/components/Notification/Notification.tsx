import React from "react";
import { CheckCircle, Info, AlertTriangle, XCircle } from "lucide-react";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const defaultIcons: Record<string, React.ReactNode> = {
    info: <Info className="text-blue-600" size={20} />,
    success: <CheckCircle className="text-green-600" size={20} />,
    warning: <AlertTriangle className="text-yellow-700" size={20} />,
    error: <XCircle className="text-red-600" size={20} />,
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const variantClasses: Record<string, string> = {
    default: "bg-white text-black border border-gray-100",
    info: "bg-blue-50 text-blue-500 border border-blue-200",
    success: "bg-green-50 text-green-500 border border-green-200",
    warning: "bg-yellow-50 text-yellow-600 border border-yellow-200",
    error: "bg-red-50 text-red-500 border border-red-200",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sizeClasses = {
    sm: "px-3 pt-4 pb-3.5 text-base",
    md: "px-4 pt-5 pb-4 text-lg",
    lg: "px-5 pt-6 pb-5 text-xl",
    long_sm: "px-3 pt-4 pb-3.5 text-base w-full",
    long_md: "px-4 pt-5 pb-4 text-lg w-full",
    long_lg: "px-5 pt-6 pb-5 text-xl w-full",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const alignClasses: Record<string, string> = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type NotificationProps = {
    variant?: "default"|"info" | "success" | "warning" | "error";
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    showIcon?: boolean;
    size?: "sm" | "md" | "lg" | "long_sm" | "long_md" | "long_lg";
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            className={`fixed z-50 flex items-start gap-3 px-5 rounded-xl shadow-xl min-w-96 max-w-7xl transition-all animate-fade-in
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