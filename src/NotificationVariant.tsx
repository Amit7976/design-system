import React, { useEffect, useState } from "react";
import { Notification } from "./components/Notification/Notification";

const variants = ["info", "success", "warning", "error"] as const;
const aligns = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
] as const;
const sizes = ["sm", "md", "lg"] as const;

type Variant = (typeof variants)[number];
type Align = (typeof aligns)[number];
type Size = (typeof sizes)[number];

export const NotificationVariantDemo: React.FC = () => {
    const [variant, setVariant] = useState<Variant>("success");
    const [align, setAlign] = useState<Align>("top-right");
    const [size, setSize] = useState<Size>("lg");
    const [showIcon, setShowIcon] = useState(true);
    const [showNotification, setShowNotification] = useState(true);
    const [showDescription, setShowDescription] = useState(false);

    // Remove Notification after timeout
    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => setShowNotification(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const triggerNotification = () => {
        setShowNotification(false); // Remove existing Notification instantly
        setTimeout(() => setShowNotification(true), 10); // Re-render Notification
    };

    return (
        <div className="p-6 space-y-10">
            {/* Variant Section */}
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">Select Variant</h2>
                <div className="flex gap-3 flex-wrap">
                    {variants.map((v) => (
                        <button
                            key={v}
                            onClick={() => {
                                setVariant(v);
                                triggerNotification();
                            }}
                            className={`py-2 text-white transition border-2 px-10 rounded-lg ${variant === v ? "bg-orange-500" : "bg-transparent"
                                }`}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>

            {/* Align Section */}
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">Select Position</h2>
                <div className="flex gap-3 flex-wrap">
                    {aligns.map((a) => (
                        <button
                            key={a}
                            onClick={() => {
                                setAlign(a);
                                triggerNotification();
                            }}
                            className={`py-2 text-white transition border-2 px-10 rounded-lg ${align === a ? "bg-orange-500" : "bg-transparent"
                                }`}
                        >
                            {a}
                        </button>
                    ))}
                </div>
            </div>

            {/* Size Section */}
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">Select Size</h2>
                <div className="flex gap-3">
                    {sizes.map((s) => (
                        <button
                            key={s}
                            onClick={() => {
                                setSize(s);
                                triggerNotification();
                            }}
                            className={`py-2 text-white transition border-2 px-10 rounded-lg ${size === s ? "bg-orange-500" : "bg-transparent"
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Icon Toggle */}
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">Show Icon</h2>
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setShowIcon(true);
                            triggerNotification();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${showIcon ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Show
                    </button>
                    <button
                        onClick={() => {
                            setShowIcon(false);
                            triggerNotification();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${!showIcon ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Hide
                    </button>
                </div>
            </div>
            {/* Icon Toggle */}
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">Show Description</h2>
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setShowDescription(true);
                            triggerNotification();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${showDescription ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Show
                    </button>
                    <button
                        onClick={() => {
                            setShowDescription(false);
                            triggerNotification();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${!showDescription ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Hide
                    </button>
                </div>
            </div>

            {/* Active Notification */}
            {showNotification && (
                <Notification
                    variant={variant}
                    align={align}
                    title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification`}
                    description={showDescription ? `Size: ${size}, Icon: ${showIcon ? "Yes" : "No"}` : undefined}
                    showIcon={showIcon}
                    size={size}
                    duration={3000}
                    onClose={() => setShowNotification(false)}
                />
            )}
        </div>
    );
};
