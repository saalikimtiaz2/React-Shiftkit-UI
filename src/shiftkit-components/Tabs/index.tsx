"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

type TabsProps = {
    children: ReactNode;
};

type TabProps = {
    label: string;
    icon?: ReactNode;
    children: ReactNode;
};

export const Tabs = ({ children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className='scrollbar-hidden mx-auto flex w-max items-center gap-x-4 overflow-x-scroll border-b pt-2 md:justify-center'>
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        return (
                            <button
                                key={child.props.label}
                                name={child.props.label}
                                type='button'
                                className={`relative px-2 pb-1 text-sm font-medium outline-none md:px-4 md:text-lg ${activeTab === index ? "borde-primary-100 text-primary-100" : "text-gray-600"}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {child.props.icon && (
                                    <div
                                        className={`mx-auto mb-2 w-max transition-all duration-300 ease-in-out ${activeTab === index ? "fill-primary-100" : "fill-gray-500"}`}
                                    >
                                        {child.props.icon}
                                    </div>
                                )}
                                <span
                                    className={`block ${child.props.icon && "mx-auto max-w-[7ch] truncate text-center"}`}
                                >
                                    {child.props.label}
                                </span>
                                {activeTab === index ? (
                                    <motion.div
                                        className='absolute -bottom-0 left-0 right-0 h-[3px] rounded-full bg-primary-100'
                                        layoutId='underline'
                                    />
                                ) : null}
                            </button>
                        );
                    }
                    return null;
                })}
            </div>
            <div className='tab-content'>
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        return activeTab === index ? child : null;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export const Tab = ({ children }: TabProps) => {
    return <div>{children}</div>;
};

type TabPanelProps = {
    children: ReactNode;
};

export const TabPanel = ({ children }: TabPanelProps) => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className='py-4'>{children}</div>{" "}
        </motion.div>
    );
};
