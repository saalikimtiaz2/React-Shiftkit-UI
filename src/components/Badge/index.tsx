import React from "react";

type BadgePropTypes = {
    label?: string;
    varient?: "info" | "success" | "danger" | "warning" | "primary" | "normal";
    className?: string;
    children?: React.ReactNode;
};

const getVariant = (
    _variant: "info" | "success" | "danger" | "warning" | "primary" | "normal"
) => {
    let variantClasses = "";

    switch (_variant) {
        case "primary":
            variantClasses = "bg-primary-100 border-primary-100 text-white";
            break;
        case "info":
            variantClasses = "bg-info-100 border-info-100 text-white";
            break;
        case "success":
            variantClasses = "bg-success-100 border-success-100 text-white";
            break;
        case "danger":
            variantClasses = "bg-danger-100 border-danger-100 text-white";
            break;
        case "warning":
            variantClasses = "bg-warning-100 border-warning-100 text-white";
            break;
        case "normal":
            variantClasses = "bg-gray-100 border-gray-100 text-black";
            break;
        default:
            variantClasses = "bg-gray-200 border-gray-200 text-black";
            break;
    }

    return variantClasses;
};

const Badge = ({
    label,
    varient = "normal",
    className,
    children,
}: BadgePropTypes) => {
    return (
        <p
            className={`${className} flex w-max items-center gap-1 rounded-full border px-3 py-1 text-sm capitalize md:text-base ${getVariant(varient)}`}
        >
            {children}
            {label}
        </p>
    );
};

export default Badge;
