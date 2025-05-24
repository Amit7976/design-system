import React, { useEffect, useState } from "react";
import { Toast } from "./Toast";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Variant = (typeof variants)[number];
type Align = (typeof aligns)[number];
type Size = (typeof sizes)[number];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ToastVariant: React.FC = () => {
    const [variant, setVariant] = useState<Variant>("success");
    const [align, setAlign] = useState<Align>("top-right");
    const [size, setSize] = useState<Size>("lg");
    const [showIcon, setShowIcon] = useState(true);
    const [showToast, setShowToast] = useState(true);
    const [showDescription, setShowDescription] = useState(false);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Remove toast after timeout
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const triggerToast = () => {
        setShowToast(false); // Remove existing toast instantly
        setTimeout(() => setShowToast(true), 10); // Re-render toast
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                                triggerToast();
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
                                triggerToast();
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
                                triggerToast();
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
                            triggerToast();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${showIcon ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Show
                    </button>
                    <button
                        onClick={() => {
                            setShowIcon(false);
                            triggerToast();
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
                            triggerToast();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${showDescription ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Show
                    </button>
                    <button
                        onClick={() => {
                            setShowDescription(false);
                            triggerToast();
                        }}
                        className={`py-2 text-white transition border-2 px-10 rounded-lg ${!showDescription ? "bg-orange-500" : "bg-transparent"
                            }`}
                    >
                        Hide
                    </button>
                </div>
            </div>

            {/* Active Toast */}
            {showToast && (
                <Toast
                    variant={variant}
                    align={align}
                    title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`}
                    description={showDescription ? `Size: ${size}, Icon: ${showIcon ? "Yes" : "No"}` : undefined}
                    showIcon={showIcon}
                    size={size}
                    duration={3000}
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
};