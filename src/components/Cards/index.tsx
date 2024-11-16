import React from "react";

function CardBody({
    children,
    className,
    noHoverImage,
}: {
    children: React.ReactNode;
    className?: string;
    noHoverImage?: boolean;
    noTranslate?: boolean;
}) {
    return (
        <div
            className={`${!noHoverImage && "card-body"} ${className} relative overflow-hidden rounded-2xl border border-gray-200 bg-white`}
        >
            {children}
        </div>
    );
}

export default CardBody;
