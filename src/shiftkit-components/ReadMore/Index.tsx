"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface ReadMoreProps {
    text: string; // Full text content to be displayed
    maxLength?: number; // Optional maximum number of characters to display before truncating (default: 150)
    className?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({
    text,
    maxLength = 150,
    className,
}) => {
    // State to track if the full text is shown
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle between showing full and truncated text
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine if we need to truncate the text or not
    const shouldTruncate = text?.length > maxLength;

    const t = useTranslations("common");

    return (
        <div>
            <p
                className={`text-[#646A7C] ${className} transition-all duration-300 ease-in-out`}
            >
                {/* If expanded, show full text. Otherwise, show truncated text */}
                {isExpanded || !shouldTruncate
                    ? text
                    : `${text.substring(0, maxLength)}... `}
                {/* Show the Read more/Show less button only if truncation is needed */}
                {shouldTruncate && (
                    <button
                        type='button'
                        onClick={toggleReadMore}
                        className='ml-1 inline text-blue-500 hover:underline focus:outline-none'
                    >
                        {isExpanded
                            ? t("buttons.readLess")
                            : t("buttons.readMore")}
                    </button>
                )}
            </p>
        </div>
    );
};

export default ReadMore;
