"use client";
import React, { ReactNode, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface AccordionItem {
    id: string;
    label: string | ReactNode;
    content?: string | ReactNode;
    number?: number;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    variant?: "default" | "numbered";
    customStyles?: {
        container?: string;
        button?: string;
        content?: string;
        icon?: string;
        numberCircle?: string;
    };
}

const AccordionBreederAbout: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    variant = "default",
    customStyles = {},
}) => {
    const [openSections, setOpenSections] = useState<{
        [key: string]: boolean;
    }>({});

    const toggleSection = (id: string) => {
        setOpenSections((prev) => {
            if (allowMultiple) {
                return { ...prev, [id]: !prev[id] };
            }
            const newState = Object.keys(prev).reduce(
                (acc, key) => ({ ...acc, [key]: false }),
                {}
            );
            return { ...newState, [id]: !prev[id] };
        });
    };

    return (
        <div className={`flex flex-col gap-1 ${customStyles.container ?? ""}`}>
            {items.map((item) => (
                <div
                    key={item.id}
                    className={
                        variant === "numbered" ? "pb-1 last:border-b-0" : ""
                    }
                >
                    <button
                        type='button'
                        onClick={() => toggleSection(item.id)}
                        className={
                            variant === "default"
                                ? `flex w-full justify-between rounded-lg bg-lightTheme-200 px-4 py-6 text-left font-semibold text-[#646A7C] ${customStyles.button ?? ""}`
                                : `flex w-full items-center justify-between py-4 text-left text-sm font-medium text-gray-700 ${customStyles.button ?? ""}`
                        }
                    >
                        {variant === "numbered" && item.number !== undefined ? (
                            <div className='flex items-center'>
                                <span
                                    className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm text-white ${customStyles.numberCircle ?? ""}`}
                                >
                                    {item.number}
                                </span>
                                {item.label}
                            </div>
                        ) : (
                            item.label
                        )}
                        <span
                            className={
                                variant === "default"
                                    ? `rounded-full ${customStyles.icon || ""}`
                                    : "text-gray-400"
                            }
                        >
                            {openSections[item.id] ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>
                    {openSections[item.id] && item.content && (
                        <div
                            className={
                                variant === "default"
                                    ? `rounded-md p-3 text-[#646A7C] ${customStyles.content || ""}`
                                    : `mt-2 pl-9 pr-4 text-sm text-gray-600 ${customStyles.content || ""}`
                            }
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionBreederAbout;
